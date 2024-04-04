import { Component} from '@angular/core';
import { HeroesDataService } from '../../../shared/services/heroesData.services';
import { Hero, HeroForm } from '../../../shared/interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'hero-add-page',
  templateUrl: './hero-add-page.component.html',
  styleUrls: ['./hero-add-page.component.scss'],
})
export class HeroeAddPageComponent {
 constructor(private heroesDataService: HeroesDataService, private activatedRoute: ActivatedRoute, private router: Router){
 }

  public heroDataToSend: Hero | undefined;
  public heroId: number = 0;
  

  checkWhatTodoWithHeroData(data:HeroForm){
    if(!data.existingHero){
      this.heroesDataService.addNewHero(data);
    }
    this.router.navigate(['/heroes']);
  }
}
