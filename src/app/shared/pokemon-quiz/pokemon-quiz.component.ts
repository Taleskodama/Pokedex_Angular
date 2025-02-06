import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiService } from '../../services/poke-api.service';


@Component({
  selector: 'app-pokemon-quiz',
  standalone: false,
  
  templateUrl: './pokemon-quiz.component.html',
  styleUrls: ['./pokemon-quiz.component.scss'],
})
export class PokemonQuizComponent implements OnInit {
  pokemons: any[] = []; // Lista de Pokémons
  currentPokemon: any = null; // Pokémon atual no quiz
  userGuess: string = ''; // Resposta do usuário
  resultMessage: string = ''; // Mensagem do resultado
  isCorrect: boolean = false; // Verifica se a resposta está correta
  correctAnswer: string = ''; //reseta o nome


  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  // Carrega a lista de Pokémons
  loadPokemonList(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (response: any) => {
        console.log(response.results); // Verifique os dados no console
        this.pokemons = response.results; // Salva a lista de Pokémon
        this.loadRandomPokemon(); // Escolhe um Pokémon aleatório
      },
      (error: any) => {
        console.error('Erro ao buscar a lista de Pokémon:', error);
      }
    );
  }
  
  // Carrega um Pokémon aleatório
  loadRandomPokemon(): void {
    const randomIndex = Math.floor(Math.random() * this.pokemons.length);
    this.currentPokemon = this.pokemons[randomIndex];
  
    // Obtenha o nome do Pokémon
    this.correctAnswer = this.currentPokemon?.name || 'Desconhecido';
  
    // Reseta o estado
    this.userGuess = ''; // Limpa o input
    this.resultMessage = ''; // Reseta a mensagem
    this.isCorrect = false; // Reseta o estado
  }
  
  
  

  // Verifica a resposta do usuário
  checkGuess(): void {
    console.log('Resposta do usuário:', this.userGuess);
    console.log('Resposta correta:', this.correctAnswer);
  
    if (this.userGuess.toLowerCase() === this.correctAnswer.toLowerCase()) {
      this.resultMessage = 'Correto! Você acertou!';
      this.isCorrect = true;
  
      // Pule para o próximo Pokémon após uma pequena pausa para exibir a mensagem de acerto
      setTimeout(() => {
        this.loadRandomPokemon();
      }, 1000); // 1 segundo de atraso
    } else {
      this.resultMessage = `Errado! O nome correto é: ${this.correctAnswer}`;
      this.isCorrect = false;
    }
  }
  
  
  
  
  skipPokemon(): void {
    this.loadRandomPokemon();
    this.userGuess = ''; // Limpa o campo de texto
    this.resultMessage = ''; // Reseta a mensagem de resultado
    this.isCorrect = false; // Reseta o status de verificação
  }
  
}