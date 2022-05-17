import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignalRHubServiceService {

  constructor(
    public router: Router,

    //public toastr: ToastrService,
  ) { }

  hubConnection: any;
  startConnection = () =>
  {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/toastr',{
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build();

    this.hubConnection.start().then(()=>
    {
      console.log("Connection Started");
    });
  }
}
