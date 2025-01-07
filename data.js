const movies = [
    {
        title: "Paweł Jumper",
        description: "O kurwa ",
        rating: 100,  
        ageRating: "TP",  
        thumbnail: "images/pawel.jpg",
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
        thumbnail: "images/Arcane.jpg",
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
        description: "hehehehe UwU",
        rating: 89,
        ageRating: "TV-14",
        thumbnail: "images/Arcanes2.jpg",
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
                {
        title: "薬屋のひとりごと",
        description: "Zielarka",
        rating: 95,
        ageRating: "TV-8",
        thumbnail: "images/apothecary.webp",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    {
                        title: "Odcinek 1",
                        videoUrl: "https://vk.com/video_embed.php?oid=858592511&id=456293845&hash=d541a3285f07304f",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 2",
                        videoUrl: "https://vk.com/video_embed.php?oid=858592511&id=456293977&hash=606a4a62db576d95",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 3",
                        videoUrl: "https://vk.com/video_ext.php?oid=858592511&id=456242286&hash=f3f74e3473ff2cf6",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 4",
                        videoUrl: "https://mega.nz/embed/N6EygR7J#9sv8ucgQB9hKdsTRf2O4HvYAHEKvH-WVB7NhsZa-CLk",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 5",
                        videoUrl: "https://mega.nz/embed/cr1BVTwL#zm2sbs25wgv1R3M6Ziwbln5aZVX0u88MjKgHBTqqEu8",
                        isEmbed: true // Dodano pole isEmbed
                    },
                    {
                        title: "Odcinek 6",
                        videoUrl: "https://mega.nz/embed/sqcx2SKI#dVlAuknwpJ1Ct05UmiCMI2HK6ZWutk7yYLeDuHX0B5E",
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
        ]
    },
];
