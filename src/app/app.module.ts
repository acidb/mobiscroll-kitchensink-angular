import { FormsModule } from '@angular/forms';
import { MbscModule, MbscOptionsService } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
import { FormsComponent } from './forms/forms.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { SettingsSectionComponent } from './settings-section/settings-section.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    HomeComponent,
    CalendarComponent,
    DatetimeComponent,
    EventcalendarComponent,
    FormsComponent,
    NotificationsComponent,
    AboutComponent,
    SettingsSectionComponent
  ],
  imports: [ 
    FormsModule,  
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [
    { provide: MbscOptionsService, useClass: MbscOptionsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
