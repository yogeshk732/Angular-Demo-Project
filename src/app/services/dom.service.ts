import {APP_ID, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor( @Inject(PLATFORM_ID) private platformId: Object,
               @Inject(APP_ID) private appId: string) {

  }

  setCookie(cname, cvalue, exdays){
      if(isPlatformBrowser(this.platformId)){
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
  }

  setLocalStorage(key, value){
      localStorage.setItem(key, value);
      return true;
  }

  getLocalStorage(key){
    return localStorage.getItem(key);
  }

  removeLocalStorageItem(key){
    return localStorage.removeItem(key);
  }

}
