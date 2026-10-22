# Sure Power Photo Report

A field photo app for Sure Power techs. It installs to the phone's home screen, works with no cell signal, and turns a job's photos and notes into one **PDF** (for the rental database) and one **HTML** report (for phones and the office AI).

**App link:** https://dsen-261021-1302.github.io/photo-report/

## Report types

| Type | Used for |
|---|---|
| Asset capture | New trailer builds: nameplates, with asset tags and trailer coverage check |
| Startup / commissioning | UPS display screens and settings |
| Load test | Display and load bank at each step; photo times build the timeline |
| Troubleshooting | Equipment label, alarm screens, the problem |
| Damage | Shipping or customer-site damage |
| Delivery / return | Condition at hand-off |
| Site photos | General and marketing |

## How it works

- Reports are saved **on the phone** for as many days as the job takes, and can be sent as many times as needed (whole report, or only the new photos).
- Each photo gets a quick check for blur, glare, darkness and low resolution.
- Sending uses the phone's own Share button (Mail, Gmail, Outlook, Messages, Drive). Without signal, the mail app holds it in the Outbox.
- Clearing a report warns if anything was never sent, and keeps it under **Cleared reports** for 7 days before deleting it.

## Install

- **iPhone:** open the link in **Safari** → Share → **Add to Home Screen**. Always open it from the icon.
- **Android:** open the link in **Chrome** → ⋮ → **Add to Home screen** / **Install app**.
- Open it once from the icon with signal, then it works offline.

## Privacy

This repository holds **only the blank app**. Photos, notes and reports never come here. They stay on each phone until the tech shares them. Never upload a report, PDF or photo to this repository.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline support. Change `VERSION` in it on every update |
| `manifest.webmanifest` | Home-screen name, colors and icon |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |

## Updating

Upload the new files over the old ones (**Add file → Upload files**), write a short commit message, and commit. Phones pick up the update the next time the app opens with signal.

## Change log

| Version | Date | Changes |
|---|---|---|
| 1.1 | 2026-10-22 | Clear-report safeguard: warning and "Send it now" when anything was never sent, tick box to confirm, 7-day Cleared reports with Restore |
| 1.0 | 2026-10-20 | First release: 7 report types, photo quality check, asset tags, PDF + HTML send, offline install |

Owner: Don Senavitis, Sure Power
