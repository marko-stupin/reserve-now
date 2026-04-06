import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="bg-accent-800 grid grid-cols-[3fr_4fr] gap-20 border border-accent-950 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin in ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-50 font-black text-7xl mb-5 translate-x-[-254px] bg-accent-950 p-6 pb-1 w-[150%]">
          Cabin in {name}
        </h3>

        <p className="text-lg text-accent-200 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-accent-200" />
            <span className="text-lg text-accent-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-accent-200" />
            <span className="text-lg text-accent-200">
              Located in the heart of the{" "}
              <span className="font-bold">{name}</span>
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-accent-200" />
            <span className="text-lg text-accent-200">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
