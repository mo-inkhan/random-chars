/**
 * Project Random String
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */

export const Charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
export type TCharset = typeof Charset

export type TRandomChars = (prefix?: string, length?: number, charset?: TCharset) => string;

/**
 * A function for creating unique identifiers, and other random text.
 *
 * @see https://github.com/mo-inkhan/random-chars
 */

export declare const randomChars: TRandomChars;

export default randomChars;
