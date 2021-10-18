/* MIT License

 * Copyright (c) 2021 Emil Shari.

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { AbstractConfigError } from './abstract-config-error';

/**
 * Creates an exception instance for {@link ConfigError}.
 *
 * @export
 * @class ConfigError
 * @extends {ReferenceError}
 */
export class ConfigError extends AbstractConfigError<string> {
  /**
   * Creates an instance of {@link ConfigError}.
   *
   * @param {string} message
   * @param {...unknown[]} args
   * @memberof ConfigError
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public constructor(public message: string, ...args: unknown[]) {
    super(message);
  }

  /**
   *
   * Get message in the case of error factory.
   *
   * @return {@link String}  {Readonly<string>}
   * @memberof ConfigError
   */
  public override getMessage(): Readonly<string> {
    return this.message;
  }
}
