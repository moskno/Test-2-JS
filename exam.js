
// mission 1

const array = [1,2,3,4,5,6,7,8,9,10];

function Mission1(){
    const evenNumbers = array.filter(array => array % 2 === 0);
    return evenNumbers
}

const evenNumbers = Mission1();

// mission 2

const string = 'Hello world, My teachers are - Ohad & Elad in the Galil class';

function Mission2(str){
    const words =  str.split(' ').filter(word => word.length === 4);
    return words.length;
}

// mission 3

twoDimensional = [[1,2,3],[4,5,6],[7,8,9]]

function Mission3(){
    const oneDimensional = twoDimensional.flat();
    return oneDimensional;
}

// mission 5

const arrayKeys = ["name", "age", "city"];
const arrayValues =  ["Moshe", 22, "Beit Shemesh"];

function Mission5 (){
    const result = {};

    for (let i = 0; i < arrayKeys.length; i++){
        result[arrayKeys[i]] = arrayValues[i];
    }
    return result;
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5
}


    