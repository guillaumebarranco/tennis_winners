export const isFiveSetsMatch = (score: string[]): boolean => {
  return score.length === 5;
};

const removeAccents = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const getPlayerLastName = (fullName: string): string => {
  const parts = fullName.split(' ');
  return parts[parts.length - 1].toLowerCase();
};

const getPlayerFullName = (fullName: string): string => {
  return fullName.toLowerCase().replace(/\s+/g, '_');
};

export const getPlayerBackgroundColor = (player: string | undefined, isScore: boolean = false, score?: string[]): string => {
  if (!player) {
    return 'var(--color-player-default)';
  }

  // Si c'est un score et que ce n'est pas un match en 5 sets, on retourne transparent
  if (isScore && (!score || !isFiveSetsMatch(score))) {
    return 'var(--color-player-default)';
  }

 

  const fullName = removeAccents(getPlayerFullName(player));
  const colorVar = `--color-player-${fullName}`;
  
  // Vérifie si la variable CSS existe
  if (getComputedStyle(document.documentElement).getPropertyValue(colorVar)) {
    return `var(${colorVar})`;
  }

  if (isScore) {
    return `var(${colorVar})`;
  }

  return 'var(--color-player-default)';
};