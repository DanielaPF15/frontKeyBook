import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';//Permite crear una variable activa es decir permite escuchar los cambio de la variable

@Injectable({
  providedIn: 'root'
})
export class StorageService {
   private auth = new BehaviorSubject<{}>(null);
   //auth$ estamos indicando que es una variable reactiva
  auth$ =this.auth.asObservable();//Indica que nos podemos suscribir,ó escuchar los cambios

  constructor() { this.auth.next(this.dataUser()) }

  saveToken(token){
    localStorage.setItem('session',token)
    this.auth.next(this.dataUser())
  }
  getToken(){
    return localStorage.getItem('session')
  }
  dataUser(){
    const token =this.getToken()
    if(!token){
      return null
    }
    let urlBase64 =token.split('.')[1]
    let b64 = urlBase64.replace('-','+').replace('_','/')//Facilitar el algoritmo de encriptación de la decodificación de la información
    
    return  JSON.parse(this.decodeData(b64))
  }
  decodeData(string){
    return decodeURIComponent( atob(string).split('').map(
      function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16) ).slice(-2)
      }
    ).join('') )
    
  }
  removeSession(){
    localStorage.removeItem('session')
    this.auth.next(null)
  }
  
}
