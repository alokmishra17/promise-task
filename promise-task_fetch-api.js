regionAsia=
fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data)=>data.json())


regionEurope=
fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data)=>data.json())

Promise.all([regionAsia,regionEurope])
.then((countries)=>{
    let all = countries[0].concat(countries[1]);
    console.log("Asia and Europe region Country: ")
    console.log(all);
    console.log("\n\n---------------------------------------\n\n");
});

//https://restcountries.eu/rest/v2/lang/es
 



spanishLang=
fetch("https://restcountries.eu/rest/v2/lang/es")
 .then((data)=>data.json())

 Promise.all([spanishLang])
  .then((countries)=>{
        countries.forEach((country)=>{
            console.log("Country with spanish language :",country);
            let arr = country.filter((value)=>value.region=="Europe");
                console.log("Spanish language and region Europe\n",arr);
            });
        });
