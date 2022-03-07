class Game {
  private points: number = 0;

  public roll(pins: number): void {
    this.points += pins;
  }

  public score(): number {
    return this.points;
  }
}

export { Game };