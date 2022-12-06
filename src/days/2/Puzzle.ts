import Puzzle from '../../types/AbstractPuzzle';

enum RPS {
  scissors = '3',
  rock = '1',
  paper = '2',
}
enum LOSEWINDRAW {
  lose,
  win,
  draw,
}
export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const player1: {
      A: RPS.rock;
      B: RPS.paper;
      C: RPS.scissors;
      [key: string]: RPS;
    } = {
      A: RPS.rock,
      B: RPS.paper,
      C: RPS.scissors,
    };
    const player2: {
      Z: RPS.scissors;
      Y: RPS.paper;
      X: RPS.rock;
      [key: string]: RPS;
    } = {
      Z: RPS.scissors,
      Y: RPS.paper,
      X: RPS.rock,
    };

    // each line of the input is a round.
    // each round is a string containing 1 character a space and 1 character
    // e.g. "A Z" A would be player 1 and Z would be player 2
    const rounds = this.input.split('\n');
    const results: {
      player1: number;
      player2: number;
    }[] = rounds.map((round) => {
      const [player1string, player2string] = round.split(' ');
      const player1move = player1[player1string];
      const player2move = player2[player2string];

      if (player1move === player2move) {
        return {
          player1: parseInt(player1move) + 3,
          player2: parseInt(player2move) + 3,
        };
      } else if (
        (player1move === RPS.scissors && player2move === RPS.paper) ||
        (player1move === RPS.paper && player2move === RPS.rock) ||
        (player1move === RPS.rock && player2move === RPS.scissors)
      ) {
        return {
          player1: 6 + parseInt(player1move),
          player2: 0 + parseInt(player2move),
        };
      } else {
        return {
          player1: 0 + parseInt(player1move),
          player2: 6 + parseInt(player2move),
        };
      }
    });
    const playerResults = results.reduce(
      (acc, curr) => {
        acc.player1 += curr.player1;
        acc.player2 += curr.player2;
        return acc;
      },
      { player1: 0, player2: 0 }
    );

    return `Part 1: ${playerResults.player2}`;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '9759';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const player1: {
      A: RPS.rock;
      B: RPS.paper;
      C: RPS.scissors;
      [key: string]: RPS;
    } = {
      A: RPS.rock,
      B: RPS.paper,
      C: RPS.scissors,
    };
    const player2: {
      Z: LOSEWINDRAW.win;
      Y: LOSEWINDRAW.draw;
      X: LOSEWINDRAW.lose;
      [key: string]: LOSEWINDRAW;
    } = {
      Z: LOSEWINDRAW.win,
      Y: LOSEWINDRAW.draw,
      X: LOSEWINDRAW.lose,
    };

    // each line of the input is a round.
    // each round is a string containing 1 character a space and 1 character
    // e.g. "A Z" A would be player 1 and Z would be player 2
    const rounds = this.input.split('\n');
    const results: {
      player1: number;
      player2: number;
    }[] = rounds.map((round) => {
      const [player1string, player2string] = round.split(' ');
      const player1move = player1[player1string];
      // if player2 = LOSEWINDRAW.win and player1move = RPS.rock, choose RPS.paper for player2
      // if player2 = LOSEWINDRAW.win and player1move = RPS.paper, choose RPS.scissors for player2
      // if player2 = LOSEWINDRAW.win and player1move = RPS.scissors, choose RPS.rock for player2
      // if player2 = LOSEWINDRAW.lose and player1move = RPS.rock, choose RPS.scissors for player2
      // if player2 = LOSEWINDRAW.lose and player1move = RPS.paper, choose RPS.rock for player2
      // if player2 = LOSEWINDRAW.lose and player1move = RPS.scissors, choose RPS.paper for player2
      // if player2 = LOSEWINDRAW.draw and player1move = RPS.rock, choose RPS.rock for player2
      // if player2 = LOSEWINDRAW.draw and player1move = RPS.paper, choose RPS.paper for player2
      // if player2 = LOSEWINDRAW.draw and player1move = RPS.scissors, choose RPS.scissors for player2
      const player2move = player2[player2string];
      if (player2move === LOSEWINDRAW.win) {
        if (player1move === RPS.rock) {
          return {
            player1: parseInt(RPS.rock) + 0,
            player2: parseInt(RPS.paper) + 6,
          };
        }
        if (player1move === RPS.paper) {
          return {
            player1: parseInt(RPS.paper) + 0,
            player2: parseInt(RPS.scissors) + 6,
          };
        }
        if (player1move === RPS.scissors) {
          return {
            player1: parseInt(RPS.scissors) + 0,
            player2: parseInt(RPS.rock) + 6,
          };
        }
      }
      if (player2move === LOSEWINDRAW.lose) {
        if (player1move === RPS.rock) {
          return {
            player1: parseInt(RPS.rock) + 6,
            player2: parseInt(RPS.scissors) + 0,
          };
        }
        if (player1move === RPS.paper) {
          return {
            player1: parseInt(RPS.paper) + 6,
            player2: parseInt(RPS.rock) + 0,
          };
        }
        if (player1move === RPS.scissors) {
          return {
            player1: parseInt(RPS.scissors) + 6,
            player2: parseInt(RPS.paper) + 0,
          };
        }
      }
      if (player2move === LOSEWINDRAW.draw) {
        if (player1move === RPS.rock) {
          return {
            player1: parseInt(RPS.rock) + 3,
            player2: parseInt(RPS.rock) + 3,
          };
        }
        if (player1move === RPS.paper) {
          return {
            player1: parseInt(RPS.paper) + 3,
            player2: parseInt(RPS.paper) + 3,
          };
        }
        if (player1move === RPS.scissors) {
          return {
            player1: parseInt(RPS.scissors) + 3,
            player2: parseInt(RPS.scissors) + 3,
          };
        }
      }
    });
    const playerResults = results.reduce(
      (acc, curr) => {
        acc.player1 += curr.player1;
        acc.player2 += curr.player2;
        return acc;
      },
      { player1: 0, player2: 0 }
    );

    return `Part two: ${playerResults.player2}`;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
