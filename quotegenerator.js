//=====Project 1 For learning Quote Generator
//variables
let qgbtn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "Life is a rollercoaster",
    person: "Chukwuebuka Ezeocha"
},  {
    quote: "The Standard is The Standard",
    person: "Mike Tomlin"
}, {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
}, {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    person: "Franklin D. Roosevelt"
}, {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    person: "Margaret Mead"
}, {
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    person: "Mark Twain"
}, {
    quote: "There is that great proverb — that until the lions have their own historians, the history of the hunt will always glorify the hunter.",
    person: "Chinua Achebe"
}, {
    quote: "We cannot trample upon the humanity of others without devaluing our own. The Igbo, always practical, put it concretely in their proverb Onye ji onye n'ani ji onwe ya: 'He who will hold another down in the mud must stay in the mud to keep him down.'",
    person: "Chinua Achebe"
}, {
    quote: "The greatest threat to freedom is the absence of criticism.",
    person: "Wole Soyinka"
}, {
    quote:"Originality is the essence of true scholarship. Creativity is the soul of the true scholar.",
    person:"Nnamdi Azikiwe"
}, {
    quote: "We can't say we are special, yet behave like we're ordinary",
    person: "Chukwuebuka Ezeocha"
}, {
    quote:"Treat everyone fair, but don't treat everyone the same",
    person:"Mike Tomlin"
}, {
    quote:"Don't Close your Eyes When it's time to hunt. Don't close your mouth when it time to feast. Don't clench your fist when it's time to recieve",
    person:"Chukwuebuka Ezeocha"
}, {
    quote: "There is also work to do in the evolution of a stable family life and values, and in ensuring that the Nigerian family is built on core values that will form the bedrock of the future society. We must showcase the ideals of family life and be models of family values.",
    person:"Ibrahim Babangida"
}, {
    quote: "Gratitude is here presented as more than a feeling, a virtue, or an experience; gratitude emerges as an attitude we can freely choose in order to create a better life for ourselves and for others. The Nigerian Hausa put it this way: Give thanks for a little and you will find a lot.",
    person: "David Steindl-Rast"
}, {
    quote: "I think I'm ridiculously fortunate. I consider myself a Nigerian - that's home; my sensibility is Nigerian. But I like America, and I like that I can spend time in America.",
    person: "Chimamanda Ngozi Adichie"
}, {
    quote: "The Igbo culture, being receptive to change, individualistic, and highly competitive, gave the Igbo man an unquestioned advantage over his compatriots in securing credentials for advancement in Nigerian colonial society. Unlike the Hausa/Fulani he was unhindered by a wary religion, and unlike the Yoruba he was unhampered by traditional hierarchies. This kind of creature, fearing no god or man, was custom-made to grasp the opportunities, such as they were, of the white man's dispensations.",
    person: "Chinua Achebe"
}, { 
    quote:"Any woman can convince a man to sleep with her, but can you convince a man to go to work everyday to provide you the life you're comfortable with.",
    person:"Poor mans Podcast"
}, {
    quote:"[In response to Question: Do you think women liberation is a good thing?] \n I'm very skeptically about these things. I think women are in great danger of being dominated by women. Being told to liberate themselves by doing what other women want them to do. They are becoming too dominate that they'll end up not being woman anymore",
    person: "A woman in the 60s"
}, {
    quote: "Every woman should let there dad vet any guy that comes to them romantically",
    person: "Poor mans Podcast"
}];

qgbtn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})