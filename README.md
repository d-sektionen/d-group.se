# D-Group website

React website for D-Group, using React Router and Material UI.

## Local development

Install Node.js and npm, then run `npm ci` and `npm start`.
The development site opens at http://localhost:3000. Navigation uses hash URLs, such as `/#/groupies`.

## Update content

- Members: edit the `Groupies` array in `src/components/Groupies/index.js`. The first member is featured; the rest display in array order. Keep each email unique. Portraits live in `src/images/dg2627/profiler/profiler-optimized/`.
- Profile questions and popup: `src/components/Groupies/Information.jsx` and `Card.js`.
- Homepage and events: `src/components/Start/index.js`. The older `/fester` route has separate content in `src/components/fester/index.js`; keep event details consistent.
- Homepage photograph: supply WebP variants at 768, 1536, and 2400 pixels wide and update the imports. Keep the original for future edits.
- Contacts: `src/components/Kontakt/index.js`. The confirmed sound-and-light contact is `j9@d-group.se`.
- Social links: `src/components/Navbar/index.js`. `INSTAGRAM_URL` is shared by desktop and mobile.
- Friends: edit `Festerier` in `src/components/Friends/index.js`; all entries render automatically.
- Historical groups: `src/components/WoF/index.js`.
- Videos: `src/components/Taggfilmer/index.js`.

## Check changes

Run `npm test -- --watchAll=false` and `npm run build`.
Also check navigation, profile opening/closing, and narrow phone screens before publishing.
Tests cover navigation, keyboard profile access, email behavior, and friend links.

## Publish

`npm run deploy` builds and publishes the build directory to the `gh-pages` branch. This requires GitHub write access and changes the published site. The custom domain is configured in `public/CNAME`; the asset base URL is `homepage` in `package.json`.

## Maintenance

The project includes older Create React App and gallery dependencies. Handle dependency upgrades separately and check the gallery, navigation, and production build. Unused historical components remain for reference; the active homepage is `src/components/Start/index.js`.
