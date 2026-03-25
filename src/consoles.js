console.count('contador');      // 1
console.count('contador');      // 2
console.countReset('contador'); // reset
console.count('contador');      // 1

console.group('grupo principal');
console.log('información uno');

console.group('subgrupo de información');
console.log('información subgrupo uno');
console.groupEnd();

console.log('final del grupo');
console.groupEnd();


console.assert(1 == 1, 'no se muestra');      // no imprime nada
console.assert(1 == 2, 'esto sí se mostrará'); // imprime el mensaje


console.clear();

console.trace('mostrar la pila de llamadas actual');