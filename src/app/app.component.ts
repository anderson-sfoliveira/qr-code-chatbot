import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

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
}
