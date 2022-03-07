import { Game } from './BowlingGame';

let g: Game;

function rollMany(n: number, pins: number): void {
  for (let i: number = 0; i < n; i++) {
    g.roll(pins);
  }
}

describe("The Bowling Game Kata", () => {
  beforeEach(() => {
    g = new Game();
  });

  it('should roll a gutter game', () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  it('should roll all ones', () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });
});