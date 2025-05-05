import { assert, assertEquals } from "@std/assert";
import { HijriScript } from "./hijriscript.ts";
import { test } from "@cross/test";

test("toHijri", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assertEquals(hijriDate.toString(), "01/11/1446H");
});

test("toHijri to dd-mm-YYYYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assertEquals(hijriDate.toFormat("dd-mm-YYYYN"), "01-11-1446H");
});
test("toHijri to dd-mm-YYYYN format with arabic numeral", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assertEquals(hijriDate.toFormat("dd-mm-YYYYN", true), "٠١-١١-١٤٤٦H");
});

test("toHijri to dd-mm-YYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assertEquals(hijriDate.toFormat("dd-mm-YYN"), "01-11-46H");
});

test("toHijri to d-mm-YYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assertEquals(hijriDate.toFormat("d-mm-YYN"), "1-11-46H");
});

test("toGregorian", () => {
  const gregorianDate = HijriScript.toGregorian("1/11/1446");
  const expectedDate = new Date(2025, 3, 29);
  assertEquals(gregorianDate.toString(), expectedDate.toString());
});

test("toHijri with custom splitter", () => {
  const hijriDate = HijriScript.toHijri("29-04-2025", "-");
  assertEquals(hijriDate.toString(), "01/11/1446H");
});

test("toGregorian with custom splitter", () => {
  const gregorianDate = HijriScript.toGregorian("1m11m1446", "m");
  const expectedDate = new Date(2025, 3, 29);
  assertEquals(gregorianDate.toString(), expectedDate.toString());
});

test("gregorianToHijri", () => {
  const hijriDate = HijriScript.gregorianToHijri(2025, 4, 29);
  assertEquals(hijriDate.toString(), "01/11/1446H");
});

test("hijriToGregorian", () => {
  const gregorianDate = HijriScript.hijriToGregorian(1446, 11, 1);
  const expectedDate = new Date(2025, 3, 29);
  assertEquals(gregorianDate.toString(), expectedDate.toString());
});

test("validateHijri", () => {
  const isValid = HijriScript.validateHijri(1446, 11, 1);
  assert(isValid);
});

test("validateGregorian", () => {
  const isValid = HijriScript.validateGregorian(2025, 4, 29);
  assert(isValid);
});

test("validateHijri invalid input", () => {
  const isValid = HijriScript.validateHijri(1446, 13, 1);
  assert(!isValid);
});

test("validateGregorian invalid input", () => {
  const isValid = HijriScript.validateGregorian(2025, 4, 32);
  assert(!isValid);
});

test("validateGregorian lapyear", () => {
  const isValid = HijriScript.validateGregorian(2024, 2, 29);
  assert(isValid);
});
