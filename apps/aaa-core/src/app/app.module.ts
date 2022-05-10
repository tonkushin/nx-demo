import { FooterModule, HeaderModule } from '@aaa/ui';
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

const MODULES = [HeaderModule, FooterModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
