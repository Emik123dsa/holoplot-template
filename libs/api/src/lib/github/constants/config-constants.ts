export class GithubApiConfigConstants {
  public static readonly API_BASE_SCHEME_CONFIG = 'https';
  public static readonly API_BASE_SCHEME_DOC = '';

  public static readonly API_BASE_PORT_CONFIG = 443;
  public static readonly API_BASE_PORT_DOC = '';

  public static readonly API_BASE_HOST_CONFIG = 'github.com';
  public static readonly API_BASE_HOST_DOC: string = '';

  public static readonly API_BASE_URL_CONFIG: URL | string = '';
  public static readonly API_BASE_URL_DOC: string = '';
}

// const findRepositoriesByName = <T extends unknown>(
//     repository: string | null,
//   ): Observable<T | null> => {
//     return fromFetch(
//       'https://api.github.com/users/%s/repos'.replace(
//         '%s',
//         repository as string,
//       ),
//       {
//         method: 'GET',
//         headers: {
//           Accept: 'application/vnd.github+json',
//           'Content-Type': 'application/vnd.github+json',
//         },
//         referrerPolicy: 'same-origin',
//         cache: 'no-cache',
//       },
//     ).pipe(
//       mergeMap((response: Response): Promise<T> | Observable<any> =>
//         iif(() => response.ok, response.json(), EMPTY),
//       ),
//       switchMap((json: () => void): Observable<T> => {
//         return new Observable((observer: Observer<T>): TeardownLogic => {
//           if (json) {
//             observer.next(Object.assign({}, json as T));
//             return observer.complete();
//           }
//           observer.error(null);
//           return (): void => {};
//         });
//       }),
//       throwIfEmpty(),
//       catchError((err: Error) => {
//         console.log(err);
//         return throwError(err);
//       }),
//     );
//   };
