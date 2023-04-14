import { Component, OnInit } from '@angular/core';
import { Localita } from '../localita';
import { LOCALITA } from './lista-localita.components';
import { LocalitaService } from './localita.service';

@Component({
  selector: 'app-localita',
  templateUrl: './lista-localita-components.html',
  styleUrls: ['./lista-localita-components.css'],
})
export class LocalitaComponent implements OnInit {
  localita = LOCALITA;
  mostraImmagine: boolean = false;
  private _listFilter: string = '';
  localitaFiltrate: Localita[] = [];

  constructor(private localitaServizio: LocalitaService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.localitaFiltrate = this.datiFiltrati(value);
  }

  mostraNascondi() {
    this.mostraImmagine = !this.mostraImmagine;
  }

  ngOnInit() {
    console.log('lista creata');

    this.listFilter = '';
    this.localita = this.localitaServizio.getLocalita();
  }

  datiFiltrati(filtratoPer: string): Localita[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();
    return this.localita.filter((loc: Localita) =>
      loc.nome.toLocaleLowerCase().includes(filtratoPer)
    );
  }
}
