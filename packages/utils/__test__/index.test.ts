import { describe, it, expect } from "vitest";
import { isObject, isOn } from "../src";

describe("测试工具库", () => {
  it("测试 isObject 函数", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(null)).toBe(false);
  });
  it("测试 isOn 函数", () => {
    expect(isOn("onclick")).toBe(true);
    expect(isOn("1")).toBe(false);
  });
});
