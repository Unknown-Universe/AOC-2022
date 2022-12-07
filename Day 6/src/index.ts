const input = `
mjqjpqmgbljsphdztnvjfqwrcgsmlb
`
    .trim()
    .split("");

const indexes1: number[] = [];
const indexes2: number[] = [];

for (let i = 4; i < input.length; i++) {
    const a = input.slice(i - 4, i);
    let f = true;
    for (const j of a) {
        if (a.filter((i) => i == j).length >= 2) {
            f = false;
        }
    }
    if (f) {
        indexes1.push(i + 1);
    }
}

for (let i = 14; i < input.length; i++) {
    const a = input.slice(i - 14, i);
    let f = true;
    for (const j of a) {
        if (a.filter((i) => i == j).length >= 2) {
            f = false;
        }
    }
    if (f) {
        indexes2.push(i);
    }
}

console.log(indexes1[0], indexes2[0]);
