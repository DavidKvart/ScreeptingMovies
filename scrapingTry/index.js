const puppeteer = require('puppeteer');
///this index pulls my data from the website using simple scrapting
(async function () {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();


   await page.goto('https://www.imdb.com/search/title/?genres=action,drama&genres=Reality-TV&explore=title_type,genres&ref_=adv_explore_rhs');

   const data = await page.evaluate(function () {
      const tiles = document.querySelectorAll('.lister-item-content');
      const arr = [];
      const genresParent = document.querySelectorAll('text-muted ');

     
      for (i = 0; i < tiles.length; i++) {
         let description = tiles[i].querySelectorAll('p.text-muted');

         arr.push({
            name: tiles[i].querySelector('.lister-item-header a').innerText,
            genre: tiles[i].querySelector('.genre ').innerHTML,
            informaition: description[1].innerHTML,
            // rating: tiles[i].querySelector('.ratings-bar>.inline-block.ratings-imdb-rating strong').innerHTML// still warking on this line lol 

         })
      }


      return arr;
   })

   
})();