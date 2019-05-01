import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { ToastData, TOAST_DATA, ToastRef } from './toast.data';
import { toastAnimations, ToastAnimationState } from './toast-animations';
import { TOAST_CONFIG_TOKEN, ToastConfig } from './toast-config';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [toastAnimations.fadeToast]
})
export class ToastComponent implements OnInit, OnDestroy {

  animationState: ToastAnimationState = 'default';

  iconType: string;

  private intervalId: any;

  constructor(
    @Inject(TOAST_DATA) readonly data: ToastData,
    @Inject(TOAST_CONFIG_TOKEN) readonly toastConfig: ToastConfig,
    public ref: ToastRef
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type;
   }

  ngOnInit() {
    this.intervalId = setTimeout(() => {
      this.animationState = 'closing';
      // this.close();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }


  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const isFinished = this.animationState === 'closing';

    if (isFadeOut && isFinished) {
      this.close();
    }
  }

}
