class Language {
    
}

class English extends Language {
    greeting() {
        console.log("Hello");
    }
}
 
class French  extends Language {
    greeting() {
        console.log("Bonjour");
    }
}
 
function intro(language) {
    if(language instanceof Language)  {
      language.greeting();
    }
}
 
let eng = new English();
let fr = new French();
 
intro(eng);
intro(fr);
 
let someObject = {};
 
intro(someObject);