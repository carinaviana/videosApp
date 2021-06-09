import { Component, OnInit } from '@angular/core';
import { ISeriesApi } from '../models/ISeriesAPI.model';
import { DadosService } from '../services/dados.service';
import { GeneroService } from '../services/genero.service';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {

  series: ISeriesApi;

  generos: string[] = [];

  constructor(
    public dadosService: DadosService,
    public seriesService: SeriesService,
    public generoService: GeneroService
    )  { }

  ngOnInit() {

    this.series = this.dadosService.pegarDados('serie');
    this.generos = this.dadosService.pegarDados('generos');

    this.generoService.buscarGenero('serie').subscribe(dados =>{
      dados.genres.forEach(genero => {
        this.generoService[genero.id] = genero.name;
      });
    });
  }

}
