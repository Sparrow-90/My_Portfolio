import speech from '../img/speech.png';
import romanImg from '../img/roman-city-builder.png'
import decisionMaker from '../img/decision-maker.png'
import hieroglyph from '../img/hieroglyph.png'
import slavic from '../img/slavic.png'
import pizza from '../img/pizza.png'
import alien from '../img/alien.png'

export const projectList = [
    {
        name: "Roman City Builder",
        image: romanImg,
        skill: 'HTML, CSS, JS',
        description: 'Using my interest in ancient Rome, I created a simple interactive webpage where users can not only complete a city by adding missing buildings but also learn about the types of buildings and their purposes. While building the page, I wanted to explore how the drag and drop mechanism works in JavaScript. It was also a great opportunity to practice flexbox.',
        codeLink: 'https://github.com/Sparrow-90/roman-city-builder',
        playLink: 'https://sparrow-90.github.io/roman-city-builder/',
        
    },
    {
        name: 'Decision maker deluxe',
        image: decisionMaker,
        skill: 'HTML, CSS, JS, GSAP',
        description: `Being influenced by Star Wars since childhood, my dream was to build my own robot. This one may only exist in the browser, but thanks to JavaScript, I was able to give it some functionalities. I decided to create a robot that would make decision-making easier for us.
        It is an application that utilizes the mechanism of randomly selecting elements from an array. It was an opportunity not only to practice array methods in JavaScript but also to play around with the capabilities of Timeline max and animations on SVG.`,
        codeLink: 'https://github.com/Sparrow-90/Decision-Maker-V1',
        playLink: 'https://sparrow-90.github.io/Decision-Maker-V1/',
    },
    {
        name: 'Rosetta Stone',
        image: hieroglyph,
        skill: 'HTML, CSS, JS',
        description: 'Another application directly related to my interests in ancient history. This app is based on a simplified hieroglyphic alphabet that I found in a book about egyptian history. I decided to build a simple converter that will transform Latin letters into hieroglyphs.',
        codeLink: 'https://github.com/Sparrow-90/Rosetta-Stone',
        playLink: 'https://sparrow-90.github.io/Rosetta-Stone/',
    },
    {
        name: 'Slavic Profet',
        image: slavic,
        skill: 'HTML, CSS, JS',
        description: 'TIn this application, we rely on fate/oracle to reveal a name for our offspring. I decided to wrap the mechanism of randomly selecting an element from an array in JavaScript in a Slavic atmosphere.',
        codeLink: 'https://github.com/Sparrow-90/slavic-profet',
        playLink: 'https://sparrow-90.github.io/slavic-profet/'
    },
    {
        name: 'Pizza website',
        image: pizza,
        skill: 'HTML, CSS, JS, REACT',
        description: 'This is a website for an imaginary pizzeria created by me. It is my first application built in React. Constructing it helped me learn the basics such as creating components, routes, and using useState.',
        codeLink: 'https://github.com/Sparrow-90/italian-pizza',
        playLink: 'https://sparrow-90.github.io/italian-pizza/',
    },
    {
        name: 'PRL speech creator',
        image: speech,
        skill: 'HTML, CSS, JS',
        description: "The inspiration for creating this application was the amusing pattern of creating nonsensical speeches from the times of the Polish People's Republic (PRL). I decided to build a mechanism that randomly selects sentences stored in arrays and combines them to create a funny and nonsensical speech.",
        codeLink: 'https://github.com/Sparrow-90/PRL-speech-creator',
        playLink: 'https://sparrow-90.github.io/PRL-speech-creator/',
    },
    {
        name: 'Alien Hunter',
        image: alien,
        skill: 'HTML, CSS, JS',
        description: 'This game is inspired by a classic like Space Invaders. The starting point for creating this game was a tutorial I accidentally found on Youtube. I expanded the game by adding graphics and sound effects found on the internet, giving it a nostalgic atmosphere from the 80s and 90s.',
        codeLink: 'https://github.com/Sparrow-90/alien-hunter-js',
        playLink: 'https://sparrow-90.github.io/alien-hunter-js/',
    },
]