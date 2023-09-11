import { PageLinks } from "@/constants"
import Link from "next/link";

const LeftBar = () => {
  return (
    <div className="absolute ml-2 top-3 max-lg:hidden">
      <h2 className="text-md font-mono mb-5">Menu</h2>
      {PageLinks.map((page, index) => (
        <div key={index} className="flex flex-col gap-2">
          {page.links.map((item, subIndex) => (
            <div key={subIndex}>
              <Link href={item.link}>
                <span className="hover:text-coral-red text-gray-400">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftBar