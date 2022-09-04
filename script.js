//fetch videos from youtube API
const url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=3&order=date&key=AIzaSyBOnawFtJGkZJhFMHaE3hb_rqrN9QwSsG0"
fetch(url)
.then(response => {return response.json() })
.then(data =>{youtubeLatestVideos(data.items);})

function youtubeLatestVideos(data){
    //console.log(data)

data.forEach(element => {
  console.log(data)
    let title=element.snippet.title;
    let image=element.snippet.thumbnails.high.url;
    let videoId=element.id.videoId;
    let icon =document.createElement("span").innerHTML='<i class="fa-solid fa-play icon"></i>'

    /*   
    icon.addeventlistener("click",loadVideo)
    function loadVideo(){
      document.getElementById("latest-videos").innerHTML +=
      `<div> <iframe src="https://www.youtube.com/embed/${videoId}"></iframe></div>`
    }
    
      */
    let latestVideos = document.getElementById("latest-videos").innerHTML +=
    `
    <div class="box"> 
    ${icon} 
    <img class="thumbnail" src="${image}" width="300px"/>
    <p class="title">${title}</p>
  </div>
    `
   
});


}

