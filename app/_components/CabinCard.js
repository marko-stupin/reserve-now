import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-accent-400 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-accent-400"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-accent-950">
          <h3 className="text-accent-50 font-semibold text-2xl mb-3">
            Cabin in {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-accent-700" />
            <p className="text-lg text-accent-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-accent-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-accent-200">/ night</span>
          </p>
        </div>

        <div className="bg-accent-950 border-t border-t-accent-400 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-accent-400 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-accent-50"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
