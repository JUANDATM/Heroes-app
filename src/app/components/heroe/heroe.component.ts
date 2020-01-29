import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};

  constructor( private avtivatedRoute: ActivatedRoute,
               private _heroeService: HeroesService
    ) {
  this.avtivatedRoute.params.subscribe( params => {
    this.heroe = this._heroeService.getHeroe( params['id'] );
    console.log(params['id'] );

  });

   }

}
