export function useMovies() {
    const res = { "Search": [{ "Title": "Friday the 13th", "Year": "1980", "imdbID": "tt0080761", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Freaky Friday", "Year": "2003", "imdbID": "tt0322330", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Friday", "Year": "1995", "imdbID": "tt0113118", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg" }, { "Title": "Friday the 13th", "Year": "2009", "imdbID": "tt0758746", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5ODI5NTMzN15BMl5BanBnXkFtZTcwNzY4MTYxMg@@._V1_SX300.jpg" }, { "Title": "Friday the 13th Part 2", "Year": "1981", "imdbID": "tt0082418", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYTZmMjk1ZjAtZjg0Yy00MWIyLWI5NmYtMThlYmU3NTc2NzdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Friday Night Lights", "Year": "2006–2011", "imdbID": "tt0758745", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BYTkxZDVhZGItZjM3Yi00YTU1LTk2ZDYtYTI4NTg2Mjc0NWY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" }, { "Title": "Friday Night Lights", "Year": "2004", "imdbID": "tt0390022", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxMDI5MTM4Ml5BMl5BanBnXkFtZTcwNjA4MDcyMQ@@._V1_SX300.jpg" }, { "Title": "His Girl Friday", "Year": "1939", "imdbID": "tt0032599", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZDVmZTZkYjMtNmViZC00ODEzLTgwNDAtNmQ3OGQwOWY5YjFmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" }, { "Title": "Friday the 13th Part III", "Year": "1982", "imdbID": "tt0083972", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZjRiMTdlY2QtZGE3YS00YjQzLTk5MmUtNjVjMjUzYWRiMWNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Friday the 13th: The Final Chapter", "Year": "1984", "imdbID": "tt0087298", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNWIzYWQ3NWQtNzg4NC00YzE3LWE3YmItODg1YTk5ZGRjMDk5XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg" }], "totalResults": "739", "Response": "True" }
    const search = res.Search
    const mappedMovies = search?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}