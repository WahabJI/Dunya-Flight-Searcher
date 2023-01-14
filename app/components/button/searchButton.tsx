import Link from 'next/link'
import { useState } from "react";
//this component is for the header at the top of the screen
const searchButton = () => {
        const [inputValue, setInputValue] = useState("");
        const [response, setResponse] = useState("");
        const handleSubmit = (event: any) => {
            event.preventDefault();
            fetch("../api/searchFlights", {
              body: JSON.stringify({ input: inputValue }),
            })
              .then((res) => res.json())
              .then((data) => setResponse(data.response));
          };    
    return (
        <button onClick={handleSubmit} className = "bg-marine hover:bg-deep_marine text-white text-center text-sm font-bold px-4 py-0.5 leading-tight rounded w-24 h-9 ml-1 mt-6">
            <Link href="/api/searchFlights" className="no-underline text-white">Search ➜</Link>
        </button>
    );
};

export default  searchButton; 