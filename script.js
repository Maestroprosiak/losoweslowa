document.addEventListener('DOMContentLoaded', function() {
    const filmGallery = document.getElementById('film-gallery');
    const serieGallery = document.getElementById('serie-gallery');
    const videoPlayerContainer = document.getElementById('video-player-container');
    const videoPlayer = document.getElementById('video-player');
    const closeBtn = document.getElementById('close-btn');
    const serieDetails = document.getElementById('serie-details');
    const serieTitle = document.getElementById('serie-title');
    const seasonSelect = document.getElementById('season-select');
    const episodeList = document.getElementById('episode-list');
    const searchInput = document.getElementById('search');
    let currentVideoUrl = '';  // Stores the current video URL

    function loadContent() {
        loadMovies(movies, filmGallery);
        loadSeries(series, serieGallery);
    }

    function loadMovies(content, gallery) {
        gallery.innerHTML = '';  // Clear existing content
        content.forEach(item => {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-item');

            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt = item.title;
            img.classList.add('movie-thumbnail');
            img.addEventListener('click', () => {
                playVideo(item.videoUrl, item.isEmbed);
            });

            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');

            const title = document.createElement('h3');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.description;

            const rating = document.createElement('p');
            rating.textContent = `Rating: ${item.rating} / 100`;

            const ageRating = document.createElement('p');
            ageRating.textContent = `Age: ${item.ageRating}`;

            movieInfo.appendChild(title);
            movieInfo.appendChild(description);
            movieInfo.appendChild(rating);
            movieInfo.appendChild(ageRating);

            movieContainer.appendChild(img);
            movieContainer.appendChild(movieInfo);

            gallery.appendChild(movieContainer);
        });
    }

    function loadSeries(content, gallery) {
        gallery.innerHTML = '';  // Clear existing content
        content.forEach(item => {
            const serieContainer = document.createElement('div');
            serieContainer.classList.add('serie-item');

            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt = item.title;
            img.classList.add('serie-thumbnail');
            img.addEventListener('click', () => {
                showSerieDetails(item);
            });

            const serieInfo = document.createElement('div');
            serieInfo.classList.add('serie-info');

            const title = document.createElement('h3');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.description;

            const rating = document.createElement('p');
            rating.textContent = `Rating: ${item.rating} / 100`;

            const ageRating = document.createElement('p');
            ageRating.textContent = `Age: ${item.ageRating}`;

            serieInfo.appendChild(title);
            serieInfo.appendChild(description);
            serieInfo.appendChild(rating);
            serieInfo.appendChild(ageRating);

            serieContainer.appendChild(img);
            serieContainer.appendChild(serieInfo);

            gallery.appendChild(serieContainer);
        });
    }

    function showSerieDetails(serie) {
        serieTitle.textContent = serie.title;
        seasonSelect.innerHTML = '';  // Clear season selector
        episodeList.innerHTML = '';  // Clear episode list

        serie.seasons.forEach(season => {
            const option = document.createElement('option');
            option.value = season.seasonNumber;
            option.textContent = `Season ${season.seasonNumber}`;
            seasonSelect.appendChild(option);
        });

        displayEpisodes(serie.seasons[0].episodes);

        seasonSelect.addEventListener('change', function() {
            const selectedSeason = serie.seasons.find(season => season.seasonNumber == this.value);
            displayEpisodes(selectedSeason.episodes);
        });

        videoPlayerContainer.classList.add('active');
        serieDetails.classList.remove('hidden');
    }

    function displayEpisodes(episodes) {
        episodeList.innerHTML = ''; // Wyczyść listę odcinków
    
        // Tworzenie rozwijanej listy odcinków
        const episodeSelect = document.createElement('select');
        episodeSelect.id = 'episode-select';
    
        // Dodawanie opcji do listy
        episodes.forEach((episode, index) => {
            const option = document.createElement('option');
            option.value = episode.videoUrl; // URL jako wartość
            option.textContent = `Episode ${index + 1}: ${episode.title}`;
            episodeSelect.appendChild(option);
        });
    
        // Obsługa zmiany wyboru w rozwijanej liście
        episodeSelect.addEventListener('change', function () {
            const selectedEpisode = episodes.find(episode => episode.videoUrl === this.value);
            if (selectedEpisode) {
                playVideo(selectedEpisode.videoUrl, selectedEpisode.isEmbed);
            }
        });
    
        episodeList.appendChild(episodeSelect); // Dodanie listy rozwijanej do kontenera
    }

    function playVideo(url, isEmbed) {
        currentVideoUrl = url;
    
        // Wyczyść poprzednią zawartość
        videoPlayerContainer.innerHTML = '';
    
        // Tworzenie przycisku zamykania
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('close-video');
        closeButton.addEventListener('click', () => {
            videoPlayerContainer.innerHTML = ''; // Wyczyść odtwarzacz
            videoPlayerContainer.classList.remove('active'); // Ukryj odtwarzacz
        });
    
        videoPlayerContainer.appendChild(closeButton); // Dodaj przycisk zamykania
    
        if (isEmbed) {
            // Tworzenie iframe dla osadzonych wideo
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "50%";
            iframe.height = "50%";
            iframe.allow = "autoplay; fullscreen";
            iframe.frameBorder = "0";
            videoPlayerContainer.appendChild(iframe);
        } else {
            // Tworzenie elementu <video>
            const video = document.createElement('video');
            video.src = url;
            video.controls = true;
            video.autoplay = true;
            video.id = 'video-player';
            video.style.width = "50%";
            videoPlayerContainer.appendChild(video);
        }
    
        // Upewnij się, że odtwarzacz jest widoczny
        videoPlayerContainer.classList.add('active');
    
        // Opcje wyboru sezonu i odcinka pozostają widoczne
        serieDetails.classList.remove('hidden');
    }
    

    closeBtn.addEventListener('click', () => {
        videoPlayerContainer.innerHTML = '';  // Clear content
        videoPlayerContainer.classList.remove('active');
        serieDetails.classList.add('hidden');
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        const filteredSeries = series.filter(serie => serie.title.toLowerCase().includes(query));

        loadMovies(filteredMovies, filmGallery);
        loadSeries(filteredSeries, serieGallery);
    });

    loadContent();
});
