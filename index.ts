/**
 * Project Random String
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */

import { TRandomChars, Charset } from "./index.d";

/**
 * Random Chars.
 *
 * @param {string} prefix Prefix to be used
 * @param {number} length Length of random string
 * @param {Charset} charset Character set to be used
 *
 * @return {string} Random chars
 */
const randomChars: TRandomChars = (prefix = "", length = 12, charset = Charset) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return prefix + str;
};

export default randomChars;
