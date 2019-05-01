import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toast-demo';

  constructor(
    private toastService: ToastService
  ) {

  }

  toast() {
    this.toastService.show({ text: 'Everything is ok!', type: 'success' });
  }
}
