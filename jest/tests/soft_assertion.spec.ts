
import { expect, test } from '@jest/globals';

test("jestではsoft assertionができない", () => {
  expect(2 + 2).toBe(4)

  expect(expect.soft).toBeUndefined()
})