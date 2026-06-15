const textbox = document.getElementById("textbox")
const tofarnheight = document.getElementById("tofarnheight")
const tocelsus = document.getElementById("tocelsus")
const result= document.getElementById("result")
let temp;
function convert(){
    if(tofarnheight.checked){
        temp = Number(textbox.value)
        temp = temp*9/2+32
        result.textContent = temp+"f"
    }
    else if(tocelsus){
        temp= Number(textbox.value);
        temp= temp+273.15
        result.textContent=temp+"c"
    }
    else{
        result.textContent="select unit"
    }
}
