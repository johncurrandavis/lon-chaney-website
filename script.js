// Load YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '100%',
    videoId: 'yTjo3E3obsE',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const unmuteBtn = document.getElementById('unmute-btn');

  unmuteBtn.addEventListener('click', () => {
    if (player) {
      player.unMute();
      player.seekTo(0);
      player.playVideo();
      unmuteBtn.style.display = 'none';
    }
  });
});
