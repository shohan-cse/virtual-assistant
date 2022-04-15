/*              <--- Shocave --->
 *       A Inteligent Virtual Assistant
 *                 Developed 
 *                    by 
 *              Shohanur Rahman
 *       Email: help.shohan@gmail.com
 *  GitHub: https://www.github.com/shohan3401
 * 
 */
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning. How can i help you?");
    }

    else if(hr == 12) {
        speak("Good noon. How can i help you?");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon. How can i help you?");
    }

    else {
        speak("Good Evening. How can i help you?");
    }
}

window.addEventListener('load', ()=>{
    speak("as-salāmu ʿalaykum.");
    speak("I'm a virtual assistant. My name is shocave. I'm developed by Shohanur Rahhman");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I didn't understand what you said please try again..";

    if(message.includes('hi') || message.includes('hey') ||) {
        const finalText = "Hello. How can i help you?";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine. I think you also fine";
        speech.text = finalText;
    }

    else if(message.includes('introduce yourself')) {
        const finalText = "I'm a virtual assistant. My name is shocave. I'm developed by Shohanur Rahman. I can help you that you want. Still I'm under devloping. I think insha allah I'll be more powerful with shohanur rahman. Thank You";
        speech.text = finalText;
    }

    else if(message.includes('how old are you')) {
        const finalText = "As I'm a virtual assistant, I've no age. But, i can say that I've started my journey from 14th april, 2022";
        speech.text = finalText;
    }

    else if(message.includes('what are you doing now') || message.includes('what are you doing') || message.includes('what are you doing right now')) {
        const finalText = "Oh. It's pretty cool. I'm talking with you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is Shocave";
        speech.text = finalText;
    }

    else if(message.includes('who is your developer') || message.includes('who developed you') || message.includes('who build you')) {
        const finalText = "I'm developed by Shohanur Rahman. Let see his profile";
        window.open("https://github.com/shohan3401", "_blank");
        speech.text = finalText;
    }

    else if(message.includes('can you help me')) {
        const finalText = "Why not? ask me. if possible, then i will try with my best";
        speech.text = finalText;
    }

    else if(message.includes('who are you')) {
        const finalText = "Hey!! I'm shocave. I'm your personal virtual assistant.";
        speech.text = finalText;
    }

    else if(message.includes('How can you help me')) {
        const finalText = "It's cool. I can help you in many ways.";
        speech.text = finalText;
    }

    else if(message.includes('Do you know who is mehedi') || message.includes('Do you know about mehedi') || message.includes('say something about mehedi')){
        const finalText = "Cool. Yeah. Cool. I've a lot of things to say something about mehedi. First of all, He is your friend. He and you both are from same university even from same section. He is a busy guy. Most of the day he has duty in your campus. I know more information about him. But right now i want to keep myself sient. ";
        speech.text = finalText;
    }

    else if(message.includes('do you know who is monirul islam')) {
        const finalText = "Of course i know he is your artificial inteligence's teacher. He is friendly and good person.";
        speech.text = finalText;
    }

    else if(message.includes('open google') || message.includes('search google') || message.includes('search on google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }

    else if(message.includes('open twitter')) {
        window.open("https://twitter.com", "_blank");
        const finalText = "Opening twitter";
        speech.text = finalText;
    }

    else if(message.includes('open blc') || message.includes('open vlc') || message.includes('open diu blc') || message.includes('open blanded learning center')) {
        window.open("https://elearn.daffodilvarsity.edu.bd", "_blank");
        const finalText = "Opening DIU BLC";
        speech.text = finalText;
    }

    else if(message.includes('open codeforces')) {
        window.open("https://codeforces.com", "_blank");
        const finalText = "Opening codeforces";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how to')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}