import { cn } from "@/lib/utils";
import Marquee from "/components/ui/marquee";

const reviews = [
  {
    name: "Dilip Kumar",
    occupation: "Businessman",
    review: "My weight was  123 kgs and life was very difficult for me. After exploring all the weight-loss options with no significant success, I decided to explore the possibility of bariatric surgery. I started looking for the best bariatric surgeon in Delhi NCR and finally met Dr. Kapil Agrawal. I underwent bariatric surgery, and after 11 months, I was 65 kg. i am ver happy with my decision. Many thanks to Dr. Kapil Agrawal.",

  },
  {
    name: "T.N. Kambara",
    occupation: "Businessman",
    review: "Dr. Kapil Agrawal and his team performed a sleeve gastrectomy about five months back. I had three minor cuts on my abdomen. I was discharged on the next day of surgery. The speed and extent of recovery at home have amazed my friends and family. I had lost about 24 kg of weight in 4 months, and the weight loss is still going on. My back feels much better, and now I can walk at least 3 miles at a stretch.",

  },
  {
    name: "SONU GANDHI",
    occupation: "Teacher",
    review: "I want to thank Dr. Kapil Agrawal and his team for the excellent results.  I underwent as a weight loss surgery  as i weigh 115 kg. He helped me in making the big decision. After eight months of surgery, I am so happy and relieved because my weight came down to 65 kg, and I feel very  energetic. I want to thank him for offering me a new lease on life. God bless him. Undoubtedly, one of the finest and best bariatric surgeons.",

  },
  {
    name: "Rajini",
    occupation: "Engineer",
    review: "I want to thank Dr. Kapil Agrawal and his team. My weight was 145 kg. Despite my best efforts, my weight kept increasing. I started looking for the best weight loss surgeon in Delhi, and after meeting some of the bariatric surgeons, my search finally got over after meeting Dr. Kapil Agrawal. He performed mini-gastric bypass on me, and after eight months, my weight is 85 kg. He is very kind and professional surgeon.",

  },
];


const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  name,
  occupation,
  review,
}) => {
  return (
    <figure
      className={cn(
        "relative w-[200px] sm:w-80 cursor-pointer overflow-hidden p-3 sm:p-4 border-first border-2 rounded-lg",
      )}
    > 
      <blockquote className="text-xs sm:text-sm pb-1">{review}</blockquote>
      <div className="mt-3 flex flex-row items-center">
        <div className="flex flex-col">
          <figcaption className="text-lg sm:text-xl font-semibold dark:text-white">
            {name}
          </figcaption>
          <span className="text-sm sm:text-base font-medium dark:text-white/40">{occupation}</span>
        </div>
      </div>
    </figure>
  );
};

function Testimonials() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-[450px] sm:h-[500px] overflow-hidden bg-background">
        <h1 className="text-2xl sm:text-3xl font-bold text-first flex justify-center items-center mb-6">Our Testimonials</h1>
        <Marquee pauseOnHover className="w-full [--duration:20s] mb-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </>
  );
}
export default Testimonials;
