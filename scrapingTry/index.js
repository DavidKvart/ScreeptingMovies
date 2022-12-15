const puppeteer = require('puppeteer');
///this index pulls my data from the website using simple scrapting
/// you can use npm install and the 'node index' to see print for action!

(async function  () {
   ///sets that i wills see my page load and the time out for the peppeteer to finish what he needs and to 
   ////wait for the page to finish load so puppeteer can perform my function
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();

   /////sets the url to script from 
   await page.goto('https://www.imdb.com/search/title/?genres=action,drama&genres=Reality-TV&explore=title_type,genres&ref_=adv_explore_rhs');



   const data = await page.evaluate(function () {
      /// sets an array of elements of all the movied cards
      const tiles = document.querySelectorAll('.lister-item-content');
      const arr = [];
  
      ///loop throght all the cards
      for (i = 0; i < tiles.length; i++) {
         // get decription from p element
         let description = tiles[i].querySelectorAll('p.text-muted');

         arr.push({
            name: tiles[i].querySelector('.lister-item-header a').innerText,
            genre: tiles[i].querySelector('.genre ').innerHTML,
            informaition: description[1].innerHTML,
         })
      }
      return arr;
   })

console.log(data)
})();