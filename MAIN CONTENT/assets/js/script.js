let featurebtn = document.querySelector('.feature-button');
let featurebtn1 = document.querySelector('.feature-button1');
let featurebtn2 = document.querySelector('.feature-button2');
let featurebtn3 = document.querySelector('.feature-button3');
let featurebtn4 = document.querySelector('.feature-button4');
let featurebtn5 = document.querySelector('.feature-button5');
let heading = document.querySelector('.content-heading');
let paragraph = document.querySelector('.content-para');
let actionbutton = document.querySelector('.action-button1');

featurebtn.addEventListener('click', () => {
    heading.innerText = 'Not just Free, but CC0 too!';
    paragraph.innerText = 'All assets on Schwarz are 100% CC0,\nmeaning they can be used without any restrictions.'
    actionbutton.innerText = 'Learn More';
});

featurebtn1.addEventListener('click', () => {
    heading.innerText = 'Want to be a Creator? We got you!';
    paragraph.innerText = 'Upload your own assets to Schwarz and\n kickstart your career for free!'
    actionbutton.innerText = 'Show me how!';
});

featurebtn2.addEventListener('click', () => {
    heading.innerText = 'Teams for Collaborations';
    paragraph.innerText = 'Form teams and take your collaborations to the next level.'
    actionbutton.innerText = 'Take me there!';
});

featurebtn3.addEventListener('click', () => {
    heading.innerText = 'Forums to help you out';
    paragraph.innerText = 'Ask questions on Forums and get \ninstant answers to solve your problems.'
    actionbutton.innerText = "That's Awesome!";
});

featurebtn4.addEventListener('click', () => {
    heading.innerText = 'Exclusive rewards for Creators!';
    paragraph.innerText = 'Get rewarded with badges and medals for\n your Creator achievements!'
    actionbutton.innerText = "Let's Go!";
});

featurebtn5.addEventListener('click', () => {
    heading.innerText = 'Get featured on Schwarz!';
    paragraph.innerText = 'Share your artwork and get featured on Schwarz as\n well as all of our social media handles!'
    actionbutton.innerText = 'Cool!';
});
