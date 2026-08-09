# DNS — geneboyle.com

Last verified: **2026-08-09**. Zone export archived at [`dns/geneboyle.com.zone.txt`](./dns/geneboyle.com.zone.txt).

## Stack

| Layer | Provider | Notes |
|-------|----------|--------|
| Registrar / DNS | Cloudflare | Nameservers `amit` / `roxy` |
| Hosting | Vercel project `geneboyle-com` | Apex + `www` |
| Proxy | **DNS only (gray cloud)** | Required with Vercel — do not orange-cloud |

## Live web records

```
;; Site → Vercel (CNAME flattening at apex; cf-proxied:false)
geneboyle.com.      CNAME  ce11f43e5e035839.vercel-dns-016.com.
www.geneboyle.com.  CNAME  ce11f43e5e035839.vercel-dns-016.com.
```

### Expected HTTP behavior

- `https://www.geneboyle.com` → **200** (canonical)
- `https://geneboyle.com` → **308** → `https://www.geneboyle.com/`

## Email

Public contact on the site currently uses `Gene@CallDrBoyle.com` until Cloudflare Email Routing is enabled for `@geneboyle.com`.

## Rules of thumb

1. Keep Vercel CNAMEs **DNS-only** (gray cloud) — orange cloud breaks SSL with Vercel.
2. Do not delete `_vercel` TXT records if Vercel adds verification challenges.
3. After DNS changes, confirm SSL SANs cover both apex and `www`.
