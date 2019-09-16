import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const DefualtAnimations = [
    trigger('SubMenuHover',[
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
                    marginLeft: '5px',
                    offset: 0.3
                }),
                style({
                    marginLeft: '0px',
                    offset: 1
                })
            ]))
        ])
    ]),

    trigger('MainMenuHover',[
        state('initial',style({
            // position: 'absolute',
            // width: '90%',
            // marginLeft: '-30px',
            // marginTop: '-5px',
            // height: '40px',
            backgroundColor: 'white'
        })),
        state('final',style({
            // position: 'absolute',
            // width: '90%',
            // marginLeft: '-30px',
            // marginTop: '-5px',
            // height: '40px',
            backgroundColor: '#9d002b'
        })),
        transition('initial=>final',animate('1s')),
        transition('final=>initial',animate('1s'))
    ])
]