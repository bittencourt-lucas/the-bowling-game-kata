class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRolls: number = 0;

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }

  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  private strikeBonus(frameIndex: number): number {
    return 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  public roll(pins: number): void {
    this.rolls[this.currentRolls++] = pins;
  }

  public score(): number {
    let score: number = 0;
    let frameIndex: number = 0;
    for (let frame: number = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.spareBonus(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }
}

export { Game };