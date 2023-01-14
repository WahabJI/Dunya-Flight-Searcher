import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import {Duffel} from '@duffel/api'

export default async function searchFlights(req: NextApiRequest, res: NextApiResponse) {
  //const { origin, destination, departureDate, returnDate } = req.query as FlightSearchParams;

  // // try {
  // //   const response = await axios.get<{ data: any[] }>('https://api.duffel.com/flights/search', {
  // //     params,
  // //     headers: {
  // //       Authorization: 'Bearer duffel_test_PgT2P4hQvz2cjzloXzydwVSsR7kzW_8UAl-grcdRu3z',
  // //     },
  // //   });
  // //   res.status(200).json(response.data.data);
  // // } catch (error) {
  // //   console.error(error);
  // //   res.status(500).json({ message: 'An error occurred' });
  // // }
  try {
    const { from, to, departDate, arrivalDate } = req.body;
    res.redirect('/searchResults?from=${from}&to=${to}&departDate=${departDate}&arrivalDate=${arrivalDate}');
} catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
}
  // const duffel = new Duffel({
  //   token: 'duffel_test_PgT2P4hQvz2cjzloXzydwVSsR7kzW_8UAl-grcdRu3z',
  // })
  // const input = req.body.input
  // console.log(input)
  // try{
  //   duffel.offerRequests.create({
  //     slices : [
  //       {
  //         origin: "NYC",
  //         destination: "ATL",
  //         departure_date: "2023-06-21"
  //       },
  //       {
  //         origin: "ATL",
  //         destination: "NYC",
  //         departure_date: "2023-07-21"
  //       }
  //     ],
  //     passengers: [{ type: "adult" }, { type: "adult" }, { age: 1 }],
  //     cabin_class: "business",
  //     return_offers: false
  //   }).then(offer => {
  //     duffel.offers.list({
  //       offer_request_id: offer.data.id,
  //       sort: 'total_amount'
  //     }).then(test => {
  //       res.status(200).json(test.data)
  //     })
  //   })
  // }catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'An error occurred' });
  //   }
}
