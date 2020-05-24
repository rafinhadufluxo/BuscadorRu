const request = require ('request-promise');
const cheerio = require ('cheerio');
const Crawler = require('crawler');


const crawpgFilha = new Crawler({
    rateLimit:5000,
    callback: function(error,res, done){
        if(error){
            Console.log(error)
        }else{
            let $ = res.$;
            let nome = $('#content-core > div > span > dl:nth-child(13) > dd > table > tbody').text().trim()
            console.log(nome);
        }
    }
})

crawpgFilha('https://www.uffs.edu.br/campi/chapeco/restaurante_universitario')