// 2. Ispis u konzolu
console.log("moj prvi projekat");

// 3. const varijabla ime
const ime = "lazar";

// 4. let varijabla prezime
let prezime = "vuckovic";

// 5. console.log sa template literalom
console.log(`moje ime je ${ime} a prezime ${prezime}`);

// 6. promena vrednosti prezime
prezime = "petrovic";

// 7. let varijabla godine
let godine = 20;

// 8. if-else uslov
if (godine < 20) {
  console.log("godine su manje od 20");
} else {
  console.log("godine su vece od 20");
}

// 9. ternarni operator
console.log(godine < 20 ? "godine su manje od 20" : "godine su vece od 20");

// 10. promena vrednosti godine
godine = 50;

// 11. const informacije
const informacije = `${ime} ${prezime} ima ${godine} godina`;

// 12. console.log za godine i informacije
console.log(godine);
console.log(informacije);
