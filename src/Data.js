const Data = [
    {
      title: "Inception",
      poster: "https://c8.alamy.com/comp/2C4X052/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X052.jpg",
      releaseYear: 2010,
      genre: ["Action", "Sci-Fi", "Thriller"],
      director: "Christopher Nolan",
      imdbRating: 8.8,
      bgp: "https://spaces.filmstories.co.uk/uploads/2023/07/Inception-2.jpg",
      description: "A mind-bending thriller where a skilled thief delves into dreams to implant an idea, facing challenges that blur the line between reality and illusion."
    },
    {
      title: "Titanic",
      poster: "https://m.media-amazon.com/images/I/610CYrdV7AS.jpg",
      releaseYear: 1997,
      genre: ["Drama", "Romance"],
      director: "James Cameron",
      imdbRating: 7.9,
      bgp: "https://assets.gqindia.com/photos/63ef42bcb295b6a9921513b5/16:9/w_2560%2Cc_limit/Titanic_04.jpeg",
      description: "A timeless love story aboard the ill-fated Titanic, blending romance and tragedy as it recounts the ship's infamous voyage."
    },
    {
      title: "The Dark Knight",
      poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
      releaseYear: 2008,
      genre: ["Action", "Crime", "Drama"],
      director: "Christopher Nolan",
      imdbRating: 9.0,
      bgp: "https://m.media-amazon.com/images/S/pv-target-images/8753733ac616155963cc440c3cf5367f45d7685b672c5b9c35bc7f182aec17c4.jpg",
      description: "Gotham's hero faces a chaotic and brilliant adversary, the Joker, in a gripping tale of justice, morality, and chaos."
    },
    {
      title: "Interstellar",
      poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
      releaseYear: 2014,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      imdbRating: 8.6,
      bgp: "https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310071805064792540_38983_u23h.jpg",
      description: "An emotional space odyssey where astronauts journey through a wormhole to find a new home for humanity amidst personal sacrifices."
    },
    {
      title: "The Godfather",
      poster: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      releaseYear: 1972,
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
      imdbRating: 9.2,
      bgp: "https://i.ytimg.com/vi/UaVTIH8mujA/maxresdefault.jpg",
      description: "An epic saga of a crime family navigating power, loyalty, and betrayal, showcasing the rise of the Corleone dynasty."
    },
    {
      title: "Forrest Gump",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
      releaseYear: 1994,
      genre: ["Drama", "Romance"],
      director: "Robert Zemeckis",
      imdbRating: 8.8,
      bgp: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/forrest-gump-running-1.jpg",
      description: "The life journey of a simple man whose innocence and love inspire those around him, amidst historical milestones."
    },
    {
      title: "Avengers: Endgame",
      poster: "https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=20&crop=false",
      releaseYear: 2019,
      genre: ["Action", "Adventure", "Drama"],
      director: "Anthony Russo, Joe Russo",
      imdbRating: 8.4,
      bgp: "https://media.gq.com/photos/5c8a690107a98f3722295c22/16:9/w_2560%2Cc_limit/avengers-endgame-trailer-gq-2.jpg",
      description: "The Avengers unite for a final stand to undo the devastation wrought by Thanos, in a saga of sacrifice and hope."
    },
    {
      title: "Parasite",
      poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      releaseYear: 2019,
      genre: ["Comedy", "Drama", "Thriller"],
      director: "Bong Joon Ho",
      imdbRating: 8.6,
      bgp: "https://media.newyorker.com/photos/5da4a5c756dcd400082a63ba/master/pass/Brody-Parasite.jpg",
      description: "A gripping satire of class disparity where two families' lives intertwine, leading to unexpected twists and consequences."
    },
    {
      title: "Joker",
      poster: "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3.jpg?v=1579504285",
      releaseYear: 2019,
      genre: ["Crime", "Drama", "Thriller"],
      director: "Todd Phillips",
      imdbRating: 8.4,
      bgp: "https://imageio.forbes.com/specials-images/imageserve/5db83d5a38073500062a7fc0/0x0.jpg?format=jpg&crop=902,507,x370,y188,safe&height=900&width=1600&fit=bounds",
      description: "A dark origin story of Arthur Fleck's descent into madness, exploring societal neglect and its harrowing consequences."
    },
    {
      title: "Pulp Fiction",
      poster: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2913986/5954827/MOVCD2688__80888.1679598962.jpg?c=2",
      releaseYear: 1994,
      genre: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      imdbRating: 8.9,
      bgp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mYEDLeZ5VDoP7Iw02jp1nGhN7dz14lgpMQ&s",
      description: "A cult classic interweaving multiple crime tales with iconic dialogue, dark humor, and unforgettable characters."
    }
];

export default Data;
  