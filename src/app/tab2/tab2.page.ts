import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IListaSeries, ISeriesApi } from '../models/ISeriesAPI.model';
import { DadosService } from '../services/dados.service';
import { GeneroService } from '../services/genero.service';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  titulo = 'Series';

  listaSeries: IListaSeries;

  generos: string[] =[];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public seriesService: SeriesService,
    public generoService: GeneroService,
    public route: Router) { }

    buscarSeries(evento: any){
      console.log(evento.target.value);
      const busca=evento.target.value;
      if(busca && busca.trim() !== ''){
        this.seriesService.buscarSeries(busca).subscribe(dados=>{
          console.log(dados);
          this.listaSeries = dados;
        });
      }
    }

    exibirSeries(serie: ISeriesApi){
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-series');
    }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar a série?',
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
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGenero('tv').subscribe(dados =>{
      console.log('Generos; ',dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });
    });
  }
}
