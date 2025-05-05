import { HijriScript } from "./hijriscript.ts";

const todayHijriDate = HijriScript.today();
console.log(`Hijri Date Today: ${todayHijriDate.toString()}`);

const hijriDate = HijriScript.toHijri("29/04/2025");
console.log(`Hijri Date: ${hijriDate.toString()}`);
console.log(`Hijri Date custom format: ${hijriDate.toFormat("d-mm-YYN")}`);
console.log(
  `Hijri Date custom format with arabic numeral: ${
    hijriDate.toFormat("dd-mm-YYYYN", true)
  }`,
);
console.log(`Hijri Date month name: ${hijriDate.monthName}`);

const gregorianDate = HijriScript.toGregorian("01/11/1446");
console.log(`Gregorian Date: ${gregorianDate.toISOString()}`);
