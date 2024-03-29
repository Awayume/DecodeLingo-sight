// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

// 開発時に拡張機能読み込みに使うためのスクリプト

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  await import(chrome.runtime.getURL('/src/main.js'));
})();
