function solveStars(input = 5) {
    for (let i = 0; i < input; i++) {
        console.log('*'.repeat(input).split('').join(' '));
    }
}

solveStars(2);