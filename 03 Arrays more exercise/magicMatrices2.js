function solve(arr) {

    let sumRow = arr.map((col => col.reduce((a,b) => a + b)));

    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

    let allEqual = array => array.every( v => v === array[0]);

    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}
console.log();

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);

let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);
