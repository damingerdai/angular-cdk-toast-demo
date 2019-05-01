import { InjectionToken } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

export interface ToastData {
  text: string;
  type: ToastType;
}

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');

export type ToastType = 'warning' | 'info' | 'success';

export class ToastRef {

  constructor(readonly overlay: OverlayRef) {

  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    return this.overlay.overlayElement ? this.overlay.overlayElement.getBoundingClientRect() : { bottom: 0 };
  }

  close() {
    this.overlay.dispose();
  }
}
