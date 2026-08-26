const fs = require('fs');

const logs = fs.readFileSync('../logs/security-monitor-access.log', 'utf8');
console.log(logs);
