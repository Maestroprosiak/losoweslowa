const movies = [
    {
        title: "Paweł Jumper",
        description: "O kurwa ",
        rating: 100,  
        ageRating: "TP",  
        thumbnail: "pawel.jpg",
        videoUrl: "https://ebd.cda.pl/620x368/389808466", // Pełny link do osadzenia
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
    },
    {
        title: "Arcane S2",
        description: "Kamilku to dla ciebie UwU",
        rating: 89,
        ageRating: "TV-14",
        thumbnail: "Arcanes2.jpg",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    {
                        title: "Odcinek 1",
                        videoUrl: "Arcane.mp4",
                        isEmbed: false // Dodano pole isEmbed
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
        ]
    },
];
