import { Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../../services/heroesApi.services';
import { HeroesDataService } from '../../services/heroesData.services';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private heroesApiService: HeroesApiService, private heroesDataService: HeroesDataService,){}
  ngOnInit(): void {
    this.getHeroesData()
  }

  getHeroesData(){
    this.heroesApiService.getAllHeroes().subscribe( Heroes => {
      if(Heroes){
        this.heroesDataService.setHeroesData(Heroes);
      }
    });
  }
}
