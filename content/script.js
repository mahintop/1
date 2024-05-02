const videoPlayer = document.getElementById('video-player');
    const playlist = document.getElementById('playlist');
        const videoItems = playlist.getElementsByClassName('video-item');
            
                // Load the first video in the playlist
                    videoPlayer.src = videoItems[0].getAttribute('data-src');
                        
                            // Add click event listeners to the playlist items to switch videos
                                Array.prototype.forEach.call(videoItems, function(item) {
                                        item.addEventListener('click', function() {
                                                    const videoSrc = this.getAttribute('data-src');
                                                                videoPlayer.src = videoSrc;
                                                                        });
                                                                            });
                                                                            