import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

export class ErrorInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).do(event => {
            if (event instanceof HttpResponse) {
                if(event.status == 404){
                    throw(new Error("Not found"));
                }
                else{
                    return event;
                }
            }
        })
        .catch(err=>{
            return Observable.throw(err);
        })
   }
}
