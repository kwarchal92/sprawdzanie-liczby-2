let liczba = 0;
let liczba2 = 0;


function main(liczba, liczba2){
    let wynik = liczba + liczba2;

    if(liczba == 20 || liczba2 == 20 || wynik <= 20) {
        console.log("Prawda");
      } else {
        console.log("Fałsz");
      }

    }

console.log(main(liczba, liczba2))