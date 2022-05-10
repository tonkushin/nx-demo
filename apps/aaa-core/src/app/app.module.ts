import { ApiService } from '@aaa/api';
import { FooterModule, HeaderModule, UserModule } from '@aaa/ui';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule
} from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

const MODULES = [HeaderModule, FooterModule, UserModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
    HttpClientModule,
    ...MODULES
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
