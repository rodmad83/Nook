import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About HEI - HEI Schools Gurugram Sec 49",
  description: "WELCOME TO HEI SCHOOLS GURUGRAM, SEC 49 A premier early childhood education center nestles in the suburban surroundings of Sohna",
};

export default function AboutHEI() {
  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-12">
          ABOUT <span className="text-hei-bright-green">HEI</span>
        </h1>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green mb-8">
            WELCOME TO HEI SCHOOLS GURUGRAM, SEC 49
          </h2>

          <div className="mb-10">
            <p className="mb-5">
              A premier early childhood education center nestles in the suburban surroundings of Sohna Road, Gurugram, Haryana, India. Situated on a sprawling 1500 square yards of land, our school offers a nurturing and stimulating environment where young minds can flourish.
            </p>
            <p className="mb-5">
              We, in collaboration with HEI SCHOOLS, Finland have crafted a comprehensive and innovative curriculum that brings to you the best of Finnish and International early childhood education because we believe that the early years of a child are the most crucial for the development and future success.
            </p>
            <p className="mb-5">
              We strive to provide ample opportunities to the children to engage in a variety of brain stimulating activities. Our classrooms and facilities are thoughtfully designed and furnished with age-appropriate material for the learning needs of the students. We facilitate to promote critical thinking, problem solving skills and hands-on learning exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/2311337494/688566906.png"
                alt="HEI Schools Classroom"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/2311337494/1996272895.jpeg"
                alt="HEI Schools Activities"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/2311337494/2577329229.png"
                alt="HEI Schools Children"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="my-10">
            <p className="mb-5">
              A school is known by its educators, and our team comprises of warm, experienced and dedicated individuals who are passionate about imparting quality education. With all the activities and learning practices we intend to encourage children to explore, engage, enquire and grow under the supervision but at their own pace and comfort.
            </p>
            <p className="mb-5">
              At HEI Schools Gurugram Sec-49, our focus is on the mindset of the children which should develop love for learning and be curious to explore throughout their journey, the importance of following holistic approach to education is our priority. We emphasize on the development of essential life skills, such as collaboration, empathy, creativity and resilience in addition to academic excellence.
            </p>
            <p className="mb-5">
              Our outdoor spaces are welcoming and structured, providing children the chance to connect with nature and engage in active play. The green zone of the school includes playground and garden area which provide a safe and enriching environment for physical development, imagination, and social interaction.
            </p>
            <p className="mb-5">
              We believe in building up the HEI community by establishing the significance of strong partnerships between parents and educators. We wholeheartedly encourage parental involvement and maintain open lines of communication, ensuring that families feel supported and engaged in their child's learning journey.
            </p>
            <p className="mb-5">
              We look forward for your visit to us at HEI Schools Gurugram, Sector 49 to discover a world of educational excellence, where young learners thrive in a nurturing and inspiring environment. Contact us today to learn more about our programs and enrolment options.
            </p>
            <p>
              We look forward to embarking on this educational journey together.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/enrolment-journey"
              className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
            >
              BOOK A TOUR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
