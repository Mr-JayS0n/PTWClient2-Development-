import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestProposalComponent } from './components/request-proposal/request-proposal.component';

const routes: Routes = [
  {
    path: '',
    component: RequestProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestProposalRoutingModule { }
