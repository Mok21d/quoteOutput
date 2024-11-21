const arrayOfQuotes = [
    {'author': 'Frank Zappa', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul..'
    },
    {'author': 'Bernard M. Baruch', 
     'quote': 'Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind.'
    },
    {'author': ' Mahatma Gandhi', 
     'quote': 'ALive as if you were to die tomorrow. Learn as if you were to live forever'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
