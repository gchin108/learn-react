import TipCalculator from '@/components/challenges/TipCalculator'
import AccordionV2 from '@/components/exercises/AccordionV2'
import DayCounterV2 from '@/components/exercises/DayCounterV2'
import UseState1 from '@/components/exercises/UseState1'
import EatNSplit from '@/components/projects/EatnSplit/App'


const UseState = () => {
  return (
    <div className="max-container grid grid-cols-2 gap-10">
      <UseState1 />
      <DayCounterV2 />
      <AccordionV2 />
      <div className='flex justify-center'>
        <TipCalculator />
      </div>
    </div>
  );
}

export default UseState