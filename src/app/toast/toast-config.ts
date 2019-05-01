import { InjectionToken } from '@angular/core';

export interface ToastConfig {
  posistion?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const TOAST_CONFIG_TOKEN = new InjectionToken<ToastConfig>('TOAST_CONFIG_TOKEN');

export const defaultToastConfig: ToastConfig = {
  posistion: {
    top: 20,
    right: 20
  },
  animation: {
    fadeIn: 2500,
    fadeOut: 300,
  }
};
