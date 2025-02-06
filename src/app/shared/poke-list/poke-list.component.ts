import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'poke-list',
  standalone: false,
  
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {
  constructor(private pokeApiService: PokeApiService) { }

  
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
    );
  }

}
