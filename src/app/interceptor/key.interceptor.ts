import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = request.clone({
      url: request.url.replace('Top250Movies', 'Top250Movies/k_pqk9f7v9')});
    return next.handle(apiKey);
  }
}

//const API_KEY = 'k_pqk9f7v9';
//return next.handle(request.clone({ setHeaders: { API_KEY } }));
