import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const DefualtAnimations = {
    changeDivSize: trigger('changeDivSize',[
        state('initial',style({
            marginLeft: '-20px'
        })),
        transition('initial=>*',[
            animate('.5s linear',keyframes([
                style({
                    marginLeft: '-20px',
                    offset: 0
                }),
                style({
                    marginLeft: '-10px',
                    offset: 0.1
                }),
                style({
                    marginLeft: '8px',
                    offset: 0.3
                }),
                style({
                    marginLeft: '0px',
                    offset: 1
                })
            ]))
        ])
    ])
}