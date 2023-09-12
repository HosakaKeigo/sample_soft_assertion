import { test, expect } from "vitest"

test("assertionが失敗した時点で後続の処理はおこなわれない。", () => {
  expect(2 + 2).toBe(5)
  console.log("この行は実行されない。")
  expect(42).toBeTruthy()
})

test("expect.softを使うと、assetionが失敗しても後続の処理がおこなわれる", ({ task }) => {
  // false
  expect.soft(2 + 2).toBe(5)
  console.log("この行は実行される。")

  // true
  expect.soft(42).toBeTruthy()

  // false
  expect.soft("Big Brother is watching you").toBeFalsy()

  // 失敗したassertionはtaskから取得できる
  // true
  expect(task.result?.errors?.length).toBe(2)
})
