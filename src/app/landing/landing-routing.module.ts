import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'request-proposal',
    loadChildren: () => import('../request-proposal/request-proposal.module').then(module => module.RequestProposalModule)
  },
  {
    path: 'validator-sign-in',
    loadChildren: () => import('../validator-sign-in/validator-sign-in.module').then(module => module.ValidatorSignInModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
