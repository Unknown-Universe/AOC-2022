const input = `
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`
    .trim()
    .split("\n");

const stacks = [["N", "Z"], ["D", "C", "M"], ["P"], [], [], [], [], [], []]; // Put your starting stacks here

for (const command of input) {
    const j = command.split(" ");
    const a = +j[1];
    const b = +j[3] - 1;
    const c = +j[5] - 1;

    stacks[b]
        .splice(0, a)
        .reverse() //Remove this reverse() call to do part 1
        .map((i) => {
            stacks[c].unshift(i);
        });
}
let output = "";
for (const i of stacks) {
    output = output + i[0];
}

console.log(output);
