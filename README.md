# Holiday Light Studio — iPad Edition

## What you downloaded

This is a **static web dashboard** for organizing six holiday-light apps (Govee, LotusLamp X, Dazzle Bright, Philips Hue, WiZ, and BRmesh), devices, shows, playlists, and schedules. It includes a **Keep Screen Awake** control.

**Important:** This is an organizer, not a fully integrated lighting/music controller. Merely creating a schedule in this dashboard does **not** guarantee the lights or music will start unattended. Your iPad must keep the page visible for the screen-wake feature, and iPadOS may still release the wake lock. Direct control depends on each manufacturer's app, device model, and any supported Apple Shortcuts actions.

## Files inside the download

- `index.html` — main dashboard; this must be at the top level of a published website
- `manifest.webmanifest` — Home Screen app details
- `sw.js` — offline caching when hosted on a compatible HTTPS website
- `icon.png` and `icon.svg` — dashboard icons
- `README.md` — these instructions
- `README.html` — easy-to-open version of these instructions

## Method A — Try the dashboard locally on your iPad (without GitHub)

1. Download the ZIP file from ChatGPT to the **Files** app.
2. Open **Files > Downloads**, then tap the ZIP once to extract it.
3. Tap `README.html` to read these instructions.
4. Try opening `index.html` from the extracted folder. Depending on the iPadOS version and how Files opens it, this may only show a preview or may restrict browser storage and app features.

**For reliable app-like Home Screen operation, publish the five website files using Method B.** Opening a local HTML file is not the equivalent of installing a hosted web app.

## Method B — Publish using GitHub Pages; no ChatGPT-to-GitHub connection needed

1. On your iPad, open **Safari** and go to https://github.com/new. Sign in with your GitHub account.
2. Under **Repository name**, enter `holiday-light-studio-ipad`. Set visibility to **Public**. You can check **Add a README file**. Tap **Create repository**.
3. Open the newly created repository and choose **Add file > Upload files**. If GitHub's mobile layout hides the option, use Safari's **Request Desktop Website**.
4. In the file picker, open the extracted Holiday Light Studio folder in **Files > Downloads**. Select exactly these FIVE files: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.png`, `icon.svg`.
5. **Do not upload the ZIP or private backups.** The five website files must be at the repository root, not within another folder.
6. Enter a commit message such as `Add holiday light dashboard` and tap **Commit changes**.
7. Within your repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**, and tap **Save**.
8. Once GitHub Pages publishes the site, open the URL displayed under **Settings > Pages**. It will typically look like `https://YOUR-USERNAME.github.io/holiday-light-studio-ipad/`.
9. In Safari, tap **Share > Add to Home Screen**, enable **Open as Web App** if offered, and tap **Add**.
10. Launch the new icon from your iPad Home Screen. Create your device groups, scenes, schedules, and playlist links.
11. Use the app's **Export Backup** setting periodically, and store backup files privately in Files. **Never upload backups with private information to your public GitHub repository.**

## Basic troubleshooting

- **GitHub wants 2FA:** Use the authenticator you configured in Apple Passwords. You do not need to connect GitHub to ChatGPT to upload files in Safari.
- **GitHub Pages shows 404:** Verify that `index.html` is in the repository root and **Settings > Pages** is configured for `main` / `/(root)`. Check the site's publish status there.
- **App does not appear on Home Screen:** Open the *published URL in Safari*, not the ZIP or local HTML preview, then use **Share > Add to Home Screen**.
- **iPad screen still sleeps:** Keep the dashboard in the foreground and enable the wake feature. You can also adjust **Settings > Display & Brightness > Auto-Lock** if available; iPadOS and power management may still limit behavior.
- **Schedules do not switch lights:** That is expected without a configured compatible integration or shortcut; the organizer does not bypass manufacturers' controls.

## References (APA style)

GitHub. (n.d.). *Creating a new repository*. GitHub Docs. https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository

GitHub. (n.d.). *Adding a file to a repository*. GitHub Docs. https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

GitHub. (n.d.). *Configuring a publishing source for your GitHub Pages site*. GitHub Docs. https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Apple. (n.d.). *Turn a website into an app in Safari on iPad*. Apple Support. https://support.apple.com/en-gb/guide/ipad/ipad8f1f7a29/ipados

MDN Web Docs. (n.d.). *Screen Wake Lock API*. https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
