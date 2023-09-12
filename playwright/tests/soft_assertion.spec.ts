import { test, expect } from '@playwright/test';

test('assertionが失敗した時点で後続の処理はおこなわれない。', () => {
  expect(2 + 2).toBe(5);
  console.log('この行は実行されない。');
  expect(42).toBeTruthy()
});

test('expect.softを使うと、assetionが失敗しても後続の処理がおこなわれる', () => {
  // false
  expect.soft(2 + 2).toBe(5);
  console.log('この行は実行される。')

  // true
  expect.soft(42).toBeTruthy()

  // false
  expect.soft("Big Brother is watching you").toBeFalsy()

  // 失敗したテストの数はtest.info().errorsで取得できる
  // true
  expect(test.info().errors.length).toBe(2);
});
