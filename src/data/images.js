const images = [
  {
    src: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg",
    title: "The Shawshank Redemption"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOGU1YjI0NmEtN2JiZi00YWRjLWJkMjctODFlMjgyYTA1MmJiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
    title: "The Godfather"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_.jpg",
    title: "The Dark Knight"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNDc1NjY5ODAyMF5BMl5BanBnXkFtZTcwNTAzNDY3Mw@@._V1_.jpg",
    title: "Pulp Fiction"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTUxMjI3Njk4OF5BMl5BanBnXkFtZTcwNzI2NjQ0Mw@@._V1_.jpg",
    title: "Inception"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOWE5YTA1NDAtZWUxYy00ZDBkLWEzOGEtZTM3MWU3M2JiYTBmXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg",
    title: "The Matrix"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTcyNTA2OTU4NF5BMl5BanBnXkFtZTcwMjI0MjIyNw@@._V1_.jpg",
    title: "Spirited Away"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BYmQ0MjZmZTctNzE4ZC00YTAyLWIzMDctYTk4ZjZjZmZmNTk5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    title: "Parasite"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjA4MzI0NzI3MF5BMl5BanBnXkFtZTcwOTc4Mzg0OQ@@._V1_.jpg",
    title: "Back to the Future"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BODNjNDJkNmYtNTZmYS00NDg5LWJjYzYtN2NlYjFiYWZmYmY0XkEyXkFqcGdeQXVyNDk2MjQ4Mzk@._V1_.jpg",
    title: "Terminator 2"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BODgwZTQxNjctNWNjZC00ZTNiLWI2YTQtNzYzN2Y1N2IzZmMzXkEyXkFqcGdeQXVyNjcyODYyNzk@._V1_.jpg",
    title: "Space Jam"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTgxODE5MDgyOV5BMl5BanBnXkFtZTgwMzkyODI4NjM@._V1_.jpg",
    title: "Spider-Man: Into the Spider-Verse"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjEyNDQ2MzI0NV5BMl5BanBnXkFtZTgwODkzMDEyNzE@._V1_.jpg",
    title: "Creed"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTM5ODY4MzU5MV5BMl5BanBnXkFtZTcwMTMwMjY3Ng@@._V1_.jpg",
    title: "Jurassic Park"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDA0MTQ5ZjItMzViYS00ZjQwLTgyNmMtMmEzZjJiODg4MGNiL2ltYWdlXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_.jpg",
    title: "Hidden Figures"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTgzODk1NDMyNF5BMl5BanBnXkFtZTgwMDIyODY2MDI@._V1_.jpg",
    title: "Moana"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNmY1MTlkNTUtODA4NS00MGZkLTlhMWQtYmJkZjgwNzQ0NTk0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
    title: "Rogue One"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjIxODMwMjczNl5BMl5BanBnXkFtZTgwMjc3OTIwMjE@._V1_.jpg",
    title: "Men in Black"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNTA5ZThhY2MtMGZhOS00NTBmLWE0ZmQtOThjYmE5ZjBjN2I0XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
    title: "Star Trek"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTcxNzU1NDQwOF5BMl5BanBnXkFtZTgwNTc2NDA2NDE@._V1_.jpg",
    title: "Chappie"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMzliNzA2YzAtZGY4YS00ZGQ1LWE0NTItYzY2ZGZiYTA4YmQzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg",
    title: "Us"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNGJlNTllZmMtMDQxMy00YjRhLTkzOTUtN2Y4NjNiMTI1Mjg1XkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_.jpg",
    title: "Hamilton"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMjE5MTQxNTE3Nl5BMl5BanBnXkFtZTcwMjM0ODEyMw@@._V1_.jpg",
    title: "Aliens"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMzEwOTkyNDE0OV5BMl5BanBnXkFtZTgwMjAzMjMyNDM@._V1_.jpg",
    title: "Coco"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMTg2NDg4NjcxOV5BMl5BanBnXkFtZTgwMDkwMDAyNDM@._V1_.jpg",
    title: "The Last Jedi"
  },
];

export default images;
