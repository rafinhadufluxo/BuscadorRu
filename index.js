const request = require('request-promise');
const cheerio = require('cheerio');
const Crawler = require('crawler');

var semana = [];
const crawpgFilha = new Crawler({
    rateLimit: 5000,
    callback: function (error, res, done) {
        if (error) {
            Console.log(error)
        } else {

            let $ = res.$;
            let headerbase = $('#content-core > div > span > dl:nth-child(13) > dd > table > tbody > tr').find('strong')
            let header = ''
            for (let i = 0; i < headerbase.length; i++) {
                header += '| ' + headerbase[i].children[0].data + ' '
            }
            console.log(header)
            let bodyBase = $('#content-core > div > span > dl:nth-child(13) > dd > table > tbody > tr[valign!="top"]').find('p')
            let body = ''
            for (let i = 0; i < bodyBase.length; i++) {
                body += '| ' + bodyBase[i].children[0].data + ' ' 
                if (((i + 1) % 5) == 0 && i != 0) {
                    console.log(body)
                    body = ''
                }
            }
        }
    }
})
// function imprimi(){
//     var array = 10;
//     var n = 5;
//     for (let index = 0; index < array; index++) {
//         for (let j = 0; j < n; j++)  semana +=  " ";
//             console.log(semana);
                
//     }
// }

crawpgFilha.queue('https://www.uffs.edu.br/campi/chapeco/restaurante_universitario')
