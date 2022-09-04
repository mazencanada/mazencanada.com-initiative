//fetch videos from youtube API
const url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=3&order=date&key=AIzaSyDTdrq_XVM6pIUuRtSW3fYJRnS-VMOvpO4"
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

    //not fixed yet 
    function loadVideo(){
      document.getElementById("latest-videos").innerHTML +=
      `<div> <iframe src="https://www.youtube.com/embed/${videoId}"></iframe></div>`
    }

    document.getElementById("latest-videos").innerHTML +=
    `
    <div class="box"> 
    <span class="icon"> <i class="fa-solid fa-play" onclick="${loadVideo()}"></i> </span>
    <img class="thumbnail" src="${image}" width="300px"/>
    <p class="title">${title}</p>
  </div>
    `
    
   
});

}
