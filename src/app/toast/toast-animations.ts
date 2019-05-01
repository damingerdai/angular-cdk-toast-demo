import {
  AnimationAnimateChildMetadata,
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

export const toastAnimations: {
  readonly fadeToast: AnimationAnimateChildMetadata;
} = {
  fadeToast: trigger('fadeAnimation', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
    transition(
      'default => closing',
      animate('{{ fadeOut }}ms', style({ opacity: 0}))
    ),
  ]),
};

export type ToastAnimationState = 'default' | 'closing';
