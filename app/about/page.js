import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-50 font-medium">
          Welcome to The ReserveNow
        </h1>

        <div className="space-y-8 text-accent-300">
          <p>
            Welcome to ReserveNow, your simple and reliable way to book the
            perfect cabin getaway. Whether you're planning a peaceful weekend in
            nature or a longer escape from the city, ReserveNow helps you find
            and reserve cabins that match your style, budget, and schedule. Our
            platform is designed to make the entire process smooth—from browsing
            to booking—so you can focus on relaxing, not planning.
          </p>
          <p>
            At ReserveNow, we believe that great trips start with great
            experiences. That’s why we carefully curate listings to ensure
            quality, comfort, and authenticity. With clear details, real photos,
            and transparent pricing, you always know exactly what to expect.
            Whether you’re looking for a cozy retreat in the woods, a lakeside
            cabin, or a modern mountain stay, we make it easy to discover places
            you’ll love.
          </p>
          <p>
            Our mission is to take the stress out of travel planning and bring
            you closer to the moments that matter. ReserveNow is built for
            travelers who value convenience, trust, and memorable stays. From
            quick bookings to responsive support, everything we do is focused on
            helping you reserve your next escape with confidence.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="A-Frame Cabin in the forest"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="THE 10 BEST Cottages in Ukraine 2026 (with Prices)"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-50 font-medium">
          About ReserveNow
        </h1>

        <div className="space-y-8 text-accent-300">
          <p>
            ReserveNow was created to make cabin booking effortless, intuitive,
            and enjoyable. We understand that planning a getaway should feel
            exciting—not overwhelming—so we built a platform that keeps
            everything simple and clear. From the moment you start browsing to
            the second your reservation is confirmed, every step is designed to
            save you time and help you book with confidence.
          </p>
          <p>
            What sets ReserveNow apart is our focus on quality and trust. Each
            cabin listing is thoughtfully presented with accurate details,
            high-quality images, and honest pricing, so there are no surprises
            when you arrive. Whether you're chasing quiet mornings in the forest
            or cozy nights by the fire, ReserveNow connects you with spaces that
            feel just right.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-accent-50 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
