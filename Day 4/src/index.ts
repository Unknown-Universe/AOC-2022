const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`
    .trim()
    .split("\n");
let overlapCount1 = 0;
let overlapCount2 = 0;
for (const i of input) {
    const a = i.split(",");
    const j = a[0].split("-");
    const k = a[1].split("-");

    if (
        (+j[0] <= +k[0] && +j[1] >= +k[1]) ||
        (+j[0] >= +k[0] && +j[1] <= +k[1])
    ) {
        overlapCount1++;
    }

    if (+j[0] <= +k[1] && +k[0] <= +j[1]) {
        overlapCount2++;
    }
}

console.log(`Pt 1: ${overlapCount1} \nPt 2: ${overlapCount2}`);
