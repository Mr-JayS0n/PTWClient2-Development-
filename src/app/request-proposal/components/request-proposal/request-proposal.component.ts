import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ForminfoComponent } from 'src/app/forminfo/forminfo.component';

import { SignalRHubServiceService } from 'src/Service/signal-rhub-service.service';

@Component({
  selector: 'app-request-proposal',
  templateUrl: './request-proposal.component.html',
  styleUrls: ['./request-proposal.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class RequestProposalComponent implements OnInit {
  public id?: number;
  public name: string = '';
  public firstFormGroup! : FormGroup;           //non-nullable
    public selectedPermitType : string = '';
      public isWorkAtHeight : boolean = false;
    public selectedLocationOfWork : string = '';
    public dateRange! : FormGroup;
      public startDate? : Date;
      public endDate? : Date;                   //nullable

  public secondFormGroup! : FormGroup;

  public thirdFormGroup! : FormGroup;

  constructor(private _formBuilder: FormBuilder, public signalrhubservice:SignalRHubServiceService) { }

  public ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required], //validates the first form page after clicked next
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],//validates the first form page after clicked next
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required], //validates the first form page after clicked next
    });

    this.dateRange = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  public onSubmitBtn()
  {
    // let formInfo = new ForminfoComponent(this.id, this.name, this.selectedPermitType, this.isWorkAtHeight,
    //    this.selectedLocationOfWork, this.startDate, this.endDate);
    
    let formInfo = new ForminfoComponent(this.id,this.name,this.selectedPermitType,this.isWorkAtHeight,this.selectedLocationOfWork
      ,this.startDate,this.endDate);
    
    this.sendDataFromClient(formInfo);
    formInfo.forminfotest();
    console.log(formInfo);
  }

  //send the data to server and save it to database
  public async sendDataFromClient(formInfo:ForminfoComponent)
  {
    ////original
    //await this.signalrhubservice?.hubConnection.invoke("receiveDataFrmClient",formInfo).finally(()=>
    await this.signalrhubservice?.hubConnection.invoke("receiveDataFrmClient", formInfo).finally(()=>
    {
      console.log("Calling receiveDataFrmClient()from server")
    }) 
    .catch((err:any) => console.error(err));
  }
}
