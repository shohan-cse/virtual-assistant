/*
 *     <--- Shocave ---> 
 *    A virtual Assistant
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
        speak("Good Morning");
        speak("How can i help?");
    }

    else if(hr == 12) {
        speak("Good noon");
        speak("How can i help?");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
        speak("How can i help?");
    }

    else {
        speak("Good Evening");
        speak("How can i help?");
    }
}

window.addEventListener('load', ()=>{
    speak("as-salāmu ʿalaykum");
    speak("I'm a virtual assistant. My name is shocave. I'm developed by Shohanur Rahman");
    wishMe("");
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

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hi') || message.includes('hello')) {
        const finalText = "Hello. How can i help";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine. I think, you also fine";
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


    else if(message.includes('what is your name') || message.includes('tell me your name')) {
        const finalText = "My name is shocave";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how can')) {
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
