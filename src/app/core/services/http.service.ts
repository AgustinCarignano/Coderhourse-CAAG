import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, concatMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export abstract class HttpService<T> {
  constructor(
    protected _http: HttpClient,
    protected _baseUrl: string,
    private authService: AuthService
  ) {}

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this._baseUrl, {
      headers: this.getHeaders(),
    });
  }

  getOne(id: number): Observable<T> {
    return this._http
      .get<T[]>(this._baseUrl + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(map((resp) => resp[0]));
  }

  update(id: number, data: T): Observable<T[]> {
    return this._http
      .put<T>(this._baseUrl + '/' + id, data, {
        headers: this.getHeaders(),
      })
      .pipe(concatMap(() => this.getAll()));
  }

  create(data: T): Observable<T[]> {
    return this._http
      .post<T[]>(this._baseUrl, data, {
        headers: this.getHeaders(),
      })
      .pipe(concatMap(() => this.getAll()));
  }

  delete(id: number): Observable<T[]> {
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
