import DevProfile from '@/components/exercises/DevProfile'
import FlashCard from '@/components/exercises/FlashCard'
import FlashCard2 from '@/components/exercises/FlashCard2.0'


export default function Home() {
  return (
    <main className="max-container">
      <FlashCard2 />
      <DevProfile />
    </main>
  );
}
