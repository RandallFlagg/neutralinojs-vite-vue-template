"use strict";
// import fs from 'fs';

let getUsername = async () => {
    const key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    let value = '';
    try {
        value = await Neutralino.os.getEnv(key);
    }
    catch (err) {
        console.error(err);
    }
    document.getElementById('name').innerText = `Hello ${value}`;
    const selectedPath = "D:/Ohad/Projects/WinDirStat/TEST";
    // const selectedPath = "D:/Ohad/Projects/WinDirStat/TEST/";
    // const selectedPath = await Neutralino.os.showFolderDialog("Select A Folder");
    // let entries = await Neutralino.filesystem.readDirectory(selectedPath);
    // this.fileTree = entries
    //     .filter((item) => (item.entry != "." && item.entry != "..")) // remove . and ...
    //     .sort((a, b) => (b.type.length - a.type.length)); // display directories first

    // const files1 = await readAllFilesRecursively(selectedPath);
    const files2 = await readAllFiles(selectedPath);

    // console.log(files);

    // for (const file of files) {
    //     if (file.endsWith('.txt')) {
    //       const contents = await fs.promises.readFile(file, 'utf8');

    //       console.log(contents);
    //     }
    //   }
    const x = 5;
};

async function readAllFiles(dir) {
    const items = await Neutralino.filesystem.readDirectory(dir);
    for (let item of items) {
        if (item.type === "DIRECTORY") {
            if(item.entry != "." && item.entry != ".."){
                await readAllFiles(dir + "/" + item.entry);
            }
        } else {
            // let content = await Neutralino.filesystem.readFile(dir + "/" + item.entry);
            // console.log(content);
            const stats = await Neutralino.filesystem.getStats(dir + "/" + item.entry);
            console.log(stats);
        }
    }
}

const readAllFilesRecursively = async (dirPath) => {
    const files = [];
    const directories = await fs.promises.readdir(dirPath);

    for (const directory of directories) {
        const path = `${dirPath}/${directory}`;
        const stats = await fs.promises.stat(path);

        if (stats.isDirectory()) {
            files.push(...await readAllFilesRecursively(path));
        } else {
            files.push(path);
        }
    }

    return files;
};

Neutralino.init();
getUsername();