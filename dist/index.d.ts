/**
 * Project Random String
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */
export declare const Charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export type TCharset = typeof Charset;
export type TRandomChars = (prefix?: string, length?: number, charset?: TCharset) => string;
/**
 * A function for creating unique identifiers, and other random text.
 *
 * @param {string} prefix Prefix to be used
 * @param {number} length Length of random string
 * @param {Charset} charset Character set to be used
 *
 * @return {string} Random chars
 *
 * @see https://github.com/mo-inkhan/random-chars
 */
declare const randomChars: TRandomChars;
export default randomChars;
