document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    // const overlay = document.getElementById('overlay');

    const updatePlayButton = () => {
      if (audio.paused) {
        playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(181, 181, 181)" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
          </svg>`;
      } else {
        playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(181, 181, 181)" class="bi bi-stop-fill" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
          </svg>`;
      }
    };

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
      });
      updatePlayButton();
    });
    // const handleScroll = () => {
    //   if (audio.paused) {
    //     audio.play().catch(error => {
    //       console.log('Autoplay was prevented:', error);
    //     });
    //     updatePlayButton();
    //     // 移除滾動監聽器，防止多次播放
    //     window.removeEventListener('scroll', handleScroll);
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);

    playButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      updatePlayButton();
    });

    audio.addEventListener('ended', () => {
      updatePlayButton();
    });
  });
