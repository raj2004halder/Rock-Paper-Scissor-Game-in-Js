const BASE_URL = 
 "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const dropDowns = document.querySelecterAll(".dropdown select");


for(let select of dropDowns){
    for( currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);

    }
}
for (currCode in countryList){
    console.log(currCode, countryList[currCode]);
}

