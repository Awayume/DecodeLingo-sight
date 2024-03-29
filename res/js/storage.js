// SPDX-FileCopyrightText: 2024 Awayume <dev@awayume.jp>
// SPDX-License-Identifier: MIT

/**
 * @typedef {Object} DefinitionFileData - 定義ファイルの情報
 * @property {string} url - 定義ファイルのURL
 * @property {string} hash - 定義ファイルのSHA1ハッシュ
 *
 * @typedef {Object<string, string>} RuleSet - 文字列置き換えのルールセット
 */


/**
 * インポート済み定義ファイルの情報を取得する。
 *
 * @async
 * @return {Promise<Array<DefinitionFileData>>} 定義ファイルの情報
 */
export const getDefinitionFileDataList = async () => {
  const data = await chrome.storage.local.get(['definitionFileData']);
  return data.definitionFileData;
};


/**
 * インポート済み定義ファイルの情報を保存する。
 *
 * @async
 * @param {Array<DefinitionFileData>} data 定義ファイルの情報
 */
export const setDefinitionFileDataList = async (data) => {
  await chrome.storage.local.set({definitionFileData: data});
};


/**
 * 置き換えルールを取得する。
 *
 * @async
 * @return {Promise<RuleSet>} ルールセット
 */
export const getRules = async () => {
  const data = await chrome.storage.local.get(['rules']);
  return data.rules;
};


/**
 * 置き換えルールを保存する。
 *
 * @async
 * @param {RuleSet} rules - ルールセット
 */
export const setRules = async (rules) => {
  await chrome.storage.local.set({rules: rules});
};
