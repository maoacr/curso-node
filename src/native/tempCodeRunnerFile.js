console.log({
    process_id: process.pid,
    current_directory: process.cwd(),
    node_version: process.version,
    platform: process.platform,
    arch: process.arch,
    time: process.uptime(),
    memory: process.memoryUsage()
});

process.on('beforeExit', (code) => {
 console.log('Process beforeExit event with code:', code);
});

process.on('exit', (code) => {
 console.log('Process exit event with code:', code);
});

process.on('SIGINT', () => {
 console.log('Señal de interrupcion recibida generalmente un (ctrl-c)'); process.exit(0);
});

process.stdin.on('data', (data) => {
 const input = data.toString().trim().toLowerCase(); 
if (input === 'salir') {
    console.log('Comando de salida recibido');     
    process.exit(0); 
} else {
    console.log(`Mensaje: ${input}`);
    console.log('Escribe "salir" para terminar');
}
});


console.log('Este mensaje fue escrito despues de los eventos proccess.on pero es mostrado antes en el console.log');

console.log('Escribe algo, interrumpes con ctrl+c, escribes "salir" para terminar');