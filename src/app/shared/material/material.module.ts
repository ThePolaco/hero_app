import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [],
    imports: [],
    exports: [
        MatMenuModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatTabsModule,
        MatPaginatorModule,
        MatInputModule,
        MatDialogModule,
    ],
})
export class MaterialModule {}