// (function () {
//     if (fieldname10) {
//         if (fieldname10 === 5000) {
//             return fieldname10 * 8;
//         }
//         if (fieldname10 === 100) {
//             return fieldname10 * 25;
//         }
//         if (fieldname10 === 300) {
//             return fieldname10 * 25;
//         }
//         if (fieldname10 === 500) {
//             return fieldname10 * 20;
//         }
//         if (fieldname10 === 1000) {
//             return fieldname10 * 18;
//         }
//     }
//     if(fieldname12) {
//         if (fieldname12 === 5000) {
//             return fieldname12 * 11;
//         }
//         if (fieldname12 === 1000) {
//             return fieldname12 * 20;
//         }
//         if (fieldname12 === 500) {
//             return fieldname12 * 25;
//         }
//         if (fieldname12 === 300) {
//             return fieldname12 * 30;
//         }
//         if (fieldname12 === 100) {
//             return fieldname12 * 30;
//         }
//     }
//     if(fieldname13) {
//         if (fieldname13 === 5000) {
//             return fieldname13 * 13;
//         }
//         if (fieldname13 === 1000) {
//             return fieldname13 * 40;
//         }
//         if (fieldname13 === 500) {
//             return fieldname13 * 45;
//         }
//         if (fieldname13 === 300) {
//             return fieldname13 * 55;
//         }
//         if (fieldname13 === 100) {
//             return fieldname13 * 55;
//         }
//     }
//     if(fieldname14) {
//         if (fieldname14 === 5000) {
//             return fieldname14 * 18;
//         }
//         if (fieldname14 === 1000) {
//             return fieldname14 * 48;
//         }
//         if (fieldname14 === 500) {
//             return fieldname14 * 50;
//         }
//         if (fieldname14 === 300) {
//             return fieldname14 * 60;
//         }
//         if (fieldname14 === 100) {
//             return fieldname14 * 60;
//         }
//     }
//     if(fieldname19) {
//         if (fieldname19 === 5000) {
//             return fieldname19 * 110;
//         }
//         if (fieldname19 === 1000) {
//             return fieldname19 * 125;
//         }
//         if (fieldname19 === 500) {
//             return fieldname19 * 135;
//         }
//         if (fieldname19 === 300) {
//             return fieldname19 * 150;
//         }
//         if (fieldname19 === 100) {
//             return fieldname19 * 150;
//         }
//     }
//     if(fieldname20) {
//         if (fieldname20 === 5000) {
//             return fieldname20 * 140;
//         }
//         if (fieldname20 === 1000) {
//             return fieldname20 * 155;
//         }
//         if (fieldname20 === 500) {
//             return fieldname20 * 165;
//         }
//         if (fieldname20 === 300) {
//             return fieldname20 * 180;
//         }
//         if (fieldname20 === 100) {
//             return fieldname20 * 180;
//         }
//     }
//     if(fieldname21) {
//         if (fieldname21 === 5000) {
//             return fieldname21 * 175;
//         }
//         if (fieldname21 === 1000) {
//             return fieldname21 * 185;
//         }
//         if (fieldname21 === 500) {
//             return fieldname21 * 195;
//         }
//         if (fieldname21 === 300) {
//             return fieldname21 * 210;
//         }
//         if (fieldname21 === 100) {
//             return fieldname21 * 210;
//         }
//     }
//     if(fieldname22) {
//         if (fieldname22 === 5000) {
//             return fieldname22 * 200;
//         }
//         if (fieldname22 === 1000) {
//             return fieldname22 * 215;
//         }
//         if (fieldname22 === 500) {
//             return fieldname22 * 225;
//         }
//         if (fieldname22 === 300) {
//             return fieldname22 * 240;
//         }
//         if (fieldname22 === 100) {
//             return fieldname22 * 240;
//         }
//     }
// })();
//
// function bad() {
//     throw new Error('bad');
// }
//
// function bad2() {
//     return new Promise(() => { throw new Error('bad2'); });
// }
//
// async function test() {
//     try {
//         await bad();
//     } catch (error) {
//         console.log('caught', error.message);
//     }
//
//     try {
//         await bad2();
//     } catch (error) {
//         console.log('caught', error.message);
//     }
// }
//
// test();