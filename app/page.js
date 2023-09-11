// "use client"
import CurrencyConverter from '@/components/challenges/CurrencyConverter';
import Geolocation from '@/components/challenges/Geolocation';
import App from '@/components/challenges/TextExpander';
import DevProfile from '@/components/exercises/DevProfile'
import FlashCard from '@/components/exercises/FlashCard'
import FlashCard2 from '@/components/exercises/FlashCard2.0'
import StarRating from '@/components/projects/UsePopcorn/StarRating';
// import { useState } from 'react';



export default function Home() {
  // const [movieRating, setMovieRating] = useState(0)
  return (
    <main className="max-container">
      {/* <FlashCard2 />
      <DevProfile /> */}
      {/* <StarRating maxRating={5} messages={["Terrible","Bad", "Okay", "Good", "Great!"]}/> */}
      {/* <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p> */}
      {/* <App/> */}
      {/* <CurrencyConverter/> */}
      <Geolocation/>
    </main>
  );
}
