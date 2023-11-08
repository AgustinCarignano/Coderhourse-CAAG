import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, concatMap, catchError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export abstract class HttpService<T> {
  constructor(
    protected _http: HttpClient,
    protected _baseUrl: string,
    protected authService: AuthService
  ) {}

  protected getAll(query?: string): Observable<T[]> {
    let url = query ? `${this._baseUrl}?${query}` : this._baseUrl;
    return this._http.get<T[]>(url, {
      headers: this.getHeaders(),
    });
  }

  protected getOne(id: number): Observable<T> {
    return this._http.get<T>(this._baseUrl + '/' + id, {
      headers: this.getHeaders(),
    });
  }

  protected update(id: number, data: T): Observable<T[]> {
    return this._http
      .put<T>(this._baseUrl + '/' + id, data, {
        headers: this.getHeaders(),
      })
      .pipe(concatMap(() => this.getAll()));
  }

  protected create(data: T): Observable<T[]> {
    return this._http
      .post<T[]>(this._baseUrl, data, {
        headers: this.getHeaders(),
      })
      .pipe(concatMap(() => this.getAll()));
  }

  protected delete(id: number): Observable<T[]> {
    return this._http
      .delete<void>(this._baseUrl + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(concatMap(() => this.getAll()));
  }

  private getHeaders() {
    return {
      Authorization: 'Bearer ' + this.authService.getTokenvalue(),
    };
  }
}
