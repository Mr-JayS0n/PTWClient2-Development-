import { Component, OnInit } from '@angular/core';
import { SignalRHubServiceService } from 'src/Service/signal-rhub-service.service';

@Component({
  selector: 'app-forminfo',
  templateUrl: './forminfo.component.html',
  styleUrls: ['./forminfo.component.scss']
})
export class ForminfoComponent{

  id?:any;
  name?:any;
  selectedPermitType?: any;
  isWorkAtHeight?: any;
  selectedLocationOfWork?: any;
  startDate?: any;
  endDate?: any;

  //constructor(x:number);
  // constructor(id?:any, name?:any, selectedPermitType?:any, isWorkAtHeight?:any, selectedLocationOfWork?:any,
  //   startDate?:any,endDate?:any)

  constructor(id?:Number, name?:String, selectedPermitType?:String, isWorkAtHeight?:Boolean, selectedLocationOfWork?:String,
    startDate?:Date,endDate?:Date, public signalrhubservice?: SignalRHubServiceService){ 
    this.id = id;
    this.name = name;
    this.selectedPermitType = selectedPermitType;
    this.isWorkAtHeight = isWorkAtHeight;
    this.selectedLocationOfWork = selectedLocationOfWork;
    this.startDate = startDate;
    this.endDate = endDate;
  }
  //This type is not supported as injection token.
  
  async receiveDataFromServer(id:any)
  {
    await this.signalrhubservice?.hubConnection.invoke("sendDataFrmServer",id).finally(()=>
    {
      console.log("Calling sendDataFrmServer() from server")
    })
    .catch((err:any) => console.error(err));
  }
  
  async listenDataFromServer()
  {
    await this.signalrhubservice?.hubConnection.on("responseDataFrmServer",(formInfo:any)=>
    {
      this.id = formInfo.id;
      this.name = formInfo.name;
      this.selectedPermitType = formInfo.selectedPermitType;
      this.isWorkAtHeight = formInfo.isWorkAtHeight;
      this.selectedLocationOfWork = formInfo.selectedLocationOfWork;
      this.startDate = formInfo.startDate;
      this.endDate = formInfo.endDate;
    }).then((result:any) =>{
      console.log(result)
      let forminfo = new ForminfoComponent();
      forminfo = result;
    });//call getFormInfo if this console.log has no issue.
  }


  getFormInfo(id:any):ForminfoComponent
  {
    let formValue: any[10];
    return formValue;
  }

  forminfotest()
  {
    console.log("Testing");
  }

  //Migrated from forminfo.component to request-Proposal.component
  // public async sendDataFromClient(formInfo:ForminfoComponent)
  // {
  //   await this.signalrhubservice?.hubConnection.invoke("receiveDataFrmClient",formInfo).finally(()=>
  //   {
  //     console.log("Calling receiveDataFrmClient()from server")
  //   })
  //   .catch((err:any) => console.error(err));
  // }


  setFormInfo(input:any[10]):ForminfoComponent
  {
    let formValue: any[10];
    return formValue = input;
  }

}
