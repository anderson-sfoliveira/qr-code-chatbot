import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'qr-code-chatbot';
  titleApp = `${environment.titleApp}`;
  bearer = `${environment.bearer}`;
  channelName = `${environment.channelName}`;
  private socket: any;//SocketIOClient.Socket;

  constructor() {
    // https://plataforma.apibrasil.com.br/plataforma/
    this.socket = io('https://socket.apibrasil.com.br', {
      query: {
        "bearer": `${environment.bearer}`, //obtenha seu bearer em Minhas APIS / Credenciais
        "channelName": `${environment.channelName}` //obtenha seu profileID em Meu Perfil
      },
    });

    this.socket.on('connect', () => {
      console.log('Conectado ao socket!');
    });

    this.socket.on('events', (events: any) => {
      console.log('events', events);

      if (events.data.wook === 'QRCODE') {
        const elementoQRCode = document.getElementById("qrcode");
        const qrCodeData = events.data.qrcode;
        const imgQRCode = document.createElement("img");
        imgQRCode.src = qrCodeData;
        if (elementoQRCode)
          elementoQRCode.appendChild(imgQRCode);
      }
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado do socket!');
    });
  }
}
