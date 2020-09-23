let computerImage = document.createElement('img');
let userImage = document.createElement('img');
let user = document.getElementById('user');
let computer = document.getElementById('COMPUTER');
const imageList = document.getElementsByClassName('selectimg');
const landingPage = document.getElementById('landingpage');
const gamePage = document.getElementById('gamepage');
const images = document.getElementById('images');
let userScore = 0;
let computerScore = 0;

let imageArray = ["/hand-rock.png", "/hand-paper-200.png", "/hand-scissors.png"];

let imageObject = [
    {
        imgSrc : "/hand-rock.png",
        imgTitle : "Rock"
    },
    {
        imgSrc : "/hand-paper-200.png",
        imgTitle : "Paper"
    },
    {
        imgSrc : "/hand-scissors.png",
        imgTitle : "Scissor"
    }
]

function getImage(image) {
    landingPage.classList.add('nextpage');
    gamePage.classList.add('show');
    images.classList.add('images-next-page');
    [...imageList].forEach(element => {
        element.classList.add('img-next-page')
    });
    displayUserImage(image);
    displayComputerImage();
    compareImage();
}

function displayUserImage(image){
    userImage.src = image.src;
    userImage.title = image.title;
    userImage.classList.add('userimage');
    user.appendChild(userImage);
}

function displayComputerImage() {
    let randomNumber = Math.floor(Math.random()*3);
    computerImage.src = imageObject[randomNumber].imgSrc;
    computerImage.title = imageObject[randomNumber].imgTitle;
    computerImage.classList.add('computerImage')
    computer.appendChild(computerImage);
}

function compareImage() {
    let score = document.getElementById('score');
    if(userImage.title === computerImage.title){
        userScore += 1;
        computerScore += 1;
    } else if ((userImage.title === 'Rock' && computerImage.title === 'Paper') || (userImage.title === 'Paper' && computerImage.title === 'Scissor') || (userImage.title === 'Scissor' && computerImage.title === 'Rock')) {
        computerScore += 1;
    } else {
        userScore += 1;
    }
    score.textContent = `${userScore} - ${computerScore}`
}



[...imageList].forEach(image => {
    image.addEventListener('click', () => {
        getImage(image);
    })
})