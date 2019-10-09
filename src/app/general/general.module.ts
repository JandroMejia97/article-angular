import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
