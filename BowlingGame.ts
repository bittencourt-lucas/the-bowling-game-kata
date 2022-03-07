class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRolls: number = 0;

  public roll(pins: number): void {
    this.rolls[this.currentRolls++] = pins;
  }

  public score(): number {
    let score: number = 0;
    let i: number = 0;
    for (let frame: number = 0; frame < 10; frame++) {
      score += this.rolls[i] + this.rolls[i + 1];
      i += 2;
    }
    return score;
  }
}

export { Game };