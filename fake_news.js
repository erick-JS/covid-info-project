//Criação da API com base nos dados do Ministério da Saúde

var request = require('request');
var cheerio = require('cheerio');
var http = require("http");


http.createServer(function (req, res) {
    var items = [];
    for (var i = 0; i <= 30; i += 10) {
        request(`https://www.saude.gov.br/fakenews?start=${i}/`, function (error, response, html) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);


                $('.tileContent').each(function (i, element) {
                    var title = $(element).find('h2').text().trim();
                    var description = $(element).find('.tileHeadline').next().text().trim();
                    var link = $(element).find('a').attr('href');
                    var tag = $(element).find('.tag-list2 a').text().trim();

                    var content = {
                        title: title,
                        description: description,
                        tag: tag,
                        link: link
                    }

                    items.push(JSON.stringify(content));
                })

                $('.tileInfo > ul').each(function (i, element) {
                    var date = $(element).find('.hide').next().text();

                    var info = {
                        date: date
                    }

                    items.push(JSON.stringify(info))
                })

                //console.log(items);
                for(var j = 0; j <= 30; j++){
                    res.write(JSON.stringify(items));
                }
                
                res.end();
            }
        });
    }

}).listen(8000);