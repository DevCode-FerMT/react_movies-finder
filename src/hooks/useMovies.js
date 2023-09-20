import { useState } from "react"
import { searchMovies } from "../components/services/movies"

export function useMovies({ search }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMovies = async () => {

        try {
            setLoading(true)
            setError(null)
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            // esto siempre se ejecuta, entre en el try o en el catch
            setLoading(false)
        }

    }

    return { movies, loading, getMovies }
}