export class Entretien {
  id?: number;
  date_entretien: string;
  heure_entretien: string;
  mode: 'presentiel' | 'visio' | 'telephone';
  lien_ou_lieu: string;
  message?: string;
  statut?: 'prevu' | 'realise' | 'annule';
  candidature_id: number;

  constructor(
    date_entretien: string,
    heure_entretien: string,
    mode: 'presentiel' | 'visio' | 'telephone',
    lien_ou_lieu: string,
    candidature_id: number,
    message?: string,
    statut: 'prevu' | 'realise' | 'annule' = 'prevu',
    id?: number
  ) {
    this.id = id;
    this.date_entretien = date_entretien;
    this.heure_entretien = heure_entretien;
    this.mode = mode;
    this.lien_ou_lieu = lien_ou_lieu;
    this.message = message;
    this.statut = statut;
    this.candidature_id = candidature_id;
  }
}
