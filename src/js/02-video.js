import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

const CURRENT_TIME_KEY = 'videoplayer-current-time';

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
