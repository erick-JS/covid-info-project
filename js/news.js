var faq_btn = document.querySelector(".fab");
var noticias = document.getElementById("noticias");
var box_news = document.getElementById("box_news");
var covid_box = document.getElementById("box");
var minimize = document.getElementById("minimize")

box_news.innerHTML = "";

noticias.addEventListener("click", openNews);

function viewNews() {
    //URL onde está a API
    var apiKey = '5df8ff5340dd4105bc6f4cf868af7b96';
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'q=coronavírus&' +
        'country=br&' +
        'sortBy=popularity&' +
        `apiKey=${apiKey}`;


    //leitura da API
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        data.articles.forEach(article => {
            //Imagem da notícia
            var img = document.createElement('img');
            img.setAttribute('src', article.urlToImage);
            img.setAttribute('style', 'width:250px;height:100px');
            last_news.appendChild(img);

            //Título da notícia
            var h4 = document.createElement('h4');
            h4.textContent = article.title;
            last_news.appendChild(h4);

            //Descrição da notícia
            var p = document.createElement('p');
            p.setAttribute('style', 'font-size:14px;');
            p.textContent = article.description;
            last_news.appendChild(p);

            //Link da notícia
            var p = document.createElement('p');

            var a = document.createElement('a');
            a.setAttribute('style', 'font-size:14px;color:#129cbe;text-decoration:none;')
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = 'Ver detalhes';

            last_news.appendChild(p);
            last_news.appendChild(a);
        })
    });
}

function openNews() {
    covid_box.style.visibility = "hidden";
    box_news.innerHTML = "<div class='faq' id='box_news'>" +
        "<div class='topo' style='height: 85px;'><i class='fas fa-window-minimize' id='minimize' style='font-size:20px;color:white;float:right;' onclick='closeNews()'></i>" +
        "<br><br><p class='mensagem'>Veja abaixo as últimas notícias sobre o COVID-19.</p></div>" +
        "<div class='news' id='last_news'></div>" +
        "</div>";

    viewNews();
}

function closeNews(){
    box_news.innerHTML = "";
    faq_btn.style.visibility = "visible";
}