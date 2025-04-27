export class User {
  prenom: string;
  nom: string;
  universite?: string;
  nom_entreprise?: string;
  secteur?: string;
  description?: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;

  constructor(
    prenom: string,
    nom: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: string,
    universite?: string,
    nom_entreprise?: string,
    secteur?: string,
    description?: string,
  ) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.role = role;
    this.universite = universite;
    this.nom_entreprise = nom_entreprise;
    this.secteur = secteur;
    this.description = description;
  }
}
