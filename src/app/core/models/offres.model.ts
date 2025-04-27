export class Offres {
  id: number;
  titre: string;
  description: string;
  date_expiration: string;
  statut: 'active' | 'inactive';
  type_offre: string;
  lieu: string;
  duree: string;

  constructor(
    id: number,
    titre: string,
    description: string,
    date_expiration: string,
    statut: 'active' | 'inactive',
    type_offre: string,
    lieu: string,
    duree: string
  ) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.date_expiration = date_expiration;
    this.statut = statut;
    this.type_offre = type_offre;
    this.lieu = lieu;
    this.duree = duree;
  }
}
