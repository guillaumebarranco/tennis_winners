import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculateGrandSlamFinalRatios } from '../../utils/statistics';

@Component({
  selector: 'app-grand-slam-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grand-slam-stats.component.html',
  styleUrls: ['./grand-slam-stats.component.scss']
})
export class GrandSlamStatsComponent {
  topPlayers = calculateGrandSlamFinalRatios().slice(0, 5);
} 