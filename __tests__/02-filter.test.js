const {
  filterByType,
  filterNamesByType,
  filterNamesByStrength,
} = require("../src/02-filter");

//hi Greg

describe("filterByType()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });
  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.filter()` method", () => {
    const hasFilter = !!filterByType.toString().match(/\.filter(\s*\(|\()/g);
    expect(hasFilter).toBeTruthy();
  });

  test("should return an array of all pokemon objects of the inputted type.", () => {
    const actual = filterByType(pokemon, "water");
    const expected = require("./test-data/filtered-pokemon");
    expect(actual).toEqual(expected);
  });

  test("if no pokemon of the inputted type are found, should return an empty array.", () => {
    const actual = filterByType(ghostPokemon, "water");
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("filterNamesByType()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });
  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!filterNamesByType.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should use the `.filter()` method", () => {
    const hasFilter = !!filterNamesByType
      .toString()
      .match(/\.filter(\s*\(|\()/g);
    expect(hasFilter).toBeTruthy();
  });

  test("should return an array of all pokemon names of the inputted type.", () => {
    const actual = filterNamesByType(pokemon, "water");
    const expected = ["Squirtle", "Poliwag", "Gyarados", "Cloyster"];
    expect(actual).toEqual(expected);
  });

  test("if no pokemon of the inputted type are found, should return an empty array.", () => {
    const actual = filterNamesByType(ghostPokemon, "water");
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("filterNamesByStrength()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });
  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!filterNamesByStrength.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should use the `.filter()` method", () => {
    const hasFilter = !!filterNamesByStrength
      .toString()
      .match(/\.filter(\s*\(|\()/g);
    expect(hasFilter).toBeTruthy();
  });

  test("should return an array of all pokemon names that are strong against the inputted type.", () => {
    const actual = filterNamesByStrength(pokemon, "ice");
    const expected = ["Charmander", "Onix"];
    expect(actual).toEqual(expected);
  });

  test(`if no pokemon that are strong against the inputted type are found, should return 'Sorry, could not find any pokemon that are strong against type: "<inputted type>".'`, () => {
    const actual = filterNamesByStrength(ghostPokemon, "water");
    const expected =
      'Sorry, could not find any pokemon that are strong against type: "water".';
    expect(actual).toEqual(expected);
  });
});
