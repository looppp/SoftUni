function roadRadar(array) {
    let number = +array[0];

    for (let i = 1; i < array.length; i++) {
        switch (array[i]) {
            case  'chop':
                console.log((number = number / 2));
                break;
            case  'dice':
                console.log((number = Math.sqrt(number)));
                break;
            case  'spice':
                console.log((number = number + 1));
                break;
            case  'bake':
                console.log((number = number * 3));
                break;
            case  'fillet':
                console.log((number = number * 0.8).toFixed(1));
                break;
        }
    }
}

roadRadar(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);


