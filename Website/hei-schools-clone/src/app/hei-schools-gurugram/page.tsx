import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "HEI Schools Gurugram - HEI Schools Gurugram Sec 49",
  description: "Learn about our HEI Schools Gurugram facility, programs, and educational approach",
};

export default function HEISchoolsGurugram() {
  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-12">
          HEI Schools Gurugram
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src="/images/hero-image.jpeg"
                alt="HEI Schools Gurugram Facility"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <p className="mb-5">
              HEI Schools Gurugram, Sector 49 is our flagship location in India, offering world-class early childhood education based on the renowned Finnish educational model. Our school provides a nurturing and stimulating environment where children can develop their full potential through play-based learning and exploration.
            </p>

            <p className="mb-5">
              Located in the vibrant community of Sector 49, our school features purpose-built facilities designed with children in mind. From spacious classrooms to outdoor play areas, every aspect of our school is crafted to create an optimal learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-caecilia text-hei-green mb-4">
                Our Facilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Modern, airy classrooms with natural light</li>
                <li>Age-appropriate play areas and learning corners</li>
                <li>Outdoor playground with natural elements</li>
                <li>Dedicated art and craft spaces</li>
                <li>Dining area serving nutritious meals</li>
                <li>Library with a diverse collection of books</li>
                <li>Multipurpose hall for activities and events</li>
                <li>Safe and secure campus with CCTV monitoring</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-caecilia text-hei-green mb-4">
                Our Programs
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Toddler Program:</strong> Ages 1.5-2.5 years</li>
                <li><strong>Preschool Program:</strong> Ages 2.5-4 years</li>
                <li><strong>Kindergarten Program:</strong> Ages 4-6 years</li>
                <li><strong>Extended Day:</strong> Before and after-school care</li>
                <li><strong>Holiday Programs:</strong> During school breaks</li>
                <li><strong>Parent-Child Workshops:</strong> Monthly sessions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-caecilia text-hei-green mb-4">
              Our Approach
            </h2>
            <p className="mb-4">
              At HEI Schools Gurugram, we implement the Finnish educational approach, which is widely recognized as one of the most effective in the world. Our curriculum is designed to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Foster children's natural curiosity and love of learning</li>
              <li>Develop essential social and emotional skills</li>
              <li>Build confidence and independence</li>
              <li>Encourage creativity and critical thinking</li>
              <li>Promote physical well-being and healthy habits</li>
              <li>Create a strong foundation for future academic success</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-caecilia text-hei-green mb-4">
              Our Team
            </h2>
            <p className="mb-5">
              Our educators are the heart of HEI Schools Gurugram. Each member of our teaching team is carefully selected based on their qualifications, experience, and, most importantly, their passion for early childhood education. All our teachers receive specialized training in the Finnish educational approach, ensuring they can effectively implement our unique curriculum.
            </p>
            <p>
              Our staff includes lead teachers, assistant teachers, specialists in music, art, and physical education, and administrative personnel who work together to create a positive and enriching experience for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-hei-mint/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">School Hours</h3>
              <p>Monday to Friday</p>
              <p className="font-medium">8:00 AM - 4:00 PM</p>
            </div>

            <div className="bg-hei-peach/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">Location</h3>
              <p>Plot No. 3, W-Block, Sai dham road</p>
              <p>Uppal Southend, Sector 49</p>
              <p>Gurugram, Haryana - 122018</p>
            </div>

            <div className="bg-hei-sand/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">Contact</h3>
              <p>+91-9910669519</p>
              <p>+91-9910669507</p>
              <p>contact-us@heischoolssec49gurgaon.com</p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/enrolment-journey"
              className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
            >
              ENROLL NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
