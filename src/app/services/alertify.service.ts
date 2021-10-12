import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root' //root global herkesin erişilebilir bir ifade olduğunu söyler
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message)
  }

  warning(message:string){
    alertify.warning(message)
  }
}
