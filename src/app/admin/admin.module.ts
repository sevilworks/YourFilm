import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListerFilmsComponent,
    AjouterFilmComponent,
    DetailsFilmComponent,
    UpdateFilmComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
