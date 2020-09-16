import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
import { FormsComponent } from './forms/forms.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'datetime',
    component: DatetimeComponent
  },
  {
    path: 'eventcalendar',
    component: EventcalendarComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
