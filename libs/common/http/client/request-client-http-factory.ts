import { HttpMethod } from '../method-type-constants';

export class HttpClientRequestFactory {
  private _proxyMode: boolean = false;

  public setProxyMode(proxyMode: boolean): void {
    this._proxyMode = proxyMode;
  }

  // public setStrategy(): void {}

  public createRequest(uri: URL, method: HttpMethod): void {
    // return new
  }
}
