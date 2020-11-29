import { NgModule } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button'
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({

    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})


export class MaterialModule{}