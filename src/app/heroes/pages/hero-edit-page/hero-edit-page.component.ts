import { Component, OnInit } from '@angular/core';
import { HeroesDataService } from '../../../shared/services/heroesData.services';
import { Hero, HeroForm } from '../../../shared/interfaces/hero.interface';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'hero-edit-page',
  templateUrl: './hero-edit-page.component.html',
  styleUrls: ['./hero-edit-page.component.scss'],
})
export class HeroeEditPageComponent implements OnInit {
 constructor(private heroesDataService: HeroesDataService, private activatedRoute: ActivatedRoute, private router: Router){
  this.activatedRoute.paramMap.subscribe( (params:ParamMap ) => {
    this.heroId = Number(params.get('id'));
  });
 }

  public heroDataToSend: Hero | undefined;
  public heroId: number = 0;
  
  ngOnInit(): void {
    if(this.heroId){
      this.heroDataToSend = this.heroesDataService.getHeroData(this.heroId);
    }
  }

  checkWhatTodoWithHeroData(data:HeroForm){
    if(data.existingHero){
      this.heroesDataService.updateHeroData(data);
    }
    this.router.navigate(['/heroes']);
  }
}
