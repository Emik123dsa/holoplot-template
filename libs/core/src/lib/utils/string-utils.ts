export class StringUtils {
  public static readonly EMPTY: string = '';

  public static equals(
    str: string | null,
    cmpStr: string | null,
  ): Readonly<boolean> {
    return str === cmpStr;
  }
  
  public static format(str: string, char: string): string {
    return str.replace('%s', char);
  }

  public static isEmpty(str: string): Readonly<boolean> {
    return str === null || !Array.from([...str]).length;
  }
}
