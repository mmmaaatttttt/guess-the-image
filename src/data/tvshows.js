const images = [
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDk1NmNkZTQtNzA0Mi00YzZkLWFjMzMtOGMwNDJkM2EwNDRhXkEyXkFqcGdeQXVyNTgyNDM1OTU@._V1_.jpg",
    title: "The Wire"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNTQ3MDY5MTEwNl5BMl5BanBnXkFtZTgwMzI0NDEzMzI@._V1_FMjpg_UX1280_.jpg",
    title: "Game of Thrones"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNGIyMmMzYmQtOGI2OS00OTI5LTlkYzQtNjY5NjlhNjA5ZDFjXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_FMjpg_UX1280_.jpg",
    title: "The Office"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMWMxYzBlNWMtYjRlNC00ZTY1LWE4ZTktMzMxYjlhODkwYWRhXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_FMjpg_UX1000_.jpg",
    title: "The Good Place"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjM4Njk1NDgyMV5BMl5BanBnXkFtZTgwMjI4ODM0MjE@._V1_FMjpg_UX500_.jpg",
    title: "Rick and Morty"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTIxMDM3NjE4NV5BMl5BanBnXkFtZTYwNjQzMzI3._V1_FMjpg_UX485_.jpg",
    title: "Lost"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTg2MjgzNTYwN15BMl5BanBnXkFtZTcwMDU4NzQyMg@@._V1_FMjpg_UX725_.jpg",
    title: "Flight of the Conchords"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjM3OTQwODQwM15BMl5BanBnXkFtZTgwNTY3NTMwMjE@._V1_FMjpg_UX1280_.jpg",
    title: "Planet Earth"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BYjU0NzU5NzYtODNmZi00ZmZiLWExOTItZmVlZjUwNmU1ZjcxXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_FMjpg_UX1280_.jpg",
    title: "WandaVision"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNDQ0MGJmYjktMWNhZi00ODViLThiNzctMTA2MTFlOTBmNzUzXkEyXkFqcGdeQXVyMjg3Njc5NTI@._V1_FMjpg_UX1280_.jpg",
    title: "Never Have I Ever"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTk4MTg3MDY1Ml5BMl5BanBnXkFtZTgwOTE5NzY4MzI@._V1_FMjpg_UX1000_.jpg",
    title: "Mr. Robot"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjQzMTM0NzE2M15BMl5BanBnXkFtZTgwNTM2NjA1NjM@._V1_FMjpg_UX1280_.jpg",
    title: "Riverdale"
  },
  {
    src: "https://www.giftedyouth.com/wp-content/uploads/2020/05/vlcsnap-2020-05-08-18h11m59s026.png",
    title: "I Think You Should Leave"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNWJiMmM5Y2UtZTUxNS00MWJmLTgzZjUtOTczODc3MzA4ZjIyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg",
    title: "The Mandalorian"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjMxNzk5MTc4OF5BMl5BanBnXkFtZTgwODE2ODIxNzE@._V1_FMjpg_UX1280_.jpg",
    title: "Gotham"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTA2NTEwNjU3NTBeQTJeQWpwZ15BbWU4MDUyMjE4NjEy._V1_FMjpg_UX1280_.jpg",
    title: "Community"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BZTRmZDU1NTctYmVlMS00YjczLTg4OWItODliYTJhNGIzNjNiL2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX500_.jpg",
    title: "Bob's Burgers"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNGFjYzRmZGItZTUyZC00Y2EzLWEyMGItYjE5YWQxZDdlZWJmXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_FMjpg_UX1280_.jpg",
    title: "Ted Lasso"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BODY3MzgwZGYtNWEwOC00ODQ4LThkZjMtMzFkMWZkMzdhODI1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1280_.jpg",
    title: "The Walking Dead"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTY4OTkxMDE0N15BMl5BanBnXkFtZTgwOTk0ODk2NzM@._V1_FMjpg_UX1280_.jpg",
    title: "Stranger Things"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTU2OTg5NjUyN15BMl5BanBnXkFtZTcwMzg2NTY3NQ@@._V1_FMjpg_UX1280_.jpg",
    title: "Breaking Bad"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDNmNTdmM2EtYTFjMS00ZmMzLWFhNzMtY2FlM2M0YzJjZTVjXkEyXkFqcGdeQXVyODExNTExMTM@._V1_FMjpg_UX1280_.jpg",
    title: "Black Mirror"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BYWU4Y2EyZDgtZjAxMi00Mzc1LWI3ZDItZDlkZTUyNGViMGFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg",
    title: "This Is Us"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTgxNDk5NzAyOF5BMl5BanBnXkFtZTgwNjcwMjU3MzI@._V1_FMjpg_UX1280_.jpg",
    title: "Scandal"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOGFjMjYwZWYtMzZhMi00YWFkLWIwMGQtOTcxYjk0NmMzMTNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1280_.jpg",
    title: "The Bachelor"
  }
];

export default images;
