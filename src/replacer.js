// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

/**
 * 文字列置き換えを実行するためのクラス。
 */
export default class Replacer {
  /**
   * クラスを初期化する。
   */
  constructor() {
    /** @type {Object<string, string>} */
    this.rules = {};
  }

  /**
   * 置き換え対象を追加する。
   *
   * @param {string} base - 元の文字列
   * @param {string} to - 置き換え後の文字列
   */
  add(base, to) {
    this.rules[base] = to;
  }

  /**
   * 文字列置き換えを実行する。
   */
  replace() {
    /** @type {Array<string>} */
    const targetTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
    for (const tag of targetTags) {
      for (const element of document.querySelectorAll(tag)) {
        if (!element.textContent) break;
        /** @type {string} */
        let text = element.textContent;
        // eslint-disable-next-line guard-for-in
        for (const base in this.rules) {
          text = text.replaceAll(base, this.rules[base]);
        }
        element.textContent = text;
      }
    }
  }
}
