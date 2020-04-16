const { exec } = require('child_process');
const fs = require('fs');
var path = require('path');



console.log('Dir Name: ', __dirname);
console.log('Main Module: ', process.cwd());

exec('npx prettier -v', (error, stdout, stderr) => {
    if (error) {
        console.log('Error Running NPX: ', error.message);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
});

try {
    // let rawdata = fs.readFileSync(__dirname + '/packages.json');
    // console.log('Raw Data: ', rawdata);
    // console.log('Parsed Data: ', JSON.parse(rawdata));
} catch (error) {
    console.log('Error Reading File: ', error);
}


try {
    // let data = JSON.stringify({}, null, 2);
    // fs.writeFileSync('package.json', data);
} catch (error) {
    console.log('Error Writing File: ', error);
}

// exec('bit init', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`stdout: ${stdout}`);
// });
