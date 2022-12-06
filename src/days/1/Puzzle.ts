import Puzzle from '../../types/AbstractPuzzle';
export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const entriesPerElf = this.input
      .split('\n\n')
      .map((entry: string) => entry.split('\n').map(Number)) as Array<number[]>;

    const result = Math.max(
      ...entriesPerElf.map((currentElfEntries) => {
        return currentElfEntries.reduce<number>((sum, calories) => {
          return sum + calories;
        }, 0);
      })
    );

    const topThree = entriesPerElf
      .map((currentElfEntries) => {
        return currentElfEntries.reduce<number>((sum, calories) => {
          return sum + calories;
        }, 0);
      })
      .sort((a, b) => b - a)
      .slice(0, 3);
    const topThreeTotal = topThree.reduce((sum, current) => sum + current, 0);

    return topThreeTotal.toString();
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    return '';
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return '';
  }
}
