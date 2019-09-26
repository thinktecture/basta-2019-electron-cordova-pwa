import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

declare var window: {ipc: any};
@Injectable({
  providedIn: 'root'
})
export class MessagingService{
  constructor(private readonly _ngZone: NgZone,
    private readonly _router: Router) { }

  public listen(){
    window.ipc.on('route', (event, message)=> {
      this._ngZone.run(()=>{
        this._router.navigate(['/','product', message]);
      });
    });
  }
}
