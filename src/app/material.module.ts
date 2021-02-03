import { NgModule } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatMenuModule} from '@angular/material/menu'
import {MatChipsModule} from '@angular/material/chips';

@NgModule({

    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatChipsModule
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatChipsModule
    ]
})


export class MaterialModule{}