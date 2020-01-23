import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { Tirages } from './shared/models/tirages';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loto';
  name = 'Angular';
  tirages: Tirages;
  dataSource: MatTableDataSource<TirageData>;
displayedColumns: string[] = ['ordre', 'jour_de_tirage', 'date_de_tirage', 'boule_1', 'boule_2', 'boule_3', 'boule_4', 'boule_5', 'numero_chance', 'combinaison_gagnante_en_ordre_croissant'];
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getTirages().subscribe(data => {
        this.tirages = data;
        console.log(this.tirages);

        // Création des lignes de tirage
        const tiragesData: TirageData[] = [];
        for (let i = 0; i < this.tirages.records.length; i++) { tiragesData.push(creerLigne(i, this.tirages)); }

        // Création de la table à afficher
        this.dataSource = new MatTableDataSource(tiragesData);

        console.log(this.dataSource);

        // pagination material
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    }

  firstClick() {
    this.data.firstClick();
  }

}

/** Builds and returns a new User. */
function creerLigne(id: number, tirages: Tirages): TirageData {
  return {
    ordre: id + 1,
    jour_de_tirage: tirages.records[id].fields.jour_de_tirage,
    date_de_tirage: tirages.records[id].fields.date_de_tirage,
    boule_1: tirages.records[id].fields.boule_1,
    boule_2: tirages.records[id].fields.boule_2,
    boule_3: tirages.records[id].fields.boule_3,
    boule_4: tirages.records[id].fields.boule_4,
    boule_5: tirages.records[id].fields.boule_5,
    numero_chance: tirages.records[id].fields.numero_chance,
    combinaison_gagnante_en_ordre_croissant: tirages.records[id].fields.combinaison_gagnante_en_ordre_croissant
  };
}

export interface TirageData {
  ordre: number;
  jour_de_tirage: string;
  date_de_tirage: string;
  boule_1: number;
  boule_2: number;
  boule_3: number;
  boule_4: number;
  boule_5: number;
  numero_chance: string;
  combinaison_gagnante_en_ordre_croissant: string;
}
