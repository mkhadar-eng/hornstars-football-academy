  function openLightbox(imgSrc, caption) {
                var modal = document.getElementById('gallery-lightbox');
                var targetImg = document.getElementById('lightbox-img');
                var targetCap = document.getElementById('lightbox-caption');
                if (modal && targetImg && targetCap) {
                    targetImg.src = imgSrc;
                    targetCap.textContent = caption;
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                }
            }

            function closeLightbox() {
                var modal = document.getElementById('gallery-lightbox');
                if (modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            }

            function playAcademyVideo() {
                var poster = document.getElementById('video-poster');
                var video = document.getElementById('academy-video');
                if (poster && video) {
                    poster.classList.add('hidden');
                    video.classList.remove('hidden');
                    video.play();
                }
            }

            function handleFormSubmission(event) {
                event.preventDefault();
                var btn = document.getElementById('submit-btn');
                var banner = document.getElementById('form-success-banner');
                if (btn && banner) {
                    btn.innerHTML = '<span>Processing Application...</span>';
                    btn.disabled = true;
                    setTimeout(function () {
                        btn.classList.add('hidden');
                        banner.classList.remove('hidden');
                    }, 700);
                }
            }