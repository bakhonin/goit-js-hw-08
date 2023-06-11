import throttle from "lodash.throttle";
import Player from "@vimeo/player"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const saveCurrentTime = throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}, 1000);

player.on('timeupdate', saveCurrentTime);

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