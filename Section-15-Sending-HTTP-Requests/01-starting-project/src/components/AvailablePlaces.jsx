import { useState, useEffect } from 'react'

import Places from './Places.jsx';
import ErrorPage from './Error.jsx'
import { sortPlacesByDistance } from "../loc.js"
import { fetchAvailablePlaces } from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
  // Triad of fetching data states: loading/fetching | data | error
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState()
  
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {
        const places = await fetchAvailablePlaces()

        // Provided by the browser
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places, 
            position.coords.latitude, 
            position.coords.longitude
          )
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })
        
      } catch (error) {
        setError({message: error.message || "Could not fetch places, please try again later."})
        setIsFetching(false)
      }
    }

    fetchPlaces()

    // === Alternative: Using then. ===

    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places)
    //   })
  }, []);

  if (error) {
    return <ErrorPage title="An error ocurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Data is loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
