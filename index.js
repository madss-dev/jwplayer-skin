        const controls = true;
        const displaytitle = false;
        const displaydescription = false;
        const tracks = [{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.ZvH0m.vtt","label":"Vietnamese"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.6zK4Q.vtt","label":"Polish"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.S4TJ5.vtt","label":"Portuguese"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.q84Yib.vtt","label":"Persian"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.ND04jb.vtt","label":"Thai"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.tEIHyb.vtt","label":"Malay"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.4W4V8b.vtt","label":"Russian"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.lMcK9b.vtt","label":"German"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.jGfndc.vtt","label":"Arabic"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.B26xqc.vtt","label":"Spanish"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.0CNJIc.vtt","label":"Italian"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.D4BG0c.vtt","label":"Turkish"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.fEfg8c.vtt","label":"Bangla"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.qDwo_c.vtt","label":"Indonesian"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.o7CDmd.vtt","label":"French"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.SQYKyd.vtt","label":"Hindi"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.cfCwZd.vtt","label":"English"},{"file":"https:\/\/hugh.cdn.rumble.cloud\/video\/s8\/11\/O\/X\/1\/O\/OX1Ov.21700d.vtt","label":"Khmer"}];
        const playerInstance = jwplayer("player").setup({
            controls: controls,
            sharing: false,
            displaytitle: displaytitle,
            displaydescription: displaydescription,
            autostart: false,
            mute: false,
            skin: {
                name: "player-skin"
            },
            playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
            playlist: [{
                sources: [{"file":"https:\/\/1a-1791.com\/video\/s8\/2\/O\/X\/1\/O\/OX1Ov.haa.mp4","type":"video\/mp4","label":"1080p"},{"file":"https:\/\/1a-1791.com\/video\/s8\/2\/O\/X\/1\/O\/OX1Ov.gaa.mp4","type":"video\/mp4","label":"720p"},{"file":"https:\/\/1a-1791.com\/video\/s8\/2\/O\/X\/1\/O\/OX1Ov.caa.mp4","type":"video\/mp4","label":"480p"},{"file":"https:\/\/1a-1791.com\/video\/s8\/2\/O\/X\/1\/O\/OX1Ov.baa.mp4","type":"video\/mp4","label":"360p"},{"file":"https:\/\/1a-1791.com\/video\/s8\/2\/O\/X\/1\/O\/OX1Ov.oaa.mp4","type":"video\/mp4","label":"240p"}],
                tracks: tracks,
                image: "https://1a-1791.com/video/s8/6/O/X/1/O/OX1Ov.qR4e.jpg",
                autostart: false,
                mute: false,
            }, ],
            captions: JSON.parse(localStorage.getItem("jwplayer.captions")) || {
                color: "#ffffff",
                fontFamily: "Arial",
                fontOpacity: 100,
                edgeStyle: "none",
                backgroundColor: "#000000",
                windowColor: "#ffffff",
                windowOpacity: 0,
                backgroundOpacity: 100,
                fontSize: 15, // Set the default font size
            },

        });

        playerInstance.on("ready", function() {
            const playerContainer = playerInstance.getContainer();
            const buttonContainer = playerContainer.querySelector(".jw-button-container");
            const spacer = buttonContainer.querySelector(".jw-spacer");
            const player = playerInstance;

            // Get the existing rewind button
            const rewindControlBarButton = buttonContainer.querySelector(".jw-icon-rewind");
            rewindControlBarButton.ariaLabel = "Backward 10 Seconds";

            // Create the forward button and insert it after rewind
            const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
            forwardControlBarButton.classList.remove("jw-icon-rewind");
            forwardControlBarButton.classList.add("jw-icon-forward");
            forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
            spacer.insertAdjacentElement('afterend', forwardControlBarButton);
            rewindControlBarButton.remove();
            spacer.insertAdjacentElement('afterend', rewindControlBarButton);

            // Create the forward button for the display
            const rewindContainer = playerContainer.querySelector(".jw-display-icon-rewind");
            const forwardContainer = rewindContainer.cloneNode(true);
            const forwardDisplayButton = forwardContainer.querySelector(".jw-icon-rewind");
            forwardDisplayButton.classList.remove("jw-icon-rewind");
            forwardDisplayButton.classList.add("jw-icon-forward");
            forwardDisplayButton.ariaLabel = "Forward 10 Seconds";

            // Insert the forward display button after rewind
            const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
            nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);
            playerContainer.querySelector(".jw-display-icon-next").style.display = "none";

            // Attach the forward functionality to both buttons
            [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
                button.querySelector("svg").classList.remove("jw-svg-icon-rewind");
                button.querySelector("svg").classList.add("jw-svg-icon-forward");
                button.onclick = () => {
                    player.seek(player.getPosition() + 10);
                };
            });

            // Attach the rewind functionality to the rewind button
            rewindControlBarButton.onclick = () => {
                player.seek(player.getPosition() - 10);
            };

            // Inside your ready event handler, where the timeline events are set up:

                            const timeline = playerContainer.querySelector('.jw-slider-time');
                const previewContainer = document.getElementById('preview-container');
                const previewVideo = document.getElementById('preview-video');
                const previewTime = document.getElementById('preview-time');
                playerContainer.querySelector('.jw-controlbar').prepend(previewContainer);

                function handleInteraction(e) {
                    const rect = timeline.getBoundingClientRect();
                    // Handle both mouse and touch events
                    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
                    const pos = (clientX - rect.left) / rect.width;

                    // Calculate the left position for the preview
                    let leftPosition = clientX - 90; // Center the preview

                    // Ensure the preview stays within the timeline
                    const minLeft = rect.left;
                    const maxLeft = rect.right - previewContainer.offsetWidth;
                    leftPosition = Math.max(minLeft, Math.min(maxLeft, leftPosition));

                    // Update preview position
                    previewContainer.style.left = `${leftPosition}px`;

                    // Update preview video time
                    const previewTimeSeconds = pos * playerInstance.getDuration();
                    previewVideo.currentTime = previewTimeSeconds;

                    // Update time display
                    const minutes = Math.floor(previewTimeSeconds / 60);
                    const seconds = Math.floor(previewTimeSeconds % 60);
                    previewTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                    // Show preview
                    previewContainer.style.display = 'block';
                }

                function hidePreview() {
                    previewContainer.style.display = 'none';
                }

                function seekVideo(e) {
                    const rect = timeline.getBoundingClientRect();
                    // Handle both mouse and touch events for seeking
                    const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
                    const pos = (clientX - rect.left) / rect.width;
                    playerInstance.seek(pos * playerInstance.getDuration());
                }

                // Mouse events
                timeline.addEventListener('mousemove', handleInteraction);
                timeline.addEventListener('mouseout', hidePreview);
                timeline.addEventListener('click', function(e) {
                    hidePreview();
                    seekVideo(e);
                });

                // Touch events
                timeline.addEventListener('touchstart', function(e) {
                    e.preventDefault(); // Prevent scrolling
                    handleInteraction(e);
                });

                timeline.addEventListener('touchmove', function(e) {
                    e.preventDefault(); // Prevent scrolling while touching timeline
                    handleInteraction(e);
                });

                timeline.addEventListener('touchend', function(e) {
                    e.preventDefault();
                    hidePreview();
                    seekVideo(e);
                });

                // Ensure the preview video is loaded
                previewVideo.load();
            
            if (!JSON.parse(localStorage.getItem("jwplayer.captions"))) {
                if (window.innerWidth < 800 && window.innerWidth > 450) {
                    // Update captions settings for smaller window width
                    playerInstance.setCaptions({
                        backgroundOpacity: 75,
                        fontSize: 18,
                    });
                } else if (window.innerWidth < 450) {
                    playerInstance.setCaptions({
                        backgroundOpacity: 100,
                    });
                }
            }
        });

        playerInstance.on('time', function(event) {
            localStorage.setItem("v5xwg72", event.position);
        });

        function setPlayerHeight() {
            playerInstance.resize(window.innerWidth, window.innerHeight);
        }


        // Call the setPlayerHeight function initially and whenever the window is resized
        setPlayerHeight();
        window.addEventListener("resize", setPlayerHeight);

        const defaultIndex = tracks.findIndex(obj => obj.label.trim() === "English");

        playerInstance.setCurrentCaptions(defaultIndex + 1);