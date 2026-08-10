"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  className?: string;
  /** Inline widget height (CSS length). Defaults to 700px. */
  height?: string;
};

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

function ensureCalendlyStylesheet() {
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  document.head.appendChild(link);
}

/**
 * Loads Calendly CSS/JS only when this widget mounts (not in the global layout).
 * Keeps third-party CSS out of the critical path for LCP/PageSpeed.
 */
export function CalendlyWidget({
  url = "https://calendly.com/drjanduffy/new-phone-call",
  className = "",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    ensureCalendlyStylesheet();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || initialized.current || !containerRef.current) return;
    if (!window.Calendly) return;

    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
    initialized.current = true;
  }, [shouldLoad, url]);

  return (
    <div className={className}>
      {shouldLoad ? (
        <Script
          src={CALENDLY_JS}
          strategy="lazyOnload"
          onLoad={() => {
            if (initialized.current || !containerRef.current || !window.Calendly)
              return;
            window.Calendly.initInlineWidget({
              url,
              parentElement: containerRef.current,
            });
            initialized.current = true;
          }}
        />
      ) : null}
      <div
        id={`calendly-inline-${widgetId}`}
        ref={containerRef}
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: "320px", height, minHeight: height }}
      />
    </div>
  );
}

export default CalendlyWidget;
