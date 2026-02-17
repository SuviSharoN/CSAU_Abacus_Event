const fs = require('fs');
const path = require('path');

// Target directory: Parent folder (blackout_2)
const directoryPath = path.join(__dirname, '..');

console.log(`Scanning project root: ${directoryPath}`);
console.log('========================================');

function scanRecursive(dir, indent = '') {
    try {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        
        items.forEach((item, index) => {
            // Skip heavy folders
            if (item.name === 'node_modules' || item.name === '.git') return;

            const isLast = index === items.length - 1;
            const prefix = isLast ? '└── ' : '├── ';
            
            console.log(`${indent}${prefix}${item.name}`);

            if (item.isDirectory()) {
                const newIndent = indent + (isLast ? '    ' : '│   ');
                scanRecursive(path.join(dir, item.name), newIndent);
            }
        });
    } catch (err) {
        console.error(`Error accessing ${dir}:`, err.message);
    }
}

scanRecursive(directoryPath);
