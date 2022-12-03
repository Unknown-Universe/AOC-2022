const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`
    .trim()
    .split("\n");

const t: string[] = [];

for (let i = 0; i < input.length; i += 3) {
    const a = input[i];
    const b = input[i + 1];
    const c = input[i + 2];
    const ab: string[] = [];
    const bc: string[] = [];

    for (const ch of a) {
        if (b.includes(ch)) ab.push(ch);
    }
    for (const ch of b) {
        if (c.includes(ch)) bc.push(ch);
    }

    for (const i of ab) {
        if (bc.includes(i)) {
            t.push(i);
            break;
        }
    }
}
let total = 0;
for (const i of t) {
    total += `_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(i);
}
console.log(total);
