import { NgModule } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatMenuModule} from '@angular/material/menu'

@NgModule({

    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule
    ]
})


export class MaterialModule{}