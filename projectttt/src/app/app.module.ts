import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChatComponent } from './chat/chat.component';
import { UniversitiesComponent } from './universities/universities.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewComponentComponent,
    ChatComponent,
    UniversitiesComponent,
    SubscribeComponent,
    ProposComponentComponent,
    ContactComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
