import { Component, Input, OnInit,  } from '@angular/core';
import { MenuConfiguration } from '../../interfaces/navbar.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    constructor() {}

    @Input()
    public tittleText: string = '';

    @Input()
    public conetentText : string = '';

    @Input()
    public acceptButtonText : string = '';

    @Input()
    public cancelButtonText : string = '';







}
