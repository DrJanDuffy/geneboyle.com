"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I can help with Irvine-to-Las Vegas relocation questions, neighborhoods, and next steps. For a call, use (702) 222-1964 or book on the Contact page.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Convert messages to API format (exclude system message)
      const conversation = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          conversation,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again or call Dr. Gene Boyle at (702) 222-1964.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-ink hover:bg-accent text-paper p-4 z-50 transition-colors"
          aria-label="Open relocation chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[min(24rem,calc(100vw-2rem))] h-[min(37.5rem,calc(100vh-5rem))] bg-paper z-50 flex flex-col border border-[var(--line)] shadow-[0_20px_50px_-20px_rgba(18,22,28,0.45)]">
          <div className="bg-ink text-paper p-4 flex justify-between items-center">
            <div>
              <h3 className="font-display text-lg">Relocation assistant</h3>
              <p className="font-sans text-xs text-paper/60">
                Quick answers · then call (702) 222-1964
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-paper/10 p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 ${
                    message.role === "user"
                      ? "bg-ink text-paper"
                      : "bg-paper-2 text-ink"
                  }`}
                >
                  <p className="font-sans text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-paper-2 p-3">
                  <Loader2 className="h-5 w-5 animate-spin text-accent" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-[var(--line)]">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about the relocation loop…"
                disabled={isLoading}
                className="flex-1 rounded-none border-[var(--line)] bg-paper"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="rounded-none bg-ink hover:bg-accent text-paper"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="font-sans text-xs text-ink-muted mt-2 text-center">
              AI assist · Call (702) 222-1964 for licensed advice
            </p>
          </div>
        </div>
      )}
    </>
  );
}
