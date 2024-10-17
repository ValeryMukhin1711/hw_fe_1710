// Задание 1)Написать цикл, который выводит 10 квадратов друг в друге.


const canvas = document.querySelector('#canvas');
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d');


for (let i=0; i<11; i++) {
    ctx.beginPath();
    ctx.moveTo(100 + 5*i, 100 +5*i);
    ctx.lineTo(400 -5*i, 100+5*i);
    ctx.lineTo(400 -5*i, 400-5*i); 
    ctx.lineTo(100 +5*i, 400 -5*i);
    ctx.closePath();
    ctx.fillStyle = `rgb(0, 240, ${i*25})`;
    ctx.fill();
    ctx.stroke();
}

// Задание 1)Написать цикл, который выводит 10 квадратов друг в друге.
// Задание 2)[
//     {
//         title: 'javascript',
//         amount: 150000
//     },
//     {
//         title: 'python',
//         amount: 140000
//     },
//     {
//         title: 'golang',
//         amount: 130000
//     },
//     {
//         title: 'java',
//         amount: 120000
//     }
// ];


// на основе данного массива создать гистограмму.Обязательно писать название рядом с каждым.


const canvas_2 = document.querySelector('#canvas_2');
canvas_2.width = 500;
canvas_2.height = 500;

const ctx_2 = canvas_2.getContext('2d');

const arr = [
        {
            title: 'javascript',
            amount: 150000
        },
        {
            title: 'python',
            amount: 140000
        },
        {
            title: 'golang',
            amount: 130000
        },
        {
            title: 'java',
            amount: 120000
        }
    ];


for (let i=0; i < arr.length; i++) {
    console.log(i);
    


ctx_2.beginPath();
ctx_2.moveTo(50 + i*100, 500);
ctx_2.lineTo(50 + i*100, (arr[i].amount / 1000) );
ctx_2.lineTo(90 + i*100, (arr[i].amount / 1000));
ctx_2.lineTo(90 + i*100, 500);
ctx_2.closePath();

// if(arr[i] == 0) {
ctx_2.fillStyle = 'green';
ctx_2.fillText(arr[i].title, 50+ i*100, 50);
// }



    
ctx_2.fill();
ctx_2.stroke();
}
