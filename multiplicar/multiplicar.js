const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log('La base y el límite deben ser datos numericos');
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('La base y el límite deben ser datos numericos');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                return reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}