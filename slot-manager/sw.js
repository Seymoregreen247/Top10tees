// Minimal service worker — this tool always needs a live connection to fetch/save
// current prices, descriptions, and photos, so it isn't built to work offline.
// This file exists only to satisfy the browser's install-as-app requirements.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", () => {}); // pass every request straight through to the network
