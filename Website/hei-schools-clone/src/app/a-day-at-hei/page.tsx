import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A Day at HEI - HEI Schools Gurugram Sec 49",
  description: "Experience a typical day at HEI Schools Gurugram, see our daily routines and activities",
};

export default function ADayAtHEI() {
  const timelineItems = [
    {
      id: "arrival",
      time: "08:00 - 08:45",
      activity: "Arrival and Free Play",
      description: "Children arrive and engage in free play activities in their classroom or outdoor area, gradually transitioning into the school day."
    },
    {
      id: "morning-circle",
      time: "08:45 - 09:15",
      activity: "Morning Circle",
      description: "Children gather for morning circle time to greet each other, discuss the day's activities, share news, and sing songs."
    },
    {
      id: "learning-centers",
      time: "09:15 - 10:15",
      activity: "Learning Centers",
      description: "Children participate in teacher-guided learning activities at different centers, focusing on various developmental areas."
    },
    {
      id: "morning-snack",
      time: "10:15 - 10:45",
      activity: "Snack Time",
      description: "Children enjoy a nutritious morning snack, developing social skills and healthy eating habits."
    },
    {
      id: "outdoor",
      time: "10:45 - 11:45",
      activity: "Outdoor Exploration",
      description: "Weather permitting, children engage in outdoor activities, exploring nature, developing gross motor skills, and enjoying fresh air."
    },
    {
      id: "lunch",
      time: "11:45 - 12:30",
      activity: "Lunch",
      description: "Children eat a balanced lunch together, practicing table manners and engaging in conversations."
    },
    {
      id: "rest",
      time: "12:30 - 14:00",
      activity: "Rest Time",
      description: "Younger children nap while older children engage in quiet activities like reading or drawing."
    },
    {
      id: "specialized",
      time: "14:00 - 15:00",
      activity: "Specialized Activities",
      description: "Children participate in specialized activities like music, art, or physical education based on the day's schedule."
    },
    {
      id: "afternoon-snack",
      time: "15:00 - 15:30",
      activity: "Afternoon Snack",
      description: "Children enjoy an afternoon snack together."
    },
    {
      id: "departure",
      time: "15:30 - 16:00",
      activity: "Closing Circle and Departure",
      description: "Children gather to reflect on the day's activities, share experiences, and prepare for departure."
    }
  ];

  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-6">
          A Day at HEI
        </h1>

        <p className="text-center max-w-3xl mx-auto mb-16">
          At HEI Schools Gurugram, every day is filled with meaningful learning experiences, play, exploration, and growth. Here's a glimpse into what a typical day looks like for our children.
        </p>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-8">
            <Image
              src="https://ext.same-assets.com/2311337494/2260353441.jpeg"
              alt="Children engaged in learning activities at HEI Schools"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green text-center mb-10">
            Daily Schedule
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-[1px] top-0 bottom-0 w-0.5 bg-hei-green/20" />

            {/* Timeline items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-[9px] top-[10px] w-[18px] h-[18px] rounded-full bg-hei-bright-green" />

                  {/* Time */}
                  <div className={`md:w-[50%] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 text-left' : 'md:text-right md:pl-8'}`}>
                    <div className="font-caecilia text-hei-green text-xl mb-1">{item.time}</div>
                  </div>

                  {/* Activity */}
                  <div className={`md:w-[50%] pl-10 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <h3 className="font-medium text-hei-green text-lg mb-1">{item.activity}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-caecilia text-hei-green mb-6 text-center">
              Our Educational Approach in Action
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-caecilia text-hei-green mb-3">Learning Through Play</h3>
                <p className="mb-6">
                  At HEI Schools, we believe that play is the most natural and effective way for children to learn. Throughout the day, children engage in both free play and guided play activities that are carefully designed to develop various skills while fostering a love for learning.
                </p>

                <h3 className="text-xl font-caecilia text-hei-green mb-3">Child-Centered Approach</h3>
                <p>
                  Our daily schedule is flexible and responsive to children's needs and interests. Teachers observe children closely and adapt activities to support their individual development paths, ensuring that each child receives the right level of challenge and support.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-caecilia text-hei-green mb-3">Holistic Development</h3>
                <p className="mb-6">
                  Our daily activities are designed to support all aspects of child development - physical, social, emotional, cognitive, and creative. From outdoor play to collaborative projects, children develop a wide range of skills that prepare them for future success.
                </p>

                <h3 className="text-xl font-caecilia text-hei-green mb-3">Documentation and Reflection</h3>
                <p>
                  Teachers document children's learning journeys through photos, notes, and children's work samples. This documentation is shared with parents and used to reflect on children's progress and plan future learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/enrolment-journey"
            className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
          >
            Book a Tour to Experience HEI
          </Link>
        </div>
      </div>
    </div>
  );
}
