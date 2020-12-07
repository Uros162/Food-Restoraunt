import { NgModule } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({

    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ]
})


export class MaterialModule{}