const movies = [
    {
        title: "Exemple 1",
        description: "Description",
        rating: 53,  // Note TMDb
        ageRating: "TP",  // Âge minimum
        thumbnail: "Arcane.jpg",  // Image depuis TMDb
        videoUrl: "https://github.com/Maestroprosiak/losoweslowa/blob/44e8e211ed68b8f98c3b708f9b14238c741c2c52/Film%20bez%20tytu%C5%82u%20%E2%80%90%20Wykonano%20za%20pomoc%C4%85%20Clipchamp.mp4"
    }
];

const series = [
    {
        title: "Serie exemple 1",
        description: "Description",
        rating: 78,
        ageRating: "TV-14",
        thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/exemple.jpg",
        seasons: [
            {
                seasonNumber: 9,
                episodes: [
                    {
                        title: "Episod 1",
                        videoUrl: "https://link-to-video.com"
                    },
                    {
                        title: "Episod 2",
                        videoUrl: "https://link-to-video.com"
                    }
                ]
            }
        ]
    }
];
