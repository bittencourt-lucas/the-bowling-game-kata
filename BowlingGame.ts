class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRolls: number = 0;

  public roll(pins: number): void {
    this.rolls[this.currentRolls++] = pins;
  }

  public score(): number {
    let score: number = 0;
    for (let i: number = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];
    }
    return score;
  }
}

export { Game };