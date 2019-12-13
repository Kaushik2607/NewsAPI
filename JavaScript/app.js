const SportsApiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=eb67430659b048a18a16558112dba95a`
window.fetch(SportsApiUrl).then(data=>{
    data.json().then(sportsnews=>{
        let sportsData=sportsnews.articles;
        let output='';
        for(let sports of sportsData){
            output+=`
            
             <h1 class="h1title">${sports.title}</h1>
             <p>${sports.description}</p>
             <img src=${sports.urlToImage} />
             <p>${sports.publishedAt}</p>
            ; `
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err))
var Day=new Date().getDay();
setInterval(()=>{
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);

const EntUrl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=eb67430659b048a18a16558112dba95a`
window.fetch(EntUrl).then(data=>
    {data.json().then(Ent=>{
        let EntData=Ent.articles;
        let output='';
        for(let Ent of EntData){
            output+=`
            <h1 class="h1title">${Ent.title}</h1>
             <p>${Ent.description}</p>
             <img src=${Ent.urlToImage} />
             <p>${Ent.publishedAt}</p>
            `
            ;
        }
        document.getElementById("right").innerHTML=output;
    })
    .catch(err=>console.log(err))
}).catch(err=>console.log(err));
var search = document.getElementById('search');

//events

search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        var getCityName = e.target.value
    }
    getWeather(getCityName);
});

function getWeather(getCityName) {

    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=3dc9f89b9fac2c19e5b0826480f7e0c1`;

    window
    .fetch(weatherApi)
    .then(data => {
        data
        .json()
        .then(weather => {

            var output = "";
            console.log(weather);
            console.log(weather.coord.lon);
            console.log(weather.coord.lat);

            //array here
            var weatherData = weather.weather;
            for(let x of weatherData) {
               
                output += `

                <div class="mt-4 weatherblock">
                    <div class ="card-body1">
                        <h1>${weather.name}</h1>
                        <span class="icon">
                        <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                        <p><span>temp:</span>
                        <span class="temp">${weather.main.temp}&deg;c</span></p>
                        <span class="des float-left">${x.description}</span>
                        <span class="des float-right">${x.main}</span>

                    </div> 
                </div>
                `;

                document.getElementById("template").innerHTML=output;
                // console.log(x);
                // console.log(x.id);
                // console.log(x.main);
                // console.log(x.description);
                // console.log(x.icon);
                
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

const TopUrl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=eb67430659b048a18a16558112dba95a`
window.fetch(TopUrl).then(data=>
    {data.json().then(Top=>{
        let TopData=Top.articles;
        let output='';
        for(let Top of TopData){
            output+=`
            <h1 class="h1title">${Top.title}</h1>
             <p>${Top.description}</p>
             <img src=${Top.urlToImage} />
             <p>${Top.publishedAt}</p>
            `
            ;
        }
        document.getElementById("middle").innerHTML=output;
    })
    .catch(err=>console.log(err))
}).catch(err=>console.log(err));
