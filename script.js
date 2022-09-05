    async function get(){
      try{
          const response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=3&order=date&key=AIzaSyBIwzMzUzXLoxKEiH-Y7qFZI1f0Jbea4so");
          const data = await response.json();
          console.log(data)
              for(let i=0;i<3;i++){
                let img=data.items[i].snippet.thumbnails.high.url
                let title=data.items[i].snippet.title;
                let videoId=data.items[i].id.videoId;
                let button=document.getElementsByClassName("playIcon")[i];
                document.getElementsByClassName("img")[i].src =img;
                document.getElementsByClassName("videoTitle")[i].innerHTML=title;
                button.addEventListener("click",function(){
                  let box =document.getElementsByClassName("box")[i]
                  box.innerHTML=`<div> <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay"  width="300px" height="200" ></iframe></div>`
                })
              }
      }
      catch(error){
        
        console.log(error);
    }
    }
    get();
