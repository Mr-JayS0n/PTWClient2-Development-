import { NgModule } from '@angular/core';
import { 
  RouterModule, 
  Routes, 
  PreloadAllModules 
} from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(module => module.LandingModule)
  },
  {
    path: 'request-proposal',
    loadChildren: () => import('./request-proposal/request-proposal.module').then(module => module.RequestProposalModule)
  },
  {
    path: 'validator-sign-in',
    loadChildren: () => import('./validator-sign-in/validator-sign-in.module').then(module => module.ValidatorSignInModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }