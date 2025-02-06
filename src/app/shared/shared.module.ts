import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokemonQuizComponent } from './pokemon-quiz/pokemon-quiz.component';
import { FormsModule } from '@angular/forms';


//Components




@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokemonQuizComponent,
    

  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokemonQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
