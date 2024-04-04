import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [
        //components
        NavbarComponent,
        DialogComponent,
        //pages
        HomePageComponent,
        
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ],
    exports: [
        //components
        NavbarComponent,
        DialogComponent,
        //pages
        HomePageComponent,
        MaterialModule,
    ],
})
export class SharedModule {}