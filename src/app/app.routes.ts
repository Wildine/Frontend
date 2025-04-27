import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { AuthComponent } from './core/auth/auth.component';
import { EntrepriseComponent } from './shared/components/dashboard-navbar/entreprise/entreprise.component';
import { EtudiantComponent } from './shared/components/dashboard-navbar/etudiant/etudiant.component';
import { EncadrantComponent } from './shared/components/dashboard-navbar/encadrant/encadrant.component';
import { ChercheurComponent } from './shared/components/dashboard-navbar/chercheur/chercheur.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'recherche',
    loadComponent: () => import('./shared/components/search-results/search-results.component').then(m => m.SearchResultsComponent)
  },

  {
    path: 'offres',
    loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/offres/offres.component').then(m => m.OffresComponent)
  },

  {
    path: 'offres/:id',
    loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/offre-detail/offre-detail.component').then(m => m.OffreDetailComponent)
  },

  {
    path: 'stages',
    loadComponent: () => import('./features/stages/stages/stages.component').then(m => m.StagesComponent)
  },

  {
    path: 'emplois',
    loadComponent: () => import('./features/emplois/emplois/emplois.component').then(m => m.EmploisComponent)
  },

  {
    path: 'entreprises',
    loadComponent: () => import('./features/entreprise/entreprise.component').then(m => m.EntrepriseComponent)
  },

  {
    path: 'auth',
    loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent)
  },

  {
    path: 'register',
    loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)
  },

  {
    path: 'login',
    loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'entreprise-dashboard',
    component: EntrepriseComponent,
    canActivate: [authGuard, roleGuard],
    data: { role: 'entreprise' },
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/entreprise-dashboard.component').then(m => m.EntrepriseDashboardComponent)
      },
      {
        path: 'gestion-offre',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/offre.component').then(m => m.OffreComponent),
        canActivate: [ roleGuard ],
        data: { role: 'entreprise' }
      },
      {
        path: 'ajouter-offre',
        // loadComponent: () => import('./features/offres/offre-add/offre-add.component').then(m => m.OffreAddComponent),
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/offre-add/offre-add.component').then(m => m.OffreAddComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'success',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/success/success.component').then(m => m.SuccessComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'candidatures',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/candidatures/candidatures.component').then(m => m.CandidaturesComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'candidatures-list',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/candidatures/candidature-list/candidature-list.component').then(m => m.CandidatureListComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'gestion-offres',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/gestion-offres/gestion-offres/gestion-offres.component').then(m => m.GestionOffresComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'add-encadrant',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/add-encadrant/add-encadrant.component').then(m => m.AddEncadrantComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'encadrants',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/encadrants/encadrants.component').then(m => m.EncadrantsComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'planifier-entretien',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/entretiens/add-entretien/add-entretien.component').then(m => m.AddEntretienComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'entretiens',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/entretiens/entretiens.component').then(m => m.EntretiensComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'rapports',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/rapports/rapports.component').then(m => m.RapportsComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'recherche',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/recherche/recherche.component').then(m => m.RechercheComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/notifications/notifications.component').then(m => m.NotificationsComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      },
      {
        path: 'profil',
        loadComponent: () => import('./features/dashboard/entreprise-dashboard/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [roleGuard],
        data: { role: 'entreprise' }
      }
    ]
  },

  {
    path: 'encadrant-dashboard',
    component: EncadrantComponent,
    canActivate: [ authGuard, roleGuard ],
    data: { role: 'encadrant' },
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/encadrant-dashboard.component').then(m => m.EncadrantDashboardComponent)
      },
      {
        path: 'etudiant-encadres',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/etudiant-encadres/etudiant-encadres.component').then(m => m.EtudiantEncadresComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'suivi-stage',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/suivi-stage/suivi-stage.component').then(m => m.SuiviStageComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'evaluations',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/evaluations/evaluations.component').then(m => m.EvaluationsComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'faire-evaluation',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/evaluations/add-evaluation/add-evaluation.component').then(m => m.AddEvaluationComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'documents',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/documents/documents.component').then(m => m.DocumentsComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'profil',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/notifications/notifications.component').then(m => m.NotificationsComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
      {
        path: 'help',
        loadComponent: () => import('./features/dashboard/encadrant-dashboard/help/help.component').then(m => m.HelpComponent),
        canActivate: [roleGuard],
        data: { role: 'encadrant' }
      },
    ]
  },

  {
    path: 'etudiant-dashboard',
    component: EtudiantComponent,
    canActivate: [ authGuard, roleGuard ],
    data: { role: 'etudiant' },
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/etudiant-dashboard.component').then(m => m.EtudiantDashboardComponent)
      },
      {
        path: 'candidatures',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/candidatures/candidatures.component').then(m => m.CandidaturesComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
      {
        path: 'stages',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/stages/stages.component').then(m => m.StagesComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
      {
        path: 'documents',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/documents/documents.component').then(m => m.DocumentsComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
      {
        path: 'profil',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/notifications/notifications.component').then(m => m.NotificationsComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
      {
        path: 'help',
        loadComponent: () => import('./features/dashboard/etudiant-dashboard/help/help.component').then(m => m.HelpComponent),
        canActivate: [roleGuard],
        data: { role: 'etudiant' }
      },
    ]
  },

  {
    path: 'chercheur-dashboard',
    component: ChercheurComponent,
    canActivate: [ authGuard, roleGuard ],
    data: { role: 'demande_emploi' },
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/chercheur-dashboard.component').then(m => m.ChercheurDashboardComponent),
      },
      {
        path: 'candidatures',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/candidatures/candidatures.component').then(m => m.CandidaturesComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
      {
        path: 'emplois',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/emplois/emplois.component').then(m => m.EmploisComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
      {
        path: 'documents',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/documents/documents.component').then(m => m.DocumentsComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
      {
        path: 'profil',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/notifications/notifications.component').then(m => m.NotificationsComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
      {
        path: 'help',
        loadComponent: () => import('./features/dashboard/chercheur-dashboard/help/help.component').then(m => m.HelpComponent),
        canActivate: [roleGuard],
        data: { role: 'demande_emploi' }
      },
    ]
  },

  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },

  {
    path: '**',
    loadComponent: () => import('./features/pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent)
  }
];
