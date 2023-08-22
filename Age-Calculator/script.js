let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculatorAge(){
    let birthDate = new Date(userInput.value);

    let day = birthDate.getDate();
    let month = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let day3, month3 , year3;

    year3 = year2 - year;

    if(month2 >= month){
        month3 = month2 - month;
    }else{
        year3--;
        month3 = 12 + month2 - month;
    }
    if (day2 >= day){
        day3 = day2 - day;
    }else{
        month3--;
        day3 = getDaysInMonth(year,month) + day2 - day;
    }
    if (month3 < 0){
        month3 = 11;
        year3--;
    }
    result.innerHTML = `You are 
    <span> ${year3} </span> years, 
    <span> ${month3} </span> months and 
    <span> ${day3} </span> days old `;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}