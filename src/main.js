// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

// ビルド時に埋め込む
// @ts-expect-error
import packageJson from '../package.json' with {type: 'json'};


// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  console.info(
      '== DecodeLingo sight -----------------------------------------\n' +
      `  DLsight / ${packageJson.description}\n` +
      `  Version: v${packageJson.version}\n` +
      '  Developed by Awayume\n' +
      `  ${packageJson.homepage}\n` +
      '--------------------------------------------------------------',
  );

  // 仕様変更対策
  /** @type {{version: string}} */
  const lastStartup = (await chrome.storage.local.get(['lastStartup'])).lastStartup; // eslint-disable-line max-len, unicorn/no-await-expression-member
  if (lastStartup.version !== packageJson.version) {
    console.info('DecodeLingo sightが更新されました。');
    await chrome.storage.local.set({lastStartup: {version: packageJson.version}});
  }
})();
