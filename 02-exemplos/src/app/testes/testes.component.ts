import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
  
  nomeUsuario = "Usuário Padrão";




  minhaCor = 'green';

  nomeFaculdade: string = "Faculdades Reges - Teste 02";

  appName = "Exemplo interpolação aula 02";
  
  minhaClasseCSS = "azul";
  usarCSS = false;



  constructor() { }


  exibirDados() {
   // console.log("O botão foi clicado!");
   alert('O botão foi clicado!');
  }

  exibirNome() {
    // console.log("O botão foi clicado!");
    alert('O nome é'  + this.nomeUsuario);
   }
 

}



