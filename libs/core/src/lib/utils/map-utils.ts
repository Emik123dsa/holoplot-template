/**
 * @param  {Map<string} map
 * @param  {} T>
 * @param  {Record<string} T>>{constobject
 * @param  {(value:T,key:string|number|symbol,map:Map<string,T>,)=>void=(value:T} T>={};constiterateIterable
 * @param  {string|number|symbol} key
 * @param  {Map<string} map
 * @param  {} T>
 * @param  {} keyasstring
 * @param  {} {object[keyasstring]=value;}};if(!MapUtils.isEmpty(map
 * @param  {} map.forEach(iterateIterable
 */
export class MapUtils {
  /**
   * @param  {Map<string} map
   * @param  {} T>
   * @returns Readonly
   */
  public static toObject<T>(map: Map<string, T>): Readonly<Record<string, T>> {
    const object: Record<string, T> = {};
    const iterateIterable: (
      value: T,
      key: string | number | symbol,
      map: Map<string, T>,
    ) => void = (
      value: T,
      key: string | number | symbol,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      map: Map<string, T>,
    ): void => {
      if (!Reflect.has(object, key as string)) {
        object[key as string] = value;
      }
    };
    if (!MapUtils.isEmpty(map)) map.forEach(iterateIterable);
    return object;
  }

  /**
   * @param  {Map<string} map
   * @param  {} T>
   */
  public static toString<T>(map: Map<string, T>): string | null {
    return MapUtils.isEmpty(map) ? null : map.toString();
  }

  /**
   * @param  {Map<string} map
   * @param  {} T>
   * @returns boolean
   */
  public static isEmpty<T>(map: Map<string, T>): boolean {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return map === null || map!.size === 0;
  }
}
