import throttle from "lodash.throttle";
import Player from "@vimeo/player"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function (data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}),1000);


player.on('timeupdate',throttle(function(data){
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data.seconds));
}),1000)
const getTimeVideo = localStorage.getItem(STORAGE_KEY); 
  if(getTimeVideo){
   player.setCurrentTime(JSON.parse(getTimeVideo));
  }; 

player.setCurrentTime()
.then(function(seconds) {})
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
            default:
            break;
    }
});