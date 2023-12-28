import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';

export const slideFadeInUp = trigger('routeAnimations', [
  transition(':enter', []),
  transition(':leave', []),
  transition('* => *', [
    style({ position: 'relative' }),
    query(
      ':enter',
      [
        style({
          display: 'block',
          opacity: '0',
          transform: 'translateY(20px)',
        }),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({
          display: 'block',
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '300ms ease-in-out',
            style({ opacity: '0', transform: 'translateY(-20px)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '300ms ease-in-out',
            style({ opacity: '1', transform: 'translateY(0px)' })
          ),
        ],
        { delay: 400, optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);
