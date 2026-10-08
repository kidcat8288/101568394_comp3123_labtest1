const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let i = 0; i < 10; i++) {
  const fileName = 'log' + i + '.txt';
  fs.writeFileSync(fileName, 'This is log file number ' + i);
  console.log(fileName);
}
