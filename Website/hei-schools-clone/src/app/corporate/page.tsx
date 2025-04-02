import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Corporate - HEI Schools Gurugram Sec 49",
  description: "HEI Schools Corporate partnerships and information about our organization",
};

export default function Corporate() {
  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-12">
          CORPORATE
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green mb-6">
              HEI Schools Global Network
            </h2>
            <p className="mb-5">
              HEI Schools is a global education company that provides early childhood education and care based on Finnish educational expertise. Founded in Helsinki, Finland, our mission is to bring high-quality education to children around the world.
            </p>
            <p className="mb-5">
              In partnership with the University of Helsinki, one of the world's leading universities in education, we have developed a comprehensive educational model that combines the best practices of Finnish early childhood education with local culture and requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-caecilia text-hei-green mb-4">Our Educational Philosophy</h3>
            <p className="mb-3">
              At HEI Schools, we believe that children learn best through play and exploration. Our curriculum is designed to foster curiosity, creativity, and a love of learning in every child.
            </p>
            <p>
              We focus on developing the whole child, including their social, emotional, cognitive, and physical skills. Our approach is child-centered, allowing each child to learn at their own pace and in ways that are meaningful to them.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green mb-6">
              Corporate Partnerships
            </h2>
            <p className="mb-5">
              HEI Schools partners with corporations, organizations, and entrepreneurs around the world to bring the Finnish educational model to new communities. We offer a range of partnership options, from full-scale school operations to teacher training and curriculum licensing.
            </p>
            <p>
              Each HEI Schools location is operated by local partners who understand the needs of their community. We provide comprehensive support, including teacher training, curriculum materials, and ongoing professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-hei-mint/20 p-6 rounded-lg">
              <h3 className="text-xl font-caecilia text-hei-green mb-4">For Businesses</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Corporate childcare solutions</li>
                <li>Employee well-being programs</li>
                <li>Parent support services</li>
                <li>Customized education packages</li>
              </ul>
            </div>
            <div className="bg-hei-peach/20 p-6 rounded-lg">
              <h3 className="text-xl font-caecilia text-hei-green mb-4">For Entrepreneurs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>School licensing opportunities</li>
                <li>Curriculum implementation</li>
                <li>Teacher training programs</li>
                <li>Operational support and guidance</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-caecilia text-hei-green mb-6">
              HEI Schools Gurugram: A Corporate Success Story
            </h2>
            <p className="mb-5">
              HEI Schools Gurugram, Sector 49 is operated by ADIEM Brilliance Pvt. Ltd., a local educational organization committed to bringing the highest quality education to the children of Gurugram. This partnership showcases how the HEI Schools model can be successfully adapted to local contexts while maintaining the core principles of Finnish education.
            </p>
            <p>
              Our Gurugram location serves as a model for future HEI Schools in India, demonstrating the effectiveness of our educational approach in diverse cultural settings.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/contact-us"
              className="inline-block rounded-md bg-hei-green text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors"
            >
              Contact Us for Partnership Inquiries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
