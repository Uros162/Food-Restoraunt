import { NgModule } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatMenuModule} from '@angular/material/menu'
import {MatChipsModule} from '@angular/material/chips'
import {MatDialogModule} from '@angular/material/dialog'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'

@NgModule({

    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatChipsModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatChipsModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule
        
    ]
})


export class MaterialModule{}