
# hijriscript fork of Hijri.js

A simple rewritten in Deno (Typescript)

## Installing

package can be downloaded and install via JSR with the command below

```powershell
# deno, pnpm 10.9+, and yarn 4.9+ with first class JSR support
deno add jsr:@denzsakura/hijriscript
pnpm add jsr:@denzsakura/hijriscript
yarn add jsr:@denzsakura/hijriscript

# npm, bun, and older versions of yarn or pnpm
npx jsr add @denzsakura/hijriscript
bunx jsr add @denzsakura/hijriscript
yarn dlx jsr add @denzsakura/hijriscript
pnpm dlx jsr add @denzsakura/hijriscript
```

## Package usage

Example running the package with Deno

```typescript
import { HijriScript } from "@denzsakura/hijriscript";

const todayHijriDate = HijriScript.today();
console.log(`Hijri Date Today: ${todayHijriDate.toString()}`);

const hijriDate = HijriScript.toHijri("29/04/2025");
console.log(`Hijri Date: ${hijriDate.toString()}`);
console.log(`Hijri Date custom format: ${hijriDate.toFormat("d-mm-YYN")}`);

const gregorianDate = HijriScript.toGregorian("01/11/1446");
console.log(`Gregorian Date: ${gregorianDate.toISOString()}`);
```

### Original readme is below

# Hijri.js

A simple implementation for the Islamic calender(Hijri) in Javascript

## The Problem

I made this project just because I did not found any correct and open source Hijri converter. Each time I try one its either stored in database and fetch the data each time or it does not give me the correct date "specially when I try before 1420H"

## Usage

### Current Day

To get Today in Hijri:

```html
<body onload="initWork()" >
 <!-- Include Hijri.js in your work -->
 <script type="text/javascript" src="Hijri.js"></script>

 <span>Today is: </span><span id="today"></span>
 <script type="text/javascript">
 function initWork() {
  //Today
  var todayElement = document.getElementById("today");
  todayElement.innerHTML = HijriJS.today().toString();
 }
 </script>
</body>
```

### Conversion

To convert between Hijri and Gregorian use the ``HijriJS.toHijri(dateString, splitter)`` to convert Gregorian to Hijri
or ``HijriJS.toGregorian(dateString, splitter)``  to convert Hijri to Gregorian where the splitter is the symbol splits the date (e.g. for 1434/1/1 is ``HijriJS.toGregorian("1434/1/1", "/")``):

```html
<body>
 <!-- Include Hijri.js in your work -->
 =<script type="text/javascript" src="Hijri.js"></script>

 <!-- Input Area -->
 <input id="gregorianInput" onchange="convertToHijri()" />
 &nbsp; <span id="hijriDate"></span>

 <script type="text/javascript">
 function convertToHijri() {
  var gregorianDate = document.getElementById("gregorianInput").value
  var hijriDate = document.getElementById("hijriDate");

  var date = HijriJS.toHijri(gregorianDate, "/");
  hijriDate.innerHTML = date.toString();
 }
 </script>
</body>
```

### Formating

More advanced is to print the date with different format you can use ``date.toFormat(yourStringFormat);`` where yourStringFormat can be:

- **YYYY**: For the four digit year notation e.g. 1434.
- **YY**: For two year notation e.g. 34 of 1434.
- **mm**: For two digit month notation e.g. 03.
- **m**: For one digit month notation e.g. 3.
- **dd**: For two digit day notation.
- **d**: For one digit day notation.
- **n**: For calender notation "H for Hijri or G for Gregorian".

You can use the same example above and change it like this:

```javascript

function convertToHijri() {
 var gregorianDate = document.getElementById("gregorianInput").value
 var hijriDate = document.getElementById("hijriDate");

 var date = HijriJS.toHijri(gregorianDate, "/");
 hijriDate.innerHTML = date.toFormat("dd/mm/yyyyN");
}

```
