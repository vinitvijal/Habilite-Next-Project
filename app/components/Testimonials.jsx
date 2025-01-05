import { cn } from "@/lib/utils";
import Marquee from "/components/ui/marquee";

const reviews = [
  {
    name: "Frank Castle",
    occupation: "The Punisher1",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa..",
    
  },
  {
    name: "Frank Castle",
    occupation: "The Punisher2",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa..",
    
  },
  {
    name: "Frank Castle",
    occupation: "The Punisher3",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa...",
    
  },
  {
    name: "Frank Castle",
    occupation: "The Punisher4",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa...",
    
  },
  {
    name: "Frank Castle",
    occupation: "The Punisher5",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa..",
    
  },
  {
    name: "Frank Castle",
    occupation: "The Punisher6",
    review: "After the death of Madhavrao Peshwa in 1772, his brother Narayanrao became peshwa (prime minister) of the Maratha Empire. His palace guards murdered Narayanrao in August 1773, and his uncle Raghunathrao (Raghoba) became Peshwa..",
    
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  occupation,
  review,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden p-4 border-b-2 border-r-2 rounder-bl-xl rounded-br-xl shadow-md shadow-blue-100",
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-lg font-medium dark:text-white/40">{occupation}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  );
};

function Testimonials() {
  return (
    <>
    <h1 className="text-3xl font-bold text-first flex justify-center item-center">Our Testimonials</h1>
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.occupation} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.occupation} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
        </>
  );
}
export default Testimonials;
