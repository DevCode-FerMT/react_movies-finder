import { useRef, useState } from "react"
import { searchMovies } from "../services/movies"

export function useMovies({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const getMovies = async () => {
        if (search === previusSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previusSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            // esto siempre se ejecuta, entre en el try o en el catch
            setLoading(false)
        }

    }

    const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    return { movies: sortedMovies, loading, getMovies }
}