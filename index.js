let button = document.querySelector(".btn");
let valueOne = document.getElementsByClassName("form-control")[0];
let valueTwo = document.getElementsByClassName("form-control")[1];
let option = document.querySelector(".form-select");
let bodyTag = document.getElementsByTagName("body")[0];
let modal_title = document.querySelector(".modal-title");
let modal_body = document.querySelector(".modal-body");
let modal_footer = document.querySelector(".modal-footer");

let result;



button.addEventListener("click",()=> {
    if(valueOne.value === '' || valueTwo.value === ''){
    modal_title.innerHTML = option.value;
    modal_body.innerHTML = "Enter first value and second value";
    modal_footer.children[0].innerHTML = null;
    }
    else{
        switch(option.value){
            case "Addition":
                 result = parseInt(valueOne.value) + parseInt(valueTwo.value);
            break;
            case "Subtraction":
                 result = parseInt(valueOne.value) - parseInt(valueTwo.value);
            break;     
            case "Multiplication":
                result = parseInt(valueOne.value) * parseInt(valueTwo.value);
            break;
            case "Division":
                result = (parseInt(valueOne.value) / parseInt(valueTwo.value)).toFixed(2);
            default:
            break;
        }
        modal_title.innerHTML = option.value;
        modal_body.innerHTML = `First value is ${valueOne.value} and Second value is
        ${valueTwo.value}`;
        modal_footer.children[0].innerHTML = `Result : ${result}`;
        console.log(modal_footer.children[0]);
    }
    valueOne.value = ''
    valueTwo.value = ''
    
})



let array = [0,1,2,3];
let current_Value;
let kyat,dollar,yuan,pound;

let burmese = document.getElementsByClassName("f")[0];
let american = document.getElementsByClassName("f")[1];
let china = document.getElementsByClassName("f")[2];
let japan = document.getElementsByClassName("f")[3];

for(let i=0;i<array.length;i++){
    let formValue = document.getElementsByClassName("f")[i];
    formValue.id = array[i];
    formValue.addEventListener("keyup",()=> {
        switch(formValue.id){
            case "0":
                 myanamr(formValue.value)
            break;
            case "1":
                america(formValue.value)
            break;   
            case "2":
                chinese(formValue.value);
            break;    
            case "3":
                japanese(formValue.value);
            break;
            default:
                break;    

        }
    })
}


let myanamr = (formValue) => {
    if(formValue == 0){
        american.value = '';
        china.value = '';
        japan.value = '';
    }
    else{
        burmese.value = formValue;
        american.value = (formValue * 0.00054);
        china.value = (formValue * 0.0036).toFixed(2);
        japan.value = (formValue * 0.073);
    }
}

let america = (formValue) => {
    if(formValue == 0){
        burmese.value = '';
        china.value = '';
        japan.value = '';
    }
    else{
        burmese.value = formValue * 1852.10;
        american.value = formValue;
        china.value = (formValue * 6.70).toFixed(2);
        japan.value = (formValue * 135.77).toFixed(3);
    }
}


let chinese = (formValue) => {
    if(formValue == 0){
        american.value = '';
        burmese.value = '';
        japan.value = '';
    }
    else{
        china.value = formValue;
        american.value = (formValue * 0.15).toFixed(5);
        burmese.value = (formValue * 276.27).toFixed(3);
        japan.value = (formValue * 20.24).toFixed(3);
    }
}

let japanese = (formValue) => {
    if(formValue == 0){
        american.value = '';
        china.value = '';
        burmese.value = '';
    }
    else{
        burmese.value = (formValue * 13.65).toFixed(3);
        american.value = (formValue * 0.0074).toFixed(4);
        china.value = (formValue * 0.049).toFixed(3);
        japan.value = formValue;
    }
}



