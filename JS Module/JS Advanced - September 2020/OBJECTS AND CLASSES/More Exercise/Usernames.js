function sortUsernames(array) {
    let hashedArray = [];
    array.forEach(x => {
        if (hashedArray.includes(x)) {

        } else {
            hashedArray.push(x);
        }
    });
    let sortedArray = hashedArray.sort((a, b) => a.length - b.length || a.localeCompare(b));
    sortedArray.forEach(x => console.log(x));

}

sortUsernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);