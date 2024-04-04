import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Hero, HeroAction } from '../../../shared/interfaces/hero.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';


@Component({
    selector: 'heroe-container',
    templateUrl: './heroe-container.component.html',
    styleUrls: ['./heroe-container.component.scss'],
})
export class HeroeContainerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input()
  public heroData!: Hero;
  
  @Output()
  public action = new EventEmitter<HeroAction>();

  ngOnInit(): void {
  }

  openDialogDeleteHero() {
    const dialogRef = this.dialog.open(DialogComponent, {autoFocus: false});
    let instance = dialogRef.componentInstance;
    instance.tittleText = "Delete Hero";
    instance.conetentText = 'Are you sure you want to delete the hero ?';
    instance.acceptButtonText = 'Delete';
    instance.cancelButtonText = 'Cancel';

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.action.emit({heroId: this.heroData.id, action:'Delete'})
      }
    });
  }

  editHero(){
    this.action.emit({heroId: this.heroData.id, action:'Edit'})
  }


}
