import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InterestComponent } from './components/interest/interest.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PriceComponent } from './components/price/price.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialIconsComponent } from './shared/social-icons/social-icons.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    SkillsComponent,
    ProfileComponent,
    PortfolioComponent,
    InterestComponent,
    ExperienceComponent,
    EducationComponent,
    BlogComponent,
    ReferenceComponent,
    ClientsComponent,
    PriceComponent,
    ContactComponent,
    FooterComponent,
    SocialIconsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
