import { animate, animateChild, group, keyframes, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
trigger('routeAnimations', [
  transition('web1 <=> web2', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms linear', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms linear', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('web2 <=> web3', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms linear', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms linear', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('web3 <=> web4', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms linear', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms linear', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('web4<=> web5', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms ease-in-out', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms ease-in-out', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('web5 <=> city', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms ease-in-out', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms ease-in-out', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('course <=> web5', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1000ms ease-in-out', style({ top: '-100%' }))
      ]),
      query(':enter', [
        animate('1000ms ease-in-out', style({ top: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('city <=> course', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        animate('1000ms ease-in-out', keyframes([
          style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
          style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
        ])),
      ]),
      query(':leave', [
        animate('1000ms ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
          style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
        ])),
      ])
    ]),
  ])
]);
