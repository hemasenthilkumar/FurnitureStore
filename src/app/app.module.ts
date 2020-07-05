import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { LoginWsService } from './services/login-ws.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import {MatIconModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'signup',component:SignupComponent}
    ])
  ],
  providers: [LoginWsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
