import unslugify from "./";

test('Should unslugify a slugified string.', () => {
  expect(unslugify('hello-world')).toBe('Hello World');
  expect(unslugify('hello-!-2')).toBe('Hello ! 2');
});
