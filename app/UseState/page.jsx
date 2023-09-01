import AccordionExample from '@/components/exercises/AccordionComp'

import DayCounterV2 from '@/components/exercises/DayCounterV2'
import UseState1 from '@/components/exercises/UseState1'


const UseState = () => {
  return (
    <div className='max-container flex flex-col items-center gap-10'>
      <UseState1/>
      <DayCounterV2/>
      <AccordionExample/>
    </div>
  )
}

export default UseState