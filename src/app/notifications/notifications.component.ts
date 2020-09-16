import { Component, OnInit } from '@angular/core';
import { Notifications, MbscOptionsService } from '@mobiscroll/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [Notifications]
})
export class NotificationsComponent implements OnInit {

  showToast() {
    this.notify.toast({
        message: 'Message sent',
        theme: this.optionsService.options.theme,
        duration: 1000,
    });
  }

  constructor(public notify: Notifications, protected optionsService: MbscOptionsService) { }

  ngOnInit(): void {
  }

}
