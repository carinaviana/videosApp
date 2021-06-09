import { GeneroService } from './../services/genero.service';
import { IFilmeApi, IListaFilmes } from './../models/IFilmeAPI.model';
import { IFilme } from './../models/IFilmes.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { FilmeService } from '../services/filme.service';
import { IGenero } from '../models/IGenero.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/mortal-kombat'
    },

    {
      nome: 'Sem Remorso',
      lancamento: '30/04/2021',
      duracao: '1h 50m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Thriller', 'Guerra'],
      pagina: '/sem-remorso'
    },

    {
      nome: 'Raia e o Último Dragão',
      lancamento: '04/03/2021',
      duracao: '1h 47m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2NTWpD6LVf1YyPKTdvcEuHqcJ6.jpg',
      generos: ['Aventura', 'Animação', 'Fantasia'],
      pagina: '/raia'
      },

      {
        nome: 'Pets Monstruosos',
        lancamento: '02/04/2021',
        duracao: '1h 47m',
        classificacao: 77,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
        generos: ['Aventura', 'Animação', 'Fantasia']
        },

        {
          nome: 'Soul: Uma Aventura com Alma ',
          lancamento: '25/12/2020',
          duracao: '1h 40m',
          classificacao: 83,
          cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
          generos: ['Aventura', 'Animação', 'Fantasia']
        }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] =[];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

    buscarFilmes(evento: any){
      console.log(evento.target.value);
      const busca=evento.target.value;
      if(busca && busca.trim() !== ''){
        this.filmeService.buscarFilmes(busca).subscribe(dados=>{
          console.log(dados);
          this.listaFilmes = dados;
        });
      }
    }

    exibirFilme(filme: IFilmeApi){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGenero('movie').subscribe(dados =>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id]=genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }
}
