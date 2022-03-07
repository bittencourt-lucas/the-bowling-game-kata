class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRolls: number = 0;

  public roll(pins: number): void {
    this.rolls[this.currentRolls++] = pins;
  }

  public score(): number {
    let score: number = 0;
    let frameIndex: number = 0;
    for (let frame: number = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) { // spare
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }
}

export { Game };