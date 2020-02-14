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
  dernierResultat: TirageData;
  tirages: Tirages;
  dataSource: MatTableDataSource<TirageData>;
displayedColumns: string[] = ['ordre', 'jour_de_tirage', 'date_de_tirage', 'boule_1', 'boule_2', 'boule_3', 'boule_4', 'boule_5',
 'numero_chance', 'combinaison_gagnante_en_ordre_croissant'];
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private data: DataService) {
    this.dernierResultat= {ordre: 0, jour_de_tirage: 'lundi', date_de_tirage: '04 novembre 2019',
    boule_1: 1, boule_2: 9, boule_3: 16, boule_4: 39, boule_5: 42, numero_chance: '7',
    couleur_1: 'red', couleur_2: 'red', couleur_3: 'red', couleur_4: 'red', couleur_5: 'red',
    combinaison_gagnante_en_ordre_croissant: ''};
   }

  ngOnInit() {
      this.data.getTirages().subscribe(data => {
        this.tirages = data;
        console.log(this.tirages);

        // Création des lignes de tirage
        const tiragesData: TirageData[] = [];
        for (let i = 0; i < this.tirages.records.length; i++) { tiragesData.push(creerLigne(i, this.tirages, this.dernierResultat)); }

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
function creerLigne(id: number, tirages: Tirages, derResult: TirageData): TirageData {
  const ligneTirages: number[] = [tirages.records[id].fields.boule_1, tirages.records[id].fields.boule_2,
   tirages.records[id].fields.boule_3,
   tirages.records[id].fields.boule_4, tirages.records[id].fields.boule_5];
  const ligneTiragesTriee: number[] = ligneTirages.sort((a, b) => a - b);

  const boule1 = ligneTiragesTriee[0];
  const boule2 = ligneTiragesTriee[1];
  const boule3 = ligneTiragesTriee[2];
  const boule4 = ligneTiragesTriee[3];
  const boule5 = ligneTiragesTriee[4];

  const resultatCourant: number[] = [derResult.boule_1, derResult.boule_2, derResult.boule_3, derResult.boule_4, derResult.boule_5];
  return {
    ordre: id + 1,
    jour_de_tirage: tirages.records[id].fields.jour_de_tirage,
    date_de_tirage: tirages.records[id].fields.date_de_tirage,
    boule_1: boule1,
    boule_2: boule2,
    boule_3: boule3,
    boule_4: boule4,
    boule_5: boule5,
    numero_chance: tirages.records[id].fields.numero_chance,
    couleur_1: controlerResultat(resultatCourant, boule1),
    couleur_2: controlerResultat(resultatCourant, boule2),
    couleur_3: controlerResultat(resultatCourant, boule3),
    couleur_4: controlerResultat(resultatCourant, boule4),
    couleur_5: controlerResultat(resultatCourant, boule5),
    combinaison_gagnante_en_ordre_croissant: tirages.records[id].fields.combinaison_gagnante_en_ordre_croissant
  };
}

function controlerResultat(result: number[], bouleComparee: number): string {
  let couleurMatch = 'black';
  for (let i = 0; i < 5; i++) {
    if (result[i] === bouleComparee) {
      couleurMatch = 'red';
      break;
    }
  }
  return couleurMatch;
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
  couleur_1: string;
  couleur_2: string;
  couleur_3: string;
  couleur_4: string;
  couleur_5: string;
  combinaison_gagnante_en_ordre_croissant: string;
}
