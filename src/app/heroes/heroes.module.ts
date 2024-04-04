import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing-module';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { HeroeContainerComponent } from './components/heroe-container/heroe-container.component';
import { FormsModule } from '@angular/forms';
import { HeroeEditPageComponent } from './pages/hero-edit-page/hero-edit-page.component';
import { HeroeFormComponent } from './components/hero-form/heroe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroeAddPageComponent } from './pages/hero-add-page/hero-add-page.component';


@NgModule({
  declarations: [
    // components
    HeroeContainerComponent,
    HeroeFormComponent,
    // pages
    HeroesPageComponent,
    HeroeEditPageComponent,
    HeroeAddPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeroeContainerComponent,
  ]
})
export class HeroesModule { }
