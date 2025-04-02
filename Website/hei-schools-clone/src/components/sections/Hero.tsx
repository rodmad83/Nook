import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background Container */}
      <div className="bg-hei-light">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-caecilia text-hei-green mb-4">
              WELCOME TO
              <br />
              <span className="block mt-2">Nook Junior School Gurugram, Sector 49</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green mt-8 mb-6">
              Best Preschool And Daycare In Gurgaon
            </h2>
          </div>

          {/* Hero Image and Content */}
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.jpeg"
                  alt="Nook Junior School Gurugram Interior"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  Nook Junior School Gurugram, Sector 49 is a premier International Preschool in India. It is based on the well-recognized Finnish Early Education Model that has been ranked the best globally. Our approach and methodology are based on the latest research in education and pedagogy, which is rigorously tested in preschools across Finland with proven results. The University of Helsinki is a founding educational partner.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  The Nook Junior School Gurugram will strictly adhere to the Curriculum & Pedagogy based on Finnish methods while aligning with the National Education Policy (NEP) issued by the Government of India in 2020. The facility itself will embody award-winning design principles, featuring Nordic light wooden textures that create a calming and welcoming learning environment for young children.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  We represent an innovative collaboration model that blends international expertise with local knowledge, setting a new benchmark for educational endeavours in India.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/about-nook-junior-school"
                  className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
                >
                  Know more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
