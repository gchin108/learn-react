import Image from 'next/image'
import React from 'react'
import ProfilePic from "@/public/assets/Images/jojo21.jpg"
import { skills } from '@/constants'

const DevProfile = () => {
  return (
    <div className="mt-4 flex">
      <div className="w-[20%] border-2">
        <Image src={ProfilePic} className="h-[300px] object-cover" />
      </div>

      <div className=" p-10 w-[40%] flex flex-col justify-between border-2">
        <h1 className="text-2xl font-bold font-mono">Giorgio Chin</h1>
        <p className="text-gray-400">
          Full-stack web developer and yogi. When not coding or doing yoga, I
          like to day dream, to cook (and eat).
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 w-fit rounded-md"
              style={{ backgroundColor: item.color }}
            >
              <span>{item.skill}</span>
              {item.level === "advanced" && <span>💪</span>}
              {item.level === "intermediate" && <span>👍</span>}
              {item.level === "beginner" && <span>👶</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevProfile