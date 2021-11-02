import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent {
  pokemones:Ninja[] = [{nombre: "Naruto", color: "Amarillo"}, {nombre: "Sasuke", color: "Azul"}, {nombre: "Sakura", color: "Rosa"},
  {nombre: "Garaa", color: "Rojo"}, {nombre: "Kakashi", color: "Blanco"}];

  pokemonEliminado:Ninja | undefined;
  borrarPokemon(){
    this.pokemonEliminado = this.pokemones.pop(); //Es iportante el || para que no dé erorr
  }
}

interface Ninja{
  nombre:string,
  color: string,
  //mostarPS:() => void; //No recibe nada pero no entrega nada
}
