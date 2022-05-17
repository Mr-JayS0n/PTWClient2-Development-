import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(protected router : Router) { }

  public ngOnInit(): void { }

  public goToPermitType() : void { 
    this.router.navigateByUrl('permit-type', { replaceUrl: true });
  }
}
