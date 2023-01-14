// import DatePicker from 'react-datepicker/dist/react-datepicker';
import TripButton from '../button/tripButton'
import Link from 'next/link'
import {useState} from "react"
import { useRouter } from 'next/router';



const SearchBar = () => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [departDate, setDepartDate] = useState<string>('');
    const [arrivalDate, setArrivalDate] = useState<string>('');

    const params = new URLSearchParams();
    params.append('from', from);
    params.append('to', to);
    params.append('departDate', departDate);
    params.append('arrivalDate', arrivalDate);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`/api/searchFlights?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
    return(
        <div className="rounded-lg shadow-lg border-solid border-2 border-inherit box-border content-center absolute mx-auto left-12 right-12 h-40 w-min -mt-24">
            <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-center gap-x-4 mx-10 mt-4">

                {/* This form is for the FROM text box */}
                <div className = "text-semibolded text-center">
                    <label className = "ml-1 relative block text-left" htmlFor = "outbound">From: </label>
                    <input 
                        className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1" 
                        type="text" 
                        id="outbound" 
                        name="outbound" 
                        placeholder="City or Airport"
                        value = {from}
                        onChange={e => setFrom(e.target.value)}
                        />
                </div>

                {/* this form is for the TO text box */}
                <div>
                    {/*the margins and padding below is very hardcoded rn */}
                    <label className = "text-semibolded ml-1 relative block text-left" htmlFor = "destination">To:</label>
                    <input 
                        className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1" 
                        type="text" 
                        id="destination" 
                        name="destination" 
                        placeholder="City or Airport"
                        value = {to}
                        onChange={e => setTo(e.target.value)}
                    />
                </div>

                {/* this form is for the Departure Date text box */}
                <div className = "text-semibolded text-center">
                    <label className = "ml-1 relative block text-left" htmlFor = "departDate">Depart Date: </label>
                    <input 
                        className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1 w-28" 
                        type="text" 
                        id="departDate" 
                        name="departDate" 
                        placeholder="DD MM YY"
                        value = {departDate}
                        onChange={e => setDepartDate(e.target.value)}
                        />
                </div>

                {/* this form is for the Arrival Date text box */}
                <div className = "text-semibolded text-center">
                    <label className = "ml-1 relative block text-left" htmlFor = "arrivalDate">Arrival Date: </label>
                    <input 
                        className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1 w-28" 
                        type="text" 
                        id="arrivalDate" 
                        name="arrivalDate" 
                        placeholder="DD MM YY"
                        value = {arrivalDate}
                        onChange={e => setArrivalDate(e.target.value)}
                        />
                </div>

                {/* Search Button */}
                <button
                    type = "submit" 
                    className = "bg-marine hover:bg-deep_marine text-white text-center text-sm font-bold px-4 py-0.5 leading-tight rounded w-24 h-9 ml-1 mt-6">
                    <Link href="/api/searchFlights" className="no-underline text-white">Search ➜</Link>
                </button>
                
            </div>
            </form>
            <div className="flex flex-row justify-left gap-x-2.5 mx-10">
                <TripButton>
                </TripButton>
            </div>
        </div>
    );
};

export default SearchBar;