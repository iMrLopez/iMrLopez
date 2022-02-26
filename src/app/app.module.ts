import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BioComponent } from './components/bio/bio.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TestimonialsComponent } from './components/resume/components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { SafePipe } from './shared/pipes/safeUrl.pipe';
import { InstagramComponent } from './components/instagram/instagram.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BioComponent,
    NavComponent,
    ServicesComponent,
    ResumeComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SafePipe,
    InstagramComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
