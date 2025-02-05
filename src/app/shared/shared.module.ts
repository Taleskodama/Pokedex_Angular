import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';

//Components




@NgModule({
  declarations: [
    PokeHeaderComponent,
  ],
  exports: [
    PokeHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
