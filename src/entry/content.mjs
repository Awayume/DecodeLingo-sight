// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

(() => {
  const script = document.createElement('script');
  script.setAttribute('src', chrome.runtime.getURL('/src/main.mjs'));
  script.setAttribute('type', 'module');
  document.body.append(script);
})();
