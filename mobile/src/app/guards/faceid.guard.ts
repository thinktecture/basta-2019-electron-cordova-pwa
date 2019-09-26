import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

declare var CID: any;

@Injectable({
  providedIn: 'root'
})
export class FaceIdGuard implements CanActivate {

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable(observer=>{
      CID.checkAuth('Protected View', (result)=> {
        observer.next(result === 'success');
        observer.complete();
      }, () =>{
        observer.next(false);
        observer.complete();
      })
    });
  }

}
