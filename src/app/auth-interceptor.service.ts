import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
    private excludedEndpoints: string[] = ['http://localhost:8080/api/v1/auth/signup', 'http://localhost:8080/api/v1/auth/signin'];

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isExcludedEndpoint(request.url)) {
      // Skip interception for excluded endpoints
      return next.handle(request);
    }
    // Get the token from your authentication service
    const token = localStorage.getItem("token"); // Replace with your actual token
    console.log(localStorage.getItem("token"))
    // Clone the request and add the Bearer token to the Authorization header
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Pass the cloned request to the next handler
    return next.handle(authRequest);
  }
  private isExcludedEndpoint(url: string): boolean {
    // Check if the request URL matches any excluded endpoint
    return this.excludedEndpoints.some(endpoint => url.endsWith(endpoint));
  }

}
