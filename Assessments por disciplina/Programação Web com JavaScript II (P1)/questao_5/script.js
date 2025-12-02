let tuplas = [ [3, 7], [5, 2], [8, 4], [1, 9], [6, 3] ];

let acum = 0;
for(let tupla of tuplas){
    console.log(tupla);
    acum += tupla[0] + tupla[1];
}

console.log(acum);