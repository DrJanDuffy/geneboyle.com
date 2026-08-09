import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'

const root = process.cwd()
const assets = [
  ['lib/assets/hero-bg-1.b64.txt', 'public/Image/hero_bg_1.jpg'],
  ['lib/assets/heyberkshire.b64.txt', 'public/images/global-hero/heyberkshire.jpg'],
]

for (const [src, dest] of assets) {
  const b64 = readFileSync(join(root, src), 'utf8').replace(/\s+/g, '')
  const out = join(root, dest)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, Buffer.from(b64, 'base64'))
  console.log(`decoded ${src} -> ${dest} (${Buffer.from(b64, 'base64').length} bytes)`)
}
