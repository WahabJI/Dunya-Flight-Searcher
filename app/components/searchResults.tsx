import { useRouter } from 'next/router'

const SearchResults = () => {
    const router = useRouter()
    const { from, to, departDate, arrivalDate } = router.query

    return (
        <div>
            <h1>Search Results</h1>
            <p>From: {from}</p>
            <p>To: {to}</p>
            <p>Departure Date: {departDate}</p>
            <p>Arrival Date: {arrivalDate}</p>
        </div>
    )
}

export default SearchResults