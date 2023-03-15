// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *

const drawStar = (num) =>{
    for(let i =0;i<num;i++){
        let starArray = []
        for(let j=0;j<=i;j++){
            starArray.push('*')
        }
        console.log(starArray.join(' '));
    }
}

drawStar(5);
//หลักการทำงานคือ ทุกๆครั้งที่เริ่มวน i ให้ทำการรีเซตให้เป็น array ว่าง หรือเป็น0ทุกครั้ง
//แล้วค่อยไปเพิ่มดอกจันทร์ในตอนวนลูป j เอา 
//โดยที่ array scope มันกว้าง มันเลยโดดออกไปได้
//j<=i หมายถึงให้ทำรอบแรกสุดด้วย array จะได้มีดอกจันทร์ ตั้งแต่รอบแรก(รอบที่ 0)

// const n = 5
// let stars = "";
// for (let i = 0; i < n; i++) {
//     stars = "";
//     for (let j=0; j<=i; j++) {
//         stars = "*" + stars;
//     }
//     console.log(stars);
//     }


// const n = 5
// let stars = "";
// for (let i = 0; i < n; i++) {
//     stars = "";
//     for (let j = i; j < n; j++) {
//         stars = "*" + stars;
//     }
//     console.log(stars);
//     }
// TreeFlip;


