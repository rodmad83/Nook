import Image from "next/image";
import Link from "next/link";

export default function HeiWay() {
  const heiWayItems = [
    {
      id: "curiosity",
      title: "Curiosity and Creativity",
      icon: "/images/curiosity-icon.webp",
      description: "The foundation of learning is fueled by curiosity and creativity.",
      content: "At Nook Junior School, we believe children's innate desire to wonder, inquire, delve into new ideas, and explore should be nurtured and celebrated."
    },
    {
      id: "participation",
      title: "Active Participation",
      icon: "/images/active-icon.webp",
      description: "Active participation fosters a sense of capability, ownership, and dedication.",
      content: "Children, similar to adults, thrive when they can take the lead and be proactive. Taking responsibility also teaches children the importance of accountability."
    },
    {
      id: "trust",
      title: "Culture of Trust",
      icon: "/images/trust-icon.webp",
      description: "Trust is like a superpower that simplifies everything.",
      content: "When there is a culture of trust within the school community, it allows everyone to concentrate on what truly matters, knowing that others are giving their best."
    },
    {
      id: "sustainable",
      title: "Sustainable Way of Living",
      icon: "/images/sustainable-icon.webp",
      description: "Living sustainably involves considering not just the environment, but also the economic and social aspects.",
      content: "This includes safeguarding natural resources, championing biodiversity, and minimizing pollution and waste."
    },
    {
      id: "learning",
      title: "Learning Everywhere, All the Time",
      icon: "/images/learning-icon.webp",
      description: "At Nook Junior School, learning does not only happen in a classroom or at school, it happens everywhere.",
      content: "Every moment and interaction holds valuable lessons for both children and adults, which provides endless learning opportunities."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-hei-light">
      <div className="container">
        <h2 className="section-heading text-3xl md:text-4xl mb-16">
          WE DO IT THE NOOK WAY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {heiWayItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-medium text-hei-green mb-2">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/enrolment-journey"
            className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
          >
            BOOK A TOUR
          </Link>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-caecilia text-hei-green mb-8 text-center">
            NOOK WAY in practice
          </h3>

          <div className="space-y-12">
            {heiWayItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 p-6 rounded-lg ${index % 2 === 0 ? 'bg-hei-peach/10' : 'bg-hei-mint/10'}`}
              >
                <div className="md:w-1/6 flex justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="md:w-5/6">
                  <h4 className="text-xl font-caecilia text-hei-green mb-3">{item.title}</h4>
                  <p className="font-medium text-hei-green mb-3">{item.description}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
