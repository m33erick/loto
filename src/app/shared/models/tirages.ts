// Data models

export class Tirages {
    nhits: number;
    parameters: Parameters;
    records: Record[];
  }

export class Record {
    datasetid: string;
    recordid: string;
    fields: Fields;
    record_timestamp: string;
  }

export class Fields {
    devise: string;
    combinaison_gagnante_en_ordre_croissant: string;
    rapport_du_rang1: number;
    rapport_du_rang3: number;
    rapport_du_rang2: number;
    rapport_du_rang5: number;
    rapport_du_rang4: number;
    rapport_du_rang6: number;
    date_de_tirage: string;
    numero_chance: string;
    boule_1: number;
    boule_3: number;
    boule_2: number;
    boule_5: number;
    date_de_forclusion: string;
    jour_de_tirage: string;
    nombre_de_gagnant_au_rang1: number;
    nombre_de_gagnant_au_rang2: number;
    nombre_de_gagnant_au_rang3: number;
    nombre_de_gagnant_au_rang4: number;
    nombre_de_gagnant_au_rang5: number;
    nombre_de_gagnant_au_rang6: number;
    boule_4: number;
    boules: string;
    numero_jokerplus: string;
    annee_numero_de_tirage: string;
  }

export class Parameters {
    dataset: string[];
    timezone: string;
    q: string;
    rows: number;
    sort: string[];
    format: string;
  }