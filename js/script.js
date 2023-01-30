const header = document.querySelector('#header');
const image = document.querySelector('#image');
const question = document.querySelector('#question');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');

btnOne.addEventListener('click', apartment);
btnTwo.addEventListener('click', house);

function apartment() {
    btnOne.removeEventListener('click', apartment);
    btnTwo.removeEventListener('click', house);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_5.jpg?v=1654503897203";
    question.textContent = 'Вы встаёте рано?';

    btnOne.textContent = 'Да, я жаворонок';
    btnOne.addEventListener('click', early);

    btnTwo.textContent = 'Нет, я сова';
    btnTwo.addEventListener('click', late);
}

function early() {
    btnOne.removeEventListener('click', early);
    btnTwo.removeEventListener('click', late);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_6.jpg?v=1654503901162";
    question.textContent = 'Сколько времени вы проводите дома?';

    btnOne.textContent = 'Больше 16 часов';
    btnOne.addEventListener('click', much);

    btnTwo.textContent = 'Ухожу рано и возвращаюсь поздно';
    btnTwo.addEventListener('click', notMuch);
}


function late() {
    btnOne.removeEventListener('click', early);
    btnTwo.removeEventListener('click', late);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_6.jpg?v=1654503901162";
    question.textContent = 'Сколько времени вы проводите дома?';

    btnOne.textContent = 'Больше 16 часов';
    btnOne.addEventListener('click', much);

    btnTwo.textContent = 'Ухожу рано и возвращаюсь поздно';
    btnTwo.addEventListener('click', notMuch);
}

function much() {
    btnOne.removeEventListener('click', much);
    btnTwo.removeEventListener('click', notMuch);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_7.jpg?v=1654503905694";
    question.textContent = 'Любите бывать на природе?';

    btnOne.textContent = 'Да, люблю гулять';
    btnOne.addEventListener('click', nature);

    btnTwo.textContent = 'Редко выбираюсь';
    btnTwo.addEventListener('click', city);
};

function notMuch() {
    btnOne.removeEventListener('click', much);
    btnTwo.removeEventListener('click', notMuch);

    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_2.jpg?v=1654503885590";
    question.textContent = 'Джек-рассел-терьер, вельш-корги, шпиц, бивер и пинчер — это собаки для души и комфортного домашнего содержания.';
    question.classList.add('answer');
    btnOne.textContent = 'В НАЧАЛО';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};



function nature() {
    btnOne.removeEventListener('click', nature);
    btnTwo.removeEventListener('click', city);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_4.jpg?v=1654503893663";
    question.textContent = 'Присмотритесь к фокстерьеру, ретриверу, русской борзой, салюки, уиппету, лайке или кокер-спаниелю. Эти породы подойдут тем, кто любит проводить время в движении и на природе.';
    question.classList.add('answer');    
    btnOne.textContent = 'В НАЧАЛО';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
}



function city() {
    btnOne.removeEventListener('click', nature);
    btnTwo.removeEventListener('click', city);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_2.jpg?v=1654503885590";
    question.textContent = 'Джек-рассел-терьер, вельш-корги, шпиц, бивер и пинчер — это собаки для души и комфортного домашнего содержания.';
    question.classList.add('answer');    
    btnOne.textContent = 'В НАЧАЛО';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
}

function house() {
    btnOne.removeEventListener('click', apartment);
    btnTwo.removeEventListener('click', house);
    
    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_7.jpg?v=1654503905694";
    question.textContent = 'Любите бывать на природе?';
    
    btnOne.textContent = 'Да, люблю гулять';
    btnOne.addEventListener('click', nature);
    
    btnTwo.textContent = 'Редко выбираюсь';
    btnTwo.addEventListener('click', guard);
}

function guard() {
    btnOne.removeEventListener('click', nature);
    btnTwo.removeEventListener('click', guard);    

    image.src="https://cdn.glitch.global/8d3839dd-5de5-4015-bb1f-20faa53cba83/image_3.jpg?v=1654503889747";
    question.textContent = 'Возможно, вам может приглянуться среднеазиатская или немецкая овчарка, тибетский мастифф или американская акита.';
    question.classList.add('answer');
    btnOne.textContent = 'В НАЧАЛО';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
}

function pageReload () {
    document.location.reload();
}

gsap.to("#header", {
    text: "Какая порода собаки Вам подойдет?",
    duration: 2,
    ease: "power1.in"
});


gsap.from("#image", {
    opacity: 0,
    duration: 1,
    delay: 2
});


gsap.from("#question", {
    opacity: 0,
    duration: 1,
    delay: 2
});


gsap.from(".buttons", {
    opacity: 0,
    duration: 1,
    delay: 2
});

gsap.from(".left", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 2.5
});

gsap.from(".right", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 2.5
});
