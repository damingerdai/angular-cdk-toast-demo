import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ToastModule } from './toast.module';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastComponent } from './toast.component';
import { ToastData, TOAST_DATA, ToastRef } from './toast.data';

@Injectable({
  providedIn: ToastModule
})
export class ToastService {

  private lastToast: ToastRef;

  show(data: ToastData) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.getPositionStrategy()
    });
    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;
    const injector = this.getInjector(data, toastRef, this.injector);

    const toastPortal = new ComponentPortal(ToastComponent, null, injector);
    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(TOAST_DATA, data);
    tokens.set(ToastRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }

  getPositionStrategy() {
    return this.overlay.position().global().top(this.getPosition()).right();
  }

  getPosition() {
    const position = this.lastToast ? this.lastToast.getPosition().bottom : 0;
    return position + 'px';
  }

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }
}
