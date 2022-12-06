import Puzzle from '../../types/AbstractPuzzle';

enum Priority {
  a = 1,
  b = 2,
  c = 3,
  d = 4,
  e = 5,
  f = 6,
  g = 7,
  h = 8,
  i = 9,
  j = 10,
  k = 11,
  l = 12,
  m = 13,
  n = 14,
  o = 15,
  p = 16,
  q = 17,
  r = 18,
  s = 19,
  t = 20,
  u = 21,
  v = 22,
  w = 23,
  x = 24,
  y = 25,
  z = 26,
  A = 27,
  B = 28,
  C = 29,
  D = 30,
  E = 31,
  F = 32,
  G = 33,
  H = 34,
  I = 35,
  J = 36,
  K = 37,
  L = 38,
  M = 39,
  N = 40,
  O = 41,
  P = 42,
  Q = 43,
  R = 44,
  S = 45,
  T = 46,
  U = 47,
  V = 48,
  W = 49,
  X = 50,
  Y = 51,
  Z = 52,
}
export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // each line in this.input is an array index
    const arrayInput = this.input.split('\n');
    const commonCharacters = arrayInput.map((rugsack) => {
      const compartment1 = rugsack.slice(0, rugsack.length / 2);
      const compartment2 = rugsack.slice(rugsack.length / 2, rugsack.length);
      const itemsInCompartment1 = compartment1.split('');
      const itemsInCompartment2 = compartment2.split('');
      const commonItems = itemsInCompartment1.filter((item) =>
        itemsInCompartment2.includes(item)
      );
      // remove the duplicates from each index
      const uniqueItems = commonItems.filter(
        (item, index) => commonItems.indexOf(item) === index
      );
      return uniqueItems;
    });
    const allPriorities = commonCharacters.map((commonItems) => {
      const priority = commonItems.map((item: keyof typeof Priority) => {
        return Priority[item];
      });

      return priority.reduce((a, b) => a + b, 0);
    });
    const totalPriority = allPriorities.reduce((a, b) => a + b, 0);

    return `${totalPriority}`;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '8298';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2

    return 'Test 2: ';
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return '';
  }
}
