# Infinity quotes
 Populate infinite-ish random quotes in a single page


# About
A single web page to generate and display a Random quotes fetched from a quotes API. Individual quotes can be seen by scrolling on a device. Before scrolling to the end of the window, a new batch of 10 random quotes are added so the user can keep scrolling on the same page to access more quotes. Each individual quote has two buttons, Twitter and Whatsapp which can be used to share the quotes to either twitter or Whatsapp.

## Table of contents

  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Screenshot

![Desktop screenshot](./screenshots/desktop.png)
![Desktop screenshot](./screenshots/desktop-more-quotes.png)
![Mobile screenshot](./screenshots/mobile.png)


### Links

- Live Site URL: [Click here](https://kb-jr.github.io/Infinity-quotes/)

## My process

#### Interface:
- Build User interface using HTML5 and CSS custom properties.
- import loading icon and fix its position animation using CSS animations
- Import font type from Google fonts API


#### Behavior:
- Create an asynchronous function to retrieve quotes from the Quotes API. This is done by fetching data from the API url in JSON format. This returns an array of several objects with text and author properties.

- Create a function to generate 10 random quote and dynamically populate the interface with quotes and Authors. This is done by using a combination of sort() math.random and slice() methods on the quotes object retrieevd from the API and storing the result quote in a variable. The quote text property is then used to update the text content of the field created for quotes in the interface (Apply same step to retrieve quote authors and update the interface). 

- Using a forEach method on the array containing the sliced quotes, the content of each quote container is created and populated dynamically. 

- Create a function to share quote directly to twitter. Do this by storing the twitter sharing link and passing in the content to be shared as a text parameter using template literal syntax in a variable. Template literal syntax allows you to pass in variables as string format. Open the variable using window.open and specify '_blank' in order for twitter to open in a new tab. Repeat same step for whatsapp

- Add event listeners to the whatsapp and tweet buttons such that when clicked, the share to whatsapp and tweet quote functions will be run respectively.

- Create a boolean which can be used to determine when ready or not. Set initial value of the boolean to false. The boolean will only be tue when the total number of quotes loaded is equals to length of the sliced quotes (10). Thus a function needs to be created which will increment a variable by one until its value equals 10, then the boolean will be true.

- Add a scroll event listener to the window object and the function to be run takes an if statement which checks if innerheight and scrollY of the window is greater than or equal to the document offsetHeight minus a particular amount of pixels(so that the scroll bar doesn't completely reaches the bottom before the function is run) and the ready boolean is true i.e the number of loaded quotes is equals to 10. If the above condition evaluates to true, then set the value of ready back to false and call the getQuotes function which will generate another set of 10 quotes.


## What i learned
- You cant add event listeners such as load or unload to elements or tags such as divs. Those only work on images, links, scripts, iframes etc such are usually external resources hence the need to be 'loaded'. To apply a function simply call the function after writing all the relevant code. No need to add event listener to the div or any element that is not supported by that particular event.


- Working with the window object

### Built with

- HTML5 
- CSS custom properties
- Flexbox
- Javascript
- Desktop-first workflow


### Useful resources

- [api for quotes](https://type.fit/api/quotes) - This link is an API which contains an array of several quotes.

- [url to share on twitter](https:twitter.com/intent/tweet) - Use this link in addition with other query parameters to share specified content to twitter. For more info on query parameters, visit https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent.

- [url to share on whatsapp](https://whatsapp://send?text=) - Use this link in addition with other specified content which could be text itself or variables parsed using template literal notation.


- [to create a loader](https://www.w3schools.com/howto/howto_css_loader.asp) - Code snippets from here was used to build a customized loader

- [Loader](https://loading.io/) - Download custimisable loading animations 

- [Google fonts](https://fonts.googleapis.com/css?family=Ubuntu) - Adding this link to the head section of the HTML grants one access to use the 'Ubuntu' font from google fonts. To use any other font, replace 'Ubuntu' with prefered font type or family in the link.


## Author

- Github - [@Kb-Jr](https://github.com/Kb-Jr)
- Twitter - [@Joker__XL](https://www.twitter.com/Joker__XL)
