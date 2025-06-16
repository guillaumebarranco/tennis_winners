export const isFiveSetsMatch = (score: string[]): boolean => {
  return score.length === 5;
};

export const getPlayerBackgroundColor = (player: string | undefined, isScore: boolean = false, score?: string[]): string => {
  if (!player) {
    return 'var(--color-player-default)';
  }

  // Si c'est un score et que ce n'est pas un match en 5 sets, on retourne transparent
  if (isScore && (!score || !isFiveSetsMatch(score))) {
    return 'var(--color-player-default)';
  }

  if (player.includes('Federer')) {
    return 'var(--color-player-federer)';
  } else if (player.includes('Nadal')) {
    return 'var(--color-player-nadal)';
  } else if (player.includes('Djokovic')) {
    return 'var(--color-player-djokovic)';
  } else if (player.includes('Murray')) {
    return 'var(--color-player-murray)';
  } else if (player.includes('Björn')) {
    return 'var(--color-player-borg)';
  } else if (player.includes('Sampras')) {
    return 'var(--color-player-sampras)';
  } else if (player.includes('Agassi')) {
    return 'var(--color-player-agassi)';
  } else if (player.includes('Lendl')) {
    return 'var(--color-player-lendl)';
  } else if (player.includes('Connors')) {
    return 'var(--color-player-connors)';
  } else if (player.includes('McEnroe')) {
    return 'var(--color-player-mcenroe)';
  } else if (player.includes('Wilander')) {
    return 'var(--color-player-wilander)';
  } else if (player.includes('Alcaraz')) {
    return 'var(--color-player-alcaraz)';
  } else if (isScore) {
    return 'var(--color-player-score)';
  } else {
    return 'var(--color-player-default)';
  }
};