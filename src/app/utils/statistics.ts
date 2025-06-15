import { australianOpenWinners } from '../data/slams/australian_open';
import { rolandGarrosWinners } from '../data/slams/roland_garros';
import { usOpenWinners } from '../data/slams/us_open';
import { wimbledonWinners } from '../data/slams/wimbledon';

interface PlayerStats {
  name: string;
  wins: number;
  finals: number;
  ratio: number;
}

export function calculateGrandSlamFinalRatios(): PlayerStats[] {
  const playerStats = new Map<string, { wins: number; finals: number }>();

  // Fonction pour traiter les finales d'un tournoi
  const processTournament = (tournament: typeof australianOpenWinners) => {
    tournament.forEach(match => {
      if (match.winner && match.finalist) {
        // Traiter le vainqueur
        const winnerStats = playerStats.get(match.winner) || { wins: 0, finals: 0 };
        winnerStats.wins++;
        winnerStats.finals++;
        playerStats.set(match.winner, winnerStats);

        // Traiter le finaliste
        const finalistStats = playerStats.get(match.finalist) || { wins: 0, finals: 0 };
        finalistStats.finals++;
        playerStats.set(match.finalist, finalistStats);
      }
    });
  };

  // Traiter tous les tournois
  processTournament(australianOpenWinners);
  processTournament(rolandGarrosWinners);
  processTournament(wimbledonWinners);
  processTournament(usOpenWinners);

  console.log(playerStats);

  // Convertir en tableau et calculer les ratios
  const stats: PlayerStats[] = Array.from(playerStats.entries())
    .map(([name, stats]) => ({
      name,
      wins: stats.wins,
      finals: stats.finals,
      ratio: (stats.wins / stats.finals) * 100
    }))
    .filter(player => player.finals >= 10) // Ne garder que les joueurs avec au moins 10 finales
    .sort((a, b) => b.ratio - a.ratio); // Trier par ratio décroissant

  return stats;
} 