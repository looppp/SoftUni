function solve(input1, input2, input3) {
    let totalLength = input1.length + input2.length + input3.length;
    let averegeLength = Math.round(totalLength / 3);

    console.log(totalLength);
    console.log(averegeLength);
}

solve('chocolate', 'ice cream', 'cake');