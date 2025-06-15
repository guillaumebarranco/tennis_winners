export const isFiveSetsMatch = (score: string[]): boolean => {
  return score.length === 5;
};

export const getPlayerBackgroundColor = (player: string | undefined, isScore: boolean = false, score?: string[]): string => {
  if (!player) {
    return 'transparent';
  }

  // Si c'est un score et que ce n'est pas un match en 5 sets, on retourne transparent
  if (isScore && (!score || !isFiveSetsMatch(score))) {
    return 'transparent';
  }

  if (player.includes('Federer')) {
    return 'greenyellow';
  } else if (player.includes('Nadal')) {
    return 'orange';
  } else if (player.includes('Djokovic')) {
    return 'red';
  } else if (player.includes('Murray')) {
    return 'deepskyblue';
  } else if (player.includes('Björn')) {
    return 'yellow';
  } else if (player.includes('Sampras')) {
    return 'cadetblue';
  } else if (player.includes('Agassi')) {
    return 'mediumpurple';
  } else if (player.includes('Lendl')) {
    return 'lightskyblue';
  } else if (player.includes('Connors')) {
    return 'antiquewhite';
  } else if (player.includes('McEnroe')) {
    return 'lightgray';
  } else if (player.includes('Wilander')) {
    return 'pink';
  } else if (isScore) {
    return 'beige';
  } else {
    return 'transparent';
  }
}; 