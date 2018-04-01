import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SiteThemeComponent } from './site-theme/site-theme.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutMeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactMeComponent,
    NavigationBarComponent,
    SiteThemeComponent,
    LanguageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
