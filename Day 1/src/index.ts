const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`.split(`\n\n`);

const totals = [];
for (const i of input) {
    const a = i.split("\n");
    let workingTotal = 0;
    for (const j of a) {
        workingTotal += parseInt(j);
    }
    totals.push(workingTotal);
}
totals.sort((a, b) => a - b);
const l = totals.length;
console.log(`Pt 1: ${totals[l - 1]}`);

console.log(`Pt 2: ${totals[l - 1] + totals[l - 2] + totals[l - 3]}`);
