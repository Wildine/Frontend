import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EvaluationService } from './evaluation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluations',
  imports: [CommonModule, RouterLink],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.css'
})
export class EvaluationsComponent {
  evaluations: any[] = [];

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit() {
    this.fetchEvaluations();
  }

  fetchEvaluations() {
    this.evaluationService.getAllEvaluations().subscribe(data => {
      this.evaluations = data;
    });
  }
}
