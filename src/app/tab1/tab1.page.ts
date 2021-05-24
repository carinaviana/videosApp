import { IFilme } from './../models/IFilmes.model';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
      nome: 'Mulher-Maravilha 1984',
      lancamento: '17/12/2020',
      duracao: '2h 31m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura']
    },

    {
      nome: 'Tom & Jerry - O Filme(2021)',
      lancamento: '11/02/2021',
      duracao: '1h 41m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg',
      generos: ['Comédia', 'Família', 'Animação']
    },

    {
      nome: 'Raia e o Último Dragão',
      lancamento: '04/03/2021',
      duracao: '1h 47m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2NTWpD6LVf1YyPKTdvcEuHqcJ6.jpg',
      generos: ['Aventura', 'Animação', 'Fantasia']
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

  constructor(public alertController: AlertController, public toastController: ToastController) { }

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
}
