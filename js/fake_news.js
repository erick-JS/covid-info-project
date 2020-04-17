/*var faq_btn = document.querySelector(".fab");
var fake_news = document.getElementById("fake_news");
var box_fake = document.getElementById("box_fake");
var covid_box = document.getElementById("box");
var minimize = document.getElementById("minimize");
var fake_list = document.getElementById("fake_list");

box_fake.innerHTML = "";

fake_news.addEventListener("click", openFakeNews);*/

//Criação da API com base nos dados do Ministério da Saúde
//function viewFakeNews() {

var request = require('request');
var cheerio = require('cheerio');

for (var i = 0; i <= 30; i += 10) {
    request(`https://www.saude.gov.br/fakenews?start=${i}/`, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var items = [];
            var content;

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
                //design(content.title, content.description);
            })

            $('.tileInfo > ul').each(function (i, element) {
                var date = $(element).find('.hide').next().text();

                var info = {
                    date: date
                }

                items.push(JSON.stringify(info))
            })

            console.log(items);
        }
    });
}
//}


/*function design(title, description){
    h1 = document.createAttribute('h1');
    h1.textContent = title; 
    //description = document.createAttribute('h4');

    fake_list.appendChild(h1);
    //fake_list.appendChild(description);
}*/