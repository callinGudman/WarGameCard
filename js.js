
const btn = document.querySelector('.btnDraw');

const btn3 = document.querySelector('.test3');
let pl1 = [];
let pl2 = [];
let arr3=[];
let arr4=[];
let arr5=[];
let arr6=[];
let arr7=[];
let arr8 = [];
let count1;
let count2 ;
let cards1 = document.querySelector('.cards1 img');
let cards2 = document.querySelector('.cards2 img');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let first2 = document.querySelector('.first2');
let second2 = document.querySelector('.second2');
let third2 = document.querySelector('.third2');
let draw = document.querySelector('.draw');
let extraDraw = document.querySelector('.extraDraw');
let counts = document.querySelector('.count');
let extra = document.querySelector('.extra');
let extra2 = document.querySelector('.extra2');
let active = false;
draw.classList.add('hidden');
extraDraw.classList.add('hidden');




while(pl2.length < 13){
    let r = Math.floor(Math.random() * 13) + 2;
    if(pl2.indexOf(r) === -1) pl2.push(r);
}
while(arr3.length < 13){
    let r = Math.floor(Math.random() * 13) + 2;
    if(arr3.indexOf(r) === -1) arr3.push(r);
}
while(arr5.length < 13){
    let r = Math.floor(Math.random() * 13) + 2;
    if(arr5.indexOf(r) === -1) arr5.push(r);
}
while(arr7.length < 13){
    let r = Math.floor(Math.random() * 13) + 2;
    if(arr7.indexOf(r) === -1) arr7.push(r);
}
arr4 = arr3.splice(0, arr3.indexOf(arr3[6]));
arr6 = arr5.splice(0, arr5.indexOf(arr5[5]));
arr8 = arr7.splice(0, arr7.indexOf(arr7[6]));
pl1 = pl2.splice(0, pl2.indexOf(pl2[4]));
pl1 = pl1.concat(arr3).concat(arr5).concat(arr7);
pl2 = pl2.concat(arr4).concat(arr6).concat(arr8);






function myFunction() {
    cards1.src = `images/${pl1[0]}.png`;
    cards2.src = `images/${pl2[0]}.png`;
    draw.classList.add('hidden');
    extraDraw.classList.add('hidden');
    active=true;


}
function myFunctionDraw() {
    cards1.src = `images/${pl1[0]}.png`
    active=true;
}
function myFunctionDraw2() {
    cards2.src = `images/${pl2[0]}.png`
    active=true;
}
function myFunction3() {
    if (active) {


    if (pl1[0] > pl2[0]) {
        pl1.push(pl2[0]);
        pl2.shift();
        pl1.push(pl1.shift());
        document.querySelector('.cards2 img').src = "images/back.png";
        document.querySelector('.cards1 img').src = "images/back.png";

    } else if (pl1[0] < pl2[0]) {
        pl2.push(pl1[0]);
        pl1.shift()
        pl2.push(pl2.shift());
        document.querySelector('.cards2 img').src = "images/back.png"
        document.querySelector('.cards1 img').src = "images/back.png";

    }
    if (pl1[0] === pl2[0] && pl1.length <= 3 && pl2.length > 1) {
        draw.classList.add('hidden');
        counts.classList.add('hidden');
        document.querySelector('.message').textContent = 'Player two wins';
        myFunction()
        document.querySelector('body').style.backgroundColor = '#60b347';
        cards1.classList.add('hidden');
        btn.classList.add('hidden');
        btn3.classList.add('hidden');

    }
    if (pl1[0] === pl2[0] && pl1.length > 1 && pl2.length <= 3) {
        draw.classList.add('hidden');
        counts.classList.add('hidden');
        document.querySelector('.message').textContent = 'Player one wins';
        myFunction();
        document.querySelector('body').style.backgroundColor = '#60b347';
        cards2.classList.add('hidden');
        btn.classList.add('hidden');
        btn3.classList.add('hidden');

    }
    if (pl1[0] === pl2[0] && pl1.length > 3 && pl2.length > 3) {
        draw.classList.remove('hidden');
        first.src = `images/${pl1[1]}.png`;
        second.src = `images/${pl1[2]}.png`;
        third.src = `images/${pl1[3]}.png`;
        first2.src = `images/${pl2[1]}.png`;
        second2.src = `images/${pl2[2]}.png`;
        third2.src = `images/${pl2[3]}.png`;
        myFunctionDraw();
        myFunctionDraw2();


        if (pl1[3] > pl2[3]) {
            draw.classList.remove('hidden');
            first.src = `images/${pl1[1]}.png`;
            second.src = `images/${pl1[2]}.png`;
            third.src = `images/${pl1[3]}.png`;
            first2.src = `images/${pl2[1]}.png`;
            second2.src = `images/${pl2[2]}.png`;
            third2.src = `images/${pl2[3]}.png`;
            pl1.push(pl2[0]);
            pl1.push(pl2[1]);
            pl1.push(pl2[2]);
            pl1.push(pl2[3]);
            pl2.shift();
            pl2.shift();
            pl2.shift();
            pl2.shift();
            pl1.push(pl1.shift());
            pl1.push(pl1.shift());
            pl1.push(pl1.shift());
            pl1.push(pl1.shift());

        } else if (pl1[3] < pl2[3]) {
            draw.classList.remove('hidden');
            first.src = `images/${pl1[1]}.png`;
            second.src = `images/${pl1[2]}.png`;
            third.src = `images/${pl1[3]}.png`;
            first2.src = `images/${pl2[1]}.png`;
            second2.src = `images/${pl2[2]}.png`;
            third2.src = `images/${pl2[3]}.png`;
            pl2.push(pl1[0]);
            pl2.push(pl1[1]);
            pl2.push(pl1[2]);
            pl2.push(pl1[3]);
            pl1.shift();
            pl1.shift();
            pl1.shift();
            pl1.shift();
            pl2.push(pl2.shift());
            pl2.push(pl2.shift());
            pl2.push(pl2.shift());
            pl2.push(pl2.shift());


        } else if (pl1[3] === pl2[3]) {
            if (pl1[6] > pl2[6]) {
                draw.classList.remove('hidden');
                extraDraw.classList.remove('hidden');
                first.src = `images/${pl1[1]}.png`;
                second.src = `images/${pl1[2]}.png`;
                third.src = `images/${pl1[3]}.png`;
                first2.src = `images/${pl2[1]}.png`;
                second2.src = `images/${pl2[2]}.png`;
                third2.src = `images/${pl2[3]}.png`;
                extra.src = `images/${pl1[6]}.png`;
                extra2.src = `images/${pl2[6]}.png`;
                pl1.push(pl2[0]);
                pl1.push(pl2[1]);
                pl1.push(pl2[2]);
                pl1.push(pl2[3]);
                pl2.shift();
                pl2.shift();
                pl2.shift();
                pl2.shift();
                pl1.push(pl1.shift());
                pl1.push(pl1.shift());
                pl1.push(pl1.shift());
                pl1.push(pl1.shift());

            }
            if (pl1[6] < pl2[6]) {
                draw.classList.remove('hidden');
                extraDraw.classList.remove('hidden');
                first.src = `images/${pl1[1]}.png`;
                second.src = `images/${pl1[2]}.png`;
                third.src = `images/${pl1[3]}.png`;
                first2.src = `images/${pl2[1]}.png`;
                second2.src = `images/${pl2[2]}.png`;
                third2.src = `images/${pl2[3]}.png`;
                extra.src = `images/${pl1[6]}.png`;
                extra2.src = `images/${pl2[6]}.png`;
                pl2.push(pl1[0]);
                pl2.push(pl1[1]);
                pl2.push(pl1[2]);
                pl2.push(pl1[3]);
                pl1.shift();
                pl1.shift();
                pl1.shift();
                pl1.shift();
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl1.push(pl1.shift());

            }
            if (pl1[6] === pl2[6]) {
                extraDraw.classList.remove('hidden');
                extra.src = `images/${pl1[6]}.png`;
                extra2.src = `images/${pl2[6]}.png`;
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl1.push(pl1.shift());
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl2.push(pl2.shift());
                pl1.push(pl1.shift());
            }
            if (pl1[6] == null) {
                document.querySelector('.message').textContent = 'Player two wins';
                document.querySelector('body').style.backgroundColor = '#60b347';
                cards1.classList.add('hidden');
                btn.classList.add('hidden');
                btn3.classList.add('hidden');
                counts.classList.add('hidden');
                myFunction();
            }
            if (pl2[6] == null) {
                document.querySelector('.message').textContent = 'Player one wins';
                document.querySelector('body').style.backgroundColor = '#60b347';
                cards2.classList.add('hidden');
                btn.classList.add('hidden');
                btn3.classList.add('hidden');
                counts.classList.add('hidden');
                myFunction()
            }
        }
    }
    if (pl1.length < 1) {
        document.querySelector('.message').textContent = 'Player two wins';
        document.querySelector('body').style.backgroundColor = '#60b347';
        cards1.classList.add('hidden');
        btn.classList.add('hidden');
        btn3.classList.add('hidden');
        counts.classList.add('hidden');
        myFunction()
    } else if (pl2.length < 1) {
        document.querySelector('.message').textContent = 'Player one wins'
        document.querySelector('body').style.backgroundColor = '#60b347';
        cards2.classList.add('hidden');
        btn.classList.add('hidden');
        btn3.classList.add('hidden');
        counts.classList.add('hidden');
        myFunction()
    }
    count1 = pl1.length;
    count2 = pl2.length;
    document.querySelector('.message1').textContent = count1;
    document.querySelector('.message2').textContent = count2;
    active =false;
}
}


btn.addEventListener('click',myFunction);
btn3.addEventListener('click',myFunction3);


document.addEventListener('keydown',function (e){
    if(e.key==='d'){
        myFunction()
    }
    else if(e.key === 'c'){
        myFunction3()
    }
})
