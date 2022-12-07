import * as fs from "fs";

const input = fs.readFileSync("src/input.txt", "utf-8").trim().split("\n");

// const input = `
// $ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k
// `
//     .trim()
//     .split("\n");
class file {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class dir {
    name: string;
    directories: dir[];
    files: file[];
    parent?: dir;

    constructor(dirs: dir[], files: file[], name: string, parent?: dir) {
        this.directories = dirs;
        this.files = files;
        this.name = name;
        this.parent = parent;
    }

    getAllDir(): dir[] {
        let dirs: dir[] = [];
        for (const dir of this.directories) {
            dirs = dirs.concat(dir.getAllDir());
        }
        return dirs.concat(this.directories);
    }

    getDir(name: string) {
        return this.directories.filter((a) => a.name == name)[0];
    }

    addFile(file: file) {
        this.files.push(file);
    }

    addDir(dir: dir) {
        this.directories.push(dir);
        dir.parent = this;
    }
    size(): number {
        let sum = 0;

        for (const dir of this.directories) {
            sum += dir.size();
        }
        for (const file of this.files) {
            sum += file.size;
        }
        return sum;
    }
}

const rootDir = new dir([], [], "/");
let currentDir: dir = rootDir;
for (let line of input) {
    const a = line.split(" ");
    if (a[0] == "$") {
        if (a[1] == "ls") {
            continue;
        } else if (a[1] == "cd") {
            const command = a[2];
            if (command == "..") {
                currentDir = currentDir.parent!;
            } else if (command == "/") {
                currentDir = rootDir;
            } else {
                currentDir = currentDir.getDir(command);
            }
        }
    } else {
        if (a[0] == "dir") {
            currentDir.addDir(new dir([], [], a[1], currentDir));
        } else {
            currentDir.addFile(new file(a[1], +a[0]));
        }
    }
}

let sum = 0;

const usedSpace = rootDir.size();
const spaceNeeded = 30000000 - (70000000 - usedSpace);
const possibleDirs: dir[] = [];

for (const dir of rootDir.getAllDir()) {
    if (dir.size() <= 100000) {
        sum += dir.size();
    }
    if (dir.size() >= spaceNeeded) {
        possibleDirs.push(dir);
    }
}
console.log(sum);
console.log(possibleDirs.sort((a, b) => a.size() - b.size())[0].size());
