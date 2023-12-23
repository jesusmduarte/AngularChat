import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;
  private messageSubject: Subject<string>;
  public messages: Observable<string>;

  constructor() {
    this.messageSubject = new Subject<string>();
    this.messages = this.messageSubject.asObservable();

    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.onmessage = (event) => {
      this.messageSubject.next(event.data);
    };
  }

  sendMessage(message: string): void {
    this.socket.send(message);
  }
}
