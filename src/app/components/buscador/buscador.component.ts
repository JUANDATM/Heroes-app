import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

    heroes: any[] = [];
    termino: string;


  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line:no-string-literal
      this.heroes = this._heroesService.buscarHeroe( params['termino']);
    });
  }

}
