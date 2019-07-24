function solve() {



    let optionCreateBinary = document.createElement("option");
    let optionCreateHexadecimal = document.createElement("option");
    document.getElementById("selectMenuTo").appendChild(optionCreateBinary);
    document.getElementById("selectMenuTo").appendChild(optionCreateHexadecimal);

    let binaryOpt = document.getElementById("selectMenuTo").options[1];
    let hexadecimalOpt = document.getElementById("selectMenuTo").options[2];
    let selector = document.getElementById("selectMenuTo");

    binaryOpt.value = "binary";
    binaryOpt.text = "Binary";
    hexadecimalOpt.value = "hexadecimal";
    hexadecimalOpt.text = "Hexadecimal";

    document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
        let inputNumber = document.getElementById("input").value;
        let resultElement = document.getElementById("result");

        if (selector.value === "binary"){
            let binaryResult = Number(inputNumber).toString(2);
            resultElement.value = binaryResult.toUpperCase();

        }
        else if(selector.value === "hexadecimal"){
            let hexaDecimalResult = Number(inputNumber).toString(16);
            resultElement.value = hexaDecimalResult.toUpperCase();
        }
    })
}