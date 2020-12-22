function uniqueSequences(input){
    let a = [7.14, 7.180, 7.339, 80.099];
    let b = [7.339, 80.0990, 7.140000, 7.18];
    let c = [7.339, 7.180, 7.14, 80.099];

    console.log((JSON.stringify(a.sort()) === JSON.stringify(c.sort())));
    
}
//TODO Find the correct algorithm
uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);



