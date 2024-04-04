import { Component,  EventEmitter,  Input,  OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesDataService } from '../../../shared/services/heroesData.services';
import { Hero, HeroForm } from '../../../shared/interfaces/hero.interface';

@Component({
    selector: 'heroe-form',
    templateUrl: './heroe-form.component.html',
    styleUrls: ['./heroe-form.component.scss'],
})
export class HeroeFormComponent implements OnInit {

  heroForm: FormGroup;

  @Input()
  public heroDataRecived: Hero | undefined;

  @Input()
  public submitButtonText: string = '';


  @Output()
  public heroNewOrUpdated = new EventEmitter<HeroForm>();

  constructor() {
    this.heroForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      fullName: new FormControl(null,Validators.required),
      alterEgos: new FormControl(null,Validators.required),
      publisher: new FormControl(null,Validators.required),
      alignment: new FormControl(null,Validators.required),
      intelligence: new FormControl(null,Validators.required),
      strength: new FormControl(null,Validators.required),
      speed: new FormControl(null,Validators.required),
      durability: new FormControl(null,Validators.required),
      power: new FormControl(null,Validators.required),
      gender: new FormControl(null,Validators.required),
      race: new FormControl(null,Validators.required),
      height: new FormControl(null,Validators.required),
      eyeColor: new FormControl(null,Validators.required),
      hairColor: new FormControl(null,Validators.required),
      imgUrl: new FormControl(null,Validators.required),
  });

  }

  ngOnInit(): void {
    if(this.heroDataRecived){
      this.heroForm.patchValue({ name: this.heroDataRecived.name});
      this.heroForm.patchValue({ fullName: this.heroDataRecived.biography.fullName});
      this.heroForm.patchValue({ alterEgos: this.heroDataRecived.biography.alterEgos});
      this.heroForm.patchValue({ publisher: this.heroDataRecived.biography.publisher});
      this.heroForm.patchValue({ alignment: this.heroDataRecived.biography.alignment});
      this.heroForm.patchValue({ intelligence: this.heroDataRecived.powerstats.intelligence});
      this.heroForm.patchValue({ strength: this.heroDataRecived.powerstats.strength});
      this.heroForm.patchValue({ speed: this.heroDataRecived.powerstats.speed});
      this.heroForm.patchValue({ durability: this.heroDataRecived.powerstats.durability});
      this.heroForm.patchValue({ power: this.heroDataRecived.powerstats.power});
      this.heroForm.patchValue({ gender: this.heroDataRecived.appearance.gender});
      this.heroForm.patchValue({ race: this.heroDataRecived.appearance.race});
      this.heroForm.patchValue({ height: this.heroDataRecived.appearance.height});
      this.heroForm.patchValue({ eyeColor: this.heroDataRecived.appearance.eyeColor});
      this.heroForm.patchValue({ hairColor: this.heroDataRecived.appearance.hairColor});
      this.heroForm.patchValue({ imgUrl: this.heroDataRecived.images.md});
    }
    
  }

  onSubmit() {
    const heroFormData: HeroForm = {
      existingHero: this.heroDataRecived ? true : false,
      heroId: this.heroDataRecived ? this.heroDataRecived.id : null,
      name: this.heroForm.controls['name'].value,
      fullName: this.heroForm.controls['fullName'].value,
      alterEgos: this.heroForm.controls['alterEgos'].value,
      publisher: this.heroForm.controls['publisher'].value,
      alignment: this.heroForm.controls['alignment'].value,
      intelligence: this.heroForm.controls['intelligence'].value,
      strength: this.heroForm.controls['strength'].value,
      speed: this.heroForm.controls['speed'].value,
      durability: this.heroForm.controls['durability'].value,
      power: this.heroForm.controls['power'].value,
      gender: this.heroForm.controls['gender'].value,
      race: this.heroForm.controls['race'].value,
      height: this.heroForm.controls['height'].value,
      eyeColor: this.heroForm.controls['eyeColor'].value,
      hairColor: this.heroForm.controls['hairColor'].value,
      imgUrl: this.heroForm.controls['imgUrl'].value,
    }
    this.heroNewOrUpdated.emit(heroFormData);
  }

}
