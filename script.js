const quoteContainer = document.getElementById('quote-container');
const loader = document.getElementById('loader');
const body = document.getElementsByTagName('body');


let ready = false;
let quotesLoaded = 0;
let totalQuotes = 0;
let apiQuotes = [];
const apiUrl = 'https://type.fit/api/quotes'; 


function quoteLoaded(){
    quotesLoaded++;
    if (quotesLoaded === totalQuotes) {
        ready = true;
        loader.hidden = true;
    }
}


function displayQuotes(){
    

    const shuffled = apiQuotes.sort(() => 0.5 - Math.random());
          let quotes = shuffled.slice(0, 10);
        
          
    quotesLoaded = 0;
    totalQuotes = quotes.length;


    quotes.forEach((quote) => {
        
        const text = document.createElement('h3');
        text.textContent = `" ${quote.text} "`;


        const author = document.createElement('p');
        if (!quote.author){
            author.textContent = ' - Unknown';
        }

        else{
            author.textContent = ` - ${quote.author}`;
        }


        const button = document.createElement ('button');
        const whatsappButton = document.createElement('a');
        whatsappButton.classList.add('button');
        const footer = document.createElement('footer');
        footer.append(button, whatsappButton);
        


        function sharetweet(){
            twitterUrl = `https:twitter.com/intent/tweet?text= ${text.textContent} ${author.textContent}`;
            window.open(twitterUrl,'_blank');
        }

        function whatsappShare(){
            whatsappUrl = `whatsapp://send?text=${text.textContent} ${author.textContent}`;
            window.open(whatsappUrl, '_blank');
        }

        button.addEventListener('click', sharetweet);
        whatsappButton.addEventListener('click', whatsappShare);

        const wrapper = document.createElement('div');
     
        wrapper.append(text, author, footer);
        quoteContainer.appendChild(wrapper);

        quoteLoaded(); 
         
       
    });

    
}


async function getQuotes(){
   
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        displayQuotes();
        
    }

    catch(error){

    }
}



window.addEventListener('scroll', () => {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && ready){

    ready = false;
    getQuotes();
   }
});



getQuotes();


