// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

// ビルド時に埋め込む
// @ts-expect-error
import packageJson from '../package.json' with {type: 'json'};


(() => {
  console.info(
      '== DecodeLingo sight -----------------------------------------\n' +
      `  DLsight / ${packageJson.description}\n` +
      `  Version: v${packageJson.version}\n` +
      '  Developed by Awayume\n' +
      `  ${packageJson.homepage}\n` +
      '--------------------------------------------------------------',
  );
})();
