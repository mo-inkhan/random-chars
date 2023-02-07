/**
 * Project Random String
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */

import { TRandomString } from "./index.d";

/**
 * Random String.
 *
 * @param {string} prefix Prefix to be used
 * @param {number} length Length of random string
 * @param {string} charset Character set to be used
 *
 * @return {string} Random string
 */
const radomString: TRandomString = (prefix = "", length = 12, charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return prefix + str;
};

export default radomString;
