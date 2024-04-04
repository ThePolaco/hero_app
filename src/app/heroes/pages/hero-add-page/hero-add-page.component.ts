import { Component, OnInit } from '@angular/core';
import { HeroesDataService } from '../../../shared/services/heroesData.services';
import { Hero, HeroForm } from '../../../shared/interfaces/hero.interface';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'hero-add-page',
  templateUrl: './hero-add-page.component.html',
  styleUrls: ['./hero-add-page.component.scss'],
})
export class HeroeAddPageComponent implements OnInit {
 constructor(private heroesDataService: HeroesDataService, private activatedRoute: ActivatedRoute, private router: Router){
 }

  public heroDataToSend: Hero | undefined;
  public heroId: number = 0;
  
  ngOnInit(): void {
  }

  checkWhatTodoWithHeroData(data:HeroForm){
    if(!data.existingHero){
      this.heroesDataService.addNewHero(data);
    }
    this.router.navigate(['/heroes']);
  }
}
