import { Component, OnInit } from '@angular/core';
import { HeroesDataService } from '../../../shared/services/heroesData.services';
import { Hero, HeroAction } from '../../../shared/interfaces/hero.interface';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent implements OnInit {
 constructor(private heroesDataService: HeroesDataService, private route: ActivatedRoute,
  private router: Router){}
  public heroesData: Array<Hero> = [];
  public heroesShowed: Array<Hero> = [];
  public pageIndex: number = 0;
  public heroToFind: string = '';
  ngOnInit(): void {
    this.heroesData = this.heroesDataService.getHeroesData();
    if(this.heroesData?.length > 0){
      this.heroesShowed = this.heroesData.slice(0,10);
    }else {
      this.router.navigate(['/home']);
    }

  }

  handlePageEvent(e: PageEvent) {
     this.pageIndex = e.pageIndex;
     this.heroesShowed = this.heroesData.slice(e.pageIndex*10,e.pageIndex*10+10);
  }
  emitValue(heroToSearch: string){
    if(heroToSearch){
      this.heroesData = this.heroesDataService.getHeroesData().filter((heroData) => heroData.name.toLowerCase().includes(heroToSearch.toLowerCase()))
    }else {
      this.heroesData = this.heroesDataService.getHeroesData();
    }
    this.pageIndex = 0;
    this.heroesShowed = this.heroesData.slice(0,10);
  }

  actionToDo(data: HeroAction){
    switch(data.action) { 
      case 'Delete': { 
          this.heroesDataService.deleteHero(data.heroId);
          this.heroesData = this.heroesDataService.getHeroesData();
          this.heroToFind = '';
          this.pageIndex = 0;
          this.heroesShowed = this.heroesData.slice(0,10);
         break; 
      } 
      default: { 
        this.router.navigate(['/heroes/editHero', data.heroId]);
         break; 
      } 
   } 

  }
  addNewHero(){
    this.router.navigate(['/heroes/addHero'])
  }
}
