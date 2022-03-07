import { Game } from './BowlingGame';

let g: Game;

function rollMany(n: number, pins: number): void {
  for (let i: number = 0; i < n; i++) {
    g.roll(pins);
  }
}

function rollStrike(): void {
  g.roll(10);
}

function rollSpare(): void {
  g.roll(5);
  g.roll(5);
}

describe('The Bowling Game Kata', () => {
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

  it('should roll a spare', () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });

  it('should roll a strike', () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toBe(24);
  });

  it('should roll a perfect game', () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });
});