import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  socket : any;
  server = "http://localhost:3000/";

  constructor() {

    this.socket=io.io(this.server,{transports:['websocket','polling','flashsocket']});
   }

   listen(eventName:string){
     return new Observable((Subscriber)=>{
       this.socket.on(eventName,(data)=>{
         Subscriber.next(data);
       })
     })
   }

   emit(eventName:string,data:any){
     this.socket.emit(eventName,data);

   }



}
