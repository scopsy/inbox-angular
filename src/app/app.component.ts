import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NovuUI } from '@novu/js/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('notificationInbox') notificationInbox!: ElementRef<HTMLElement>;
  title = 'inbox-angular';

  ngAfterViewInit() {
    const novu = new NovuUI({
      options: {
        applicationIdentifier: '123',
        subscriberId: '456',
      },
    });

    novu.mountComponent({
      name: 'Inbox',
      props: {},
      element: this.notificationInbox.nativeElement,
    });
  }
}
