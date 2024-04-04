import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { HeroeEditPageComponent } from './pages/hero-edit-page/hero-edit-page.component';
import { HeroeAddPageComponent } from './pages/hero-add-page/hero-add-page.component';


const routes: Routes = [
    {
        path: 'addHero', 
        component: HeroeAddPageComponent,
    },
    {
        path: 'editHero/:id', 
        component: HeroeEditPageComponent,
    },
    {
        path: '**', 
        component: HeroesPageComponent,
    },

]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [],
    providers: [],
})
export class HeroesRoutingModule { }
