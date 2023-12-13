// const myMath = {
//     PI: 3.14159,
//     square: function(num) {
//        return num * num;
//     },
//     cube: function(num) {
//         return num ** 3;
//     }
// }

const myMath = {
    PI: 3.14159,
    square(num) {
       return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const square = {
    area(side){
        return side*side;
    },
    perimeter(side){
        return side* 4;
    }

}