const movies = [
    {
        title: "Arcane",
        description: "Dwie siostry się napierdalają",
        rating: 88,  
        ageRating: "TP",  
        thumbnail: "Arcane.jpg",
        videoUrl: "https://vider.info/embed/video/ss1nxm", // Pełny link do osadzenia
        isEmbed: true // Ustaw na true, aby użyć <iframe>
    }
];

const series = [
    {
        title: "Arcane",
        description: "Kamilku to dla ciebie UwU",
        rating: 88,
        ageRating: "TV-14",
        thumbnail: "Arcane.jpg",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    {
                        title: "Odcinek 1",
                        videoUrl: "https://vider.info/embed/video/ss1nxm",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 2",
                        videoUrl: "https://vider.info/embed/video/ss1nxn",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 3",
                        videoUrl: "https://vider.info/embed/video/ss1nxx",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 4",
                        videoUrl: "https://vider.info/embed/video/ss15v5",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 5",
                        videoUrl: "https://vider.info/embed/video/ss15vc",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 6",
                        videoUrl: "https://vider.info/embed/video/ss15vv",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 7",
                        videoUrl: "https://vider.info/embed/video/ss1cmm",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 8",
                        videoUrl: "https://vider.info/embed/video/ss1cmn",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 9",
                        videoUrl: "https://vider.info/embed/video/ss1cxc",
                        isEmbed: true // Dodano pole isEmbed
                    }
                ]
            },
            {
                seasonNumber: 2,
                episodes: [
                    {
                        title: "Odcinek 1",
                        videoUrl: "https://vider.info/embed/video/ss1nxm",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 2",
                        videoUrl: "https://vider.info/embed/video/ss1nxn",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 5",
                        videoUrl: "https://link-to-video.com",
                        isEmbed: false // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 6",
                        videoUrl: "https://link-to-video.com",
                        isEmbed: false // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 7",
                        videoUrl: "https://link-to-video.com",
                        isEmbed: false // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 8",
                        videoUrl: "https://link-to-video.com",
                        isEmbed: false // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 8",
                        videoUrl: "https://link-to-video.com",
                        isEmbed: false // Dodano pole isEmbed
                    }
                ]
            }
        ]
    }
];
