import { Game } from './BowlingGame';

describe("The Bowling Game Kata", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  it('should roll a gutter game', () => {
    for (let i: number = 0; i < 20; i++) {
      g.roll(0);
    }
    expect(g.score()).toBe(0);
  });

  it('should roll all ones', () => {
    for (let i: number = 0; i < 20; i++) {
      g.roll(1);
    }
    expect(g.score()).toBe(20);
  });
});