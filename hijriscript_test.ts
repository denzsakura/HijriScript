import { assert } from "@std/assert";
import { HijriScript } from "./hijriscript.ts";

Deno.test("toHijri", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assert(hijriDate.toString() === "01/11/1446H");
});

Deno.test("toHijri to dd-mm-YYYYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assert(hijriDate.toFormat("dd-mm-YYYYN") === "01-11-1446H");
});
Deno.test("toHijri to dd-mm-YYYYN format with arabic numeral", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assert(hijriDate.toFormat("dd-mm-YYYYN", true) === "٠١-١١-١٤٤٦H");
});

Deno.test("toHijri to dd-mm-YYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assert(hijriDate.toFormat("dd-mm-YYN") === "01-11-46H");
});

Deno.test("toHijri to d-mm-YYN format", () => {
  const hijriDate = HijriScript.toHijri("29/04/2025");
  assert(hijriDate.toFormat("d-mm-YYN") === "1-11-46H");
});

Deno.test("toGregorian", () => {
  const gregorianDate = HijriScript.toGregorian("1/11/1446");
  const expectedDate = new Date(2025, 3, 29);
  assert(gregorianDate.toString() === expectedDate.toString());
});

Deno.test("toHijri with custom splitter", () => {
  const hijriDate = HijriScript.toHijri("29-04-2025", "-");
  assert(hijriDate.toString() === "01/11/1446H");
});

Deno.test("toGregorian with custom splitter", () => {
  const gregorianDate = HijriScript.toGregorian("1m11m1446", "m");
  const expectedDate = new Date(2025, 3, 29);
  assert(gregorianDate.toString() === expectedDate.toString());
});

Deno.test("gregorianToHijri", () => {
  const hijriDate = HijriScript.gregorianToHijri(2025, 4, 29);
  assert(hijriDate.toString() === "01/11/1446H");
});

Deno.test("hijriToGregorian", () => {
  const gregorianDate = HijriScript.hijriToGregorian(1446, 11, 1);
  const expectedDate = new Date(2025, 3, 29);
  assert(gregorianDate.toString() === expectedDate.toString());
});

Deno.test("validateHijri", () => {
  const isValid = HijriScript.validateHijri(1446, 11, 1);
  assert(isValid);
});

Deno.test("validateGregorian", () => {
  const isValid = HijriScript.validateGregorian(2025, 4, 29);
  assert(isValid);
});

Deno.test("validateHijri invalid input", () => {
  const isValid = HijriScript.validateHijri(1446, 13, 1);
  assert(!isValid);
});

Deno.test("validateGregorian invalid input", () => {
  const isValid = HijriScript.validateGregorian(2025, 4, 32);
  assert(!isValid);
});

Deno.test("validateGregorian lapyear", () => {
  const isValid = HijriScript.validateGregorian(2024, 2, 29);
  assert(isValid);
});
