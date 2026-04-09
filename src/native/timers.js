console.log('Hora actual:', new Date().toLocaleTimeString());

setTimeout(() => {
    console.log('Este mensaje se muestra después de 2 segundos');
}, 2000);

setInterval(() => {
    console.log('Este mensaje se muestra cada 3 segundos');
}, 3000);