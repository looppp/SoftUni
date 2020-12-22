function sortArray(array) {
    const twoCrtSort = (cur, next) => cur.length - next.length || cur.localeCompare(next);
    array.sort(twoCrtSort);
    console.log(array.join('\n'));
}

sortArray(['test', 
'Deny', 
'omen', 
'Default']);