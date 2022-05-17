import { Component, OnInit } from '@angular/core';
import { SignalRHubServiceService } from 'src/Service/signal-rhub-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(public signalrhubservice: SignalRHubServiceService){}
  public title : string = 'permit-to-work';

  // Insert something here.
  ngOnInit():void
  {
    this.signalrhubservice.startConnection();
  }

  ngOnDestroy(): void{
    this.signalrhubservice.hubConnection.off();
  }
}

