import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestProposalRoutingModule } from './request-proposal-routing.module';
import { RequestProposalComponent } from './components/request-proposal/request-proposal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RequestProposalComponent
  ],
  imports: [
    CommonModule,
    RequestProposalRoutingModule,
    SharedModule
  ]
})
export class RequestProposalModule { }
