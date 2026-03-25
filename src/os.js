const os = require('os');

function systemInformation() {
    console.log(`Sistema operativo: ${os.type()}`);
    console.log(`Plataforma:        ${os.platform()}`);
    console.log(`Release:           ${os.release()}`);
    console.log(`Versión:           ${os.version()}`);
    console.log(`Tiempo encendido : ${os.uptime()} seconds`);
    console.log(`Tipo de máquina  : ${os.machine()}`);
    console.log('cpus             : ');
    console.table(os.cpus(),['model', 'speed']);    
    console.log(`Memoria Total    : ${os.totalmem()/1024} kB`);
    console.log(`Memoria libre    : ${os.freemem()/1024}  kB`);
    console.log(`Hostname         : ${os.hostname()}`);
    let networkInterfaces = os.networkInterfaces();
    console.log('network interfaces:');
    console.table(networkInterfaces);
    console.log('network interface lo:');
    console.table(networkInterfaces['lo'][0]);
    console.log('network interface eth0:');
    console.table(networkInterfaces['eth0'][0]);
}

systemInformation();