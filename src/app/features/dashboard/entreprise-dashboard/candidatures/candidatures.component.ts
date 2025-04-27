import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { CandidaturesService } from './candidatures.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatures',
  imports: [CommonModule],
  templateUrl: './candidatures.component.html',
  styleUrl: './candidatures.component.css'
})
export class CandidaturesComponent {
candidatures: any;

  constructor(
    private authService: AuthService,
    private candidatureService: CandidaturesService
  ) {}

  // ngOnInit() {
  //   const user = this.authService.getCurrentUser(); // récupère depuis le localStorage ou le token
  //   if (user) {
  //     // this.candidatureService.getCandidaturesByUser(user.id).subscribe({
  //     this.candidatureService.getCandidaturesByEntreprise(user.id).subscribe({
  //       next: (candidatures) => this.candidatures = candidatures,
  //       error: (err) => console.error(err)
  //     });
  //   }
  // }

}
