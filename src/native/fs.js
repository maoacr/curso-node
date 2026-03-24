const fs = require('fs');

const data = fs.readFileSync('./src/native/example.txt', 'utf-8');
console.log('File content:', data)

// C R U D


//Crear

const fileName = './src/native/fileCreatedWithFs.txt';
fs.writeFileSync(fileName, 'Este es un archivo creado con Node.js');
console.log('Archivo creado exitosamente.');

// Leer
const content = fs.readFileSync(fileName, 'utf-8');
console.log('Contenido del archivo:', content);

// Actualizar
const newContent = '\nEste es el nuevo contenido del archivo.\n';
fs.appendFileSync(fileName, newContent);
console.log('Archivo actualizado exitosamente.');

// Eliminar
fs.unlinkSync(fileName);
console.log('Archivo eliminado exitosamente.'); 