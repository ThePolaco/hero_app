import { Component, OnInit } from '@angular/core';
import { MenuConfiguration } from '../../interfaces/navbar.interface';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor() {}

    menus: MenuConfiguration[] = [];

    ngOnInit(): void {
      this.menus = [
        {
          title: 'Home',
          link: '/home'
        },
        {
          title: 'Heroes',
          link: '/heroes'
        }
      ];
    }



}
