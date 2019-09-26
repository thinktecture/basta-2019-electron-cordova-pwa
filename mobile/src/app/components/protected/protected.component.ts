import { Component, OnInit } from '@angular/core';
declare var window: {plugins: any};

@Component({
  selector: 'basta-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  private _handle;
  constructor() { }

  ngOnInit() {
  }

  public flashIt(){
    let intensity = .1;
    this._handle = setInterval(()=>{
      if(intensity<1){
        intensity += .1;
      }
      window.plugins.flashlight.toggle(null, null, {intensity: intensity});
    }, 200);

  }

  public stopIt(){
    if(this._handle){
      clearInterval(this._handle);
    }
    this._handle = null;
  }
}
