import { Injectable } from '@angular/core';
import { Hero, HeroForm } from '../interfaces/hero.interface';


@Injectable({providedIn: 'root'})
export class HeroesDataService {
    constructor() {}

    heroes: Array<Hero> = []

    setHeroesData(dataHeroes:  Array<Hero>){
        this.heroes = dataHeroes;
    }

    getHeroesData():Array<Hero> {
        return this.heroes;
    }

    deleteHero(id: number){
        const objWithIdIndex = this.heroes.findIndex((hero) => hero.id === id);
        this.heroes.splice(objWithIdIndex, 1);
    }

    getHeroData(id: number): Hero | undefined{
        return this.heroes.find(heroData => heroData.id === id)
    }

    updateHeroData(newHeroData: HeroForm) {
        const heroWithIdIndex = this.heroes.findIndex((hero) => hero.id === newHeroData.heroId);
        if(heroWithIdIndex){
        this.heroes[heroWithIdIndex].name = newHeroData.name;
        this.heroes[heroWithIdIndex].biography.fullName = newHeroData.fullName;
        this.heroes[heroWithIdIndex].biography.alterEgos = newHeroData.alterEgos;
        this.heroes[heroWithIdIndex].biography.publisher = newHeroData.publisher;
        this.heroes[heroWithIdIndex].biography.alignment = newHeroData.alignment;
        this.heroes[heroWithIdIndex].powerstats.intelligence = newHeroData.intelligence;
        this.heroes[heroWithIdIndex].powerstats.strength = newHeroData.strength;
        this.heroes[heroWithIdIndex].powerstats.speed = newHeroData.speed;
        this.heroes[heroWithIdIndex].powerstats.durability = newHeroData.durability;
        this.heroes[heroWithIdIndex].powerstats.power = newHeroData.power;
        this.heroes[heroWithIdIndex].appearance.gender = newHeroData.gender;
        this.heroes[heroWithIdIndex].appearance.race = newHeroData.race;
        this.heroes[heroWithIdIndex].appearance.height = [newHeroData.height];
        this.heroes[heroWithIdIndex].appearance.eyeColor = newHeroData.eyeColor;
        this.heroes[heroWithIdIndex].appearance.hairColor = newHeroData.hairColor;
        this.heroes[heroWithIdIndex].images.md = newHeroData.imgUrl;
        }
        
    }

    addNewHero(newHeroData: HeroForm){
        this.heroes.push({
            id: this.heroes[this.heroes.length-1].id + 1,
            name: newHeroData.name,
            slug: '',
            powerstats: {
                intelligence: newHeroData.intelligence,
                strength: newHeroData.strength,
                speed: newHeroData.speed,
                durability: newHeroData.durability,
                power: newHeroData.power,
                combat: 0
            },
            appearance: {
                gender: newHeroData.gender,
                race: newHeroData.race,
                height: [newHeroData.height],
                weight: [''],
                eyeColor: newHeroData.eyeColor,
                hairColor: newHeroData.hairColor,
            },
            biography : {
                fullName: newHeroData.fullName,
                alterEgos: newHeroData.alterEgos,
                aliases: [''],
                placeOfBirth: '',
                firstAppearance: '',
                publisher: newHeroData.publisher,
                alignment: newHeroData.alignment,
            },
            work : {
                occupation: '',
                base: '',
            },
            connections: {
                groupAffiliation: '',
                relatives: '',
            },
            images: {
                xs: '',
                sm: newHeroData.imgUrl,
                md: '',
                lg: '',
            } 
        })
    }


}