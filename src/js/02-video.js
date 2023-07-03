import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const playbackTime = throttle(function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}, 1000);

player.on('timeupdate', playbackTime);

const currentTime = localStorage.getItem('videoplayer-current-time');
const seconds=JSON.parse(currentTime) ?? 0;
player.setCurrentTime(seconds).then(seconds);
