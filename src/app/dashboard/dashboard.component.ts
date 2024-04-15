import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../models/patient.model';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentPatient: Patient | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentPatient = this.authService.getCurrentPatient();
  }
}
