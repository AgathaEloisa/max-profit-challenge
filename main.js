//array que ingresa el usuario desde la terminal
let stockArr = process.argv[2];

const maxProfit = (arr) => {
    //inicializo variable que tomará el resultado final.
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        //Itero el arreglo una segunda vez, para poder hacer la comparación de los valores.
        for (let n = 1; n < arr.length; n++) {
            if ((arr[n] - arr[i]) > result) {
                result = arr[n] - arr[i];
            } else if (result == 0) {
                result = -1;
            }
        }
    }
    return result;
}

console.log(maxProfit(stockArr));