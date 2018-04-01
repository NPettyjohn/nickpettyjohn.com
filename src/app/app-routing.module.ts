import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path: 'about-me',
    pathMatch: 'full',
    component: AboutMeComponent
  },
  {
    path: 'portfolio',
    pathMatch: 'full',
    component: PortfolioComponent
  },
  {
    path: 'resume',
    pathMatch: 'full',
    component: ResumeComponent
  },
  {
    path: 'contact-me',
    pathMatch: 'full',
    component: ContactMeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
