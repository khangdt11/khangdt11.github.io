const videoAdContainer = document.createElement('div');
videoAdContainer.className = 'video-container';
document.querySelector('#box-video-ad .exercise-body').appendChild(videoAdContainer);
videoAdContainer.innerHTML = ` <video id="ad-video" height="550" autoplay muted loop
                                    src = "assets/video/video.mp4"></video>`;
//autoplay muted loop (auto replay)
const video = document.getElementById('ad-video');
document.querySelector('html').addEventListener('click', () => {
   if(video.muted) {
        video.muted = false;
   } 
});

window.addEventListener('scroll', () => {
   if(scrollY < 1500) {
      document.querySelector('.video-container').classList.add('float');
   } else {
      document.querySelector('.video-container').classList.remove('float');
   }
});

