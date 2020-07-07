import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  private getBaseUrl() {
    return environment.baseUrl;
  }

  private getDefaultHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }

  private prepareResponse(response: Response): any {
    if (response.status === 204) {
      return undefined;
    } else {
      return response;
    }
  }

  httpGetService(endpoint: String, localApi: Boolean = true, params?: String) {
    const path =
      (!localApi ? this.getBaseUrl() : '') +
      endpoint +
      (params ? `&${params}` : ``);
    return this.http
      .get(path, this.getDefaultHeaders())
      .pipe(map(this.prepareResponse));
  }

  httpPostService(endpoint: String, localApi: Boolean = true, body: any) {
    const path = (!localApi ? this.getBaseUrl() : '') + endpoint;
    return this.http
      .post(path, body, this.getDefaultHeaders())
      .pipe(map(this.prepareResponse));
  }
}
