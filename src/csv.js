/**
 * CSVを操作するためのクラス。
 *
 * 2列かつ1行目からデータが始まることを前提としています。
 */
export default class CSV {
  /**
   * クラスのインスタンス化を阻止する。
   */
  constructor() {
    throw new TypeError('TypeError: このクラスはインスタンス化できません');
  }

  /**
   * CSVからオブジェクトに変換する。
   *
   * @param {string} csv - オブジェクトに変換するCSV
   * @return {Object<string, string>} 変換されたオブジェクト
   */
  static parse(csv) {
    /** @type {Object<string, string>} */
    const data = {};
    for (const line of csv.split('\n')) {
      const values = line.split(',');
      if (values.length === 0) {
        continue;
      } else if (values.length !== 2) {
        throw new TypeError('TypeError: 無効な形式のCSV');
      } else {
        data[values[0]] = values[1];
      }
    }
    return data;
  }

  /**
   * オブジェクトからCSVを生成する。
   *
   * @param {Object<string, string>} obj - CSVに変換するオブジェクト
   * @return {string} 生成されたCSV
   */
  static stringify(obj) { // eslint-disable-line unicorn/prevent-abbreviations
    /** @type {string} */
    let csv = '';
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      csv += `${key},${obj[key]}\n`;
    }
    return csv;
  }
}
