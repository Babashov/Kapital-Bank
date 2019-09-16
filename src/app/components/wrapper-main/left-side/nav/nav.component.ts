import { Component, OnInit } from '@angular/core';
import { DefualtAnimations } from '../../../../animations/default-animation'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations:DefualtAnimations
})
export class NavComponent implements OnInit {

  defaultState: string = 'initial';
  MainMenuState: string = 'initial'

  navMenu: object[] = [
    {
      id: 1,
      name: 'Kreditlər'
    },
    {
      id: 2,
      name: 'Depozitlər'
    },
    {
      id: 3,
      name: 'Kartlar'
    },
    {
      id: 4,
      name: 'Pul köçürmələri',
    },
    {
      id: 5,
      name: 'Biznes üçün'
    },
    {
      id: 6,
      name: 'Elektron sənədlə'
    },
    {
      id: 7,
      name: 'Fərdi bankçılıq'
    }
  ];



  navSubMenu: object[] = [
    {
      id: 1,
      name: 'Gündəlik tələbat krediti',
      parentId: 1
    },
    {
      id: 2,
      name: 'Təminatlı manat krediti',
      parentId: 1
    },
    {
      id: 3,
      name: 'Birlik loyallıq klubu',
      parentId: 1
    },
    {
      id: 4,
      name: 'İpoteka krediti',
      parentId: 1
    },
    {
      id: 5,
      name: 'MİDA - İpoteka krediti',
      parentId: 1
    },
    {
      id: 6,
      name: 'Kapital depoziti',
      parentId: 2
    },
    {
      id: 7,
      name: 'Müddətsiz depozit',
      parentId: 2
    },
    {
      id: 8,
      name: 'Depozit seyfləri',
      parentId: 2
    },
    {
      id: 9,
      name: 'Gəlirli sığorta',
      parentId: 2
    },
    {
      id: 10,
      name: 'Sadə kartlar',
      parentId: 3
    },
    {
      id: 11,
      name: 'Premium kartlar',
      parentId: 3
    },
    {
      id: 12,
      name: 'Multivalyutalı kartlar',
      parentId: 3
    },
    {
      id: 13,
      name: 'Taksit kartları',
      parentId: 3
    },
    {
      id: 14,
      name: 'Hədiyyə kartları',
      parentId: 3
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  mouseEnter(event: any, menuId: any) {
    this.defaultState = this.defaultState === 'initial' ? 'final' : 'initial';
    this.MainMenuState = this.MainMenuState === 'initial' ? 'final' : 'initial';
    this.navSubMenu.forEach((subMenu: any) => {
      if (subMenu.parentId === menuId) {
        event.target.querySelector('.sub').classList.add('showSub');
      }
    });
  }

  mouseLeave(event: any, menuId: string) {
    this.defaultState = this.defaultState === 'initial' ? 'final' : 'initial';
    this.MainMenuState = this.MainMenuState === 'initial' ? 'final' : 'initial'
    this.navSubMenu.forEach((subMenu: any) => {
      if (subMenu.parentId === menuId) {
        event.target.querySelector('.sub').classList.remove('showSub');
      }
    });
  }

}
