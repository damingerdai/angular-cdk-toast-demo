import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';


@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatIconModule
  ],
  entryComponents: [ToastComponent]
})
export class ToastModule {

  public static forRoot(config = defaultToastConfig): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config}
        }
      ]
    }
  }

  constructor() {

  }
}
