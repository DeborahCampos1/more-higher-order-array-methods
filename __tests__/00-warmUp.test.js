const {
  plusOne,
  timesTwo,
  filterForOdds,
  filterOddsOrEvens,
  findTargetNum,
  isEveryElTheSame,
  areSomeEqualToInput,
} = require("../src/00-warmUp");

describe("plusOne()", () => {
  test("should use the `.map()` method", () => {
    const hasMap = !!plusOne.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should add 1 to each number in the inputted array.", () => {
    expect(plusOne([1, 2, 3])).toEqual([2, 3, 4]);
    expect(plusOne([2, 3, 4])).toEqual([3, 4, 5]);
  });
});

describe("timesTwo()", () => {
  test("should use the `.map()` method", () => {
    const hasMap = !!timesTwo.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should multiply each number in the inputted array by two.", () => {
    expect(timesTwo([1, 2, 3])).toEqual([2, 4, 6]);
    expect(timesTwo([2, 3, 4])).toEqual([4, 6, 8]);
  });
});

describe("filterForOdds()", () => {
  test("should use the `.filter()` method", () => {
    const hasFilter = !!filterForOdds.toString().match(/\.filter(\s*\(|\()/g);
    expect(hasFilter).toBeTruthy();
  });

  test("should return a filtered array with only odd numbers.", () => {
    expect(filterForOdds([1, 2, 3])).toEqual([1, 3]);
    expect(filterForOdds([2, 3, 4, 5, 6, 7])).toEqual([3, 5, 7]);
  });
});

describe("filterOddsOrEvens()", () => {
  test("should use the `.filter()` method", () => {
    const hasFilter = !!filterOddsOrEvens
      .toString()
      .match(/\.filter(\s*\(|\()/g);
    expect(hasFilter).toBeTruthy();
  });

  test("should return a filtered array with only odd or even numbers depending on inputted parity.", () => {
    expect(filterOddsOrEvens([1, 2, 3], "odd")).toEqual([1, 3]);
    expect(filterOddsOrEvens([1, 2, 3], "even")).toEqual([2]);
    expect(filterOddsOrEvens([2, 3, 4, 5, 6, 7], "odd")).toEqual([3, 5, 7]);
    expect(filterOddsOrEvens([2, 3, 4, 5, 6, 7], "even")).toEqual([2, 4, 6]);
  });

  test("should be case-insensitive.", () => {
    expect(filterOddsOrEvens([1, 2, 3], "ODd")).toEqual([1, 3]);
    expect(filterOddsOrEvens([1, 2, 3], "eVen")).toEqual([2]);
    expect(filterOddsOrEvens([2, 3, 4, 5, 6, 7], "odD")).toEqual([3, 5, 7]);
    expect(filterOddsOrEvens([2, 3, 4, 5, 6, 7], "eVEn")).toEqual([2, 4, 6]);
  });
});

describe("findTargetNum()", () => {
  test("should use the `.find()` method", () => {
    const hasFind = !!findTargetNum.toString().match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the target number.", () => {
    expect(findTargetNum([1, 2, 3], 3)).toEqual(3);
    expect(findTargetNum([2, 3, 4, 7, 6, 8], 6)).toEqual(6);
  });

  test("should return undefined if no target is found.", () => {
    expect(findTargetNum([1, 2, 3], 4)).toEqual(undefined);
    expect(findTargetNum([2, 3, 4, 7, 6, 8], 10)).toEqual(undefined);
  });
});

describe("isEveryElTheSame()", () => {
  test("should use the `.every()` method", () => {
    const hasEvery = !!isEveryElTheSame.toString().match(/\.every(\s*\(|\()/g);
    expect(hasEvery).toBeTruthy();
  });

  test("should return true if every element in the array is the same.", () => {
    expect(isEveryElTheSame([3, 3, 3, 3])).toEqual(true);
    expect(isEveryElTheSame(["test", "test", "test"])).toEqual(true);
  });

  test("should return false if not every element is the same.", () => {
    expect(isEveryElTheSame([1, 2, 3])).toEqual(false);
    expect(isEveryElTheSame(["hi", "hello", "howdy"])).toEqual(false);
  });
});

describe("areSomeEqualToInput()", () => {
  test("should use the `.some()` method", () => {
    const hasSome = !!areSomeEqualToInput.toString().match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return true if one or more elements in the array match the inputted value.", () => {
    expect(areSomeEqualToInput([3, 4, 5, 5, 3, 4], 4)).toEqual(true);
    expect(areSomeEqualToInput(["s", "string", "str"], "string")).toEqual(true);
  });

  test("should return false if none of the elements in the array match the inputted value.", () => {
    expect(areSomeEqualToInput([1, 2, 3], 4)).toEqual(false);
    expect(areSomeEqualToInput(["hi", "hello", "hi"], "howdy")).toEqual(false);
  });
});
