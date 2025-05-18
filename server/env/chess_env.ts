import { Chess } from "chess.js";

export class ChessEnv {
  private game: Chess;

  constructor() {
    this.game = new Chess();
  }

  reset(): string {
    this.game.reset();
    return this.game.fen();
  }

  step(move: { from: string; to: string }): {
    fen: string;
    reward: number;
    done: boolean;
  } {
    this.game.move(move);
    // Placeholder reward; will be replaced by LLM/reward_fn later
    const reward = 0;
    return {
      fen: this.game.fen(),
      reward,
      done: this.game.isGameOver(),
    };
  }

  render(): string {
    return this.game.ascii();
  }

  getFEN(): string {
    return this.game.fen();
  }
}
