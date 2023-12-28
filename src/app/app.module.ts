import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextComponent } from './text/text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { RfiltrationComponent } from './rfiltration/rfiltration.component';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from './offers/offers.component';
import{HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoute:Routes=[
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Privacy',component:PrivacyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextComponent,
    NavbarComponent,
    InputComponent,
    RfiltrationComponent,
    OffersComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
