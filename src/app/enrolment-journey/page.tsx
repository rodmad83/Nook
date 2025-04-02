import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Enrolment Journey - HEI Schools Gurugram Sec 49",
  description: "Learn about the enrolment process at HEI Schools Gurugram and begin your child's educational journey with us",
};

export default function EnrolmentJourney() {
  const enrollmentSteps = [
    {
      id: "inquiry",
      title: "Initial Inquiry",
      description: "Contact us via phone, email, or the form on this page to express your interest in HEI Schools Gurugram. Our admissions team will provide you with basic information and answer any initial questions you may have.",
      icon: "📱"
    },
    {
      id: "tour",
      title: "School Tour",
      description: "Schedule a visit to our campus to see the facilities, meet our team, and get a feel for the learning environment. This is an important step in understanding our unique educational approach and determining if it's the right fit for your family.",
      icon: "🏫"
    },
    {
      id: "application",
      title: "Application Submission",
      description: "Complete and submit the application form along with the required documents, including your child's birth certificate, immunization records, and previous school reports (if applicable).",
      icon: "📝"
    },
    {
      id: "assessment",
      title: "Child Interaction Session",
      description: "Schedule a time for your child to visit the school and interact with our teachers. This session helps us understand your child's development, interests, and needs, allowing us to prepare accordingly for their arrival.",
      icon: "👶"
    },
    {
      id: "decision",
      title: "Admission Decision",
      description: "After reviewing your application and the child interaction session, we will notify you of the admission decision. This typically happens within one week of the child interaction session.",
      icon: "✉️"
    },
    {
      id: "enrollment",
      title: "Enrolment Confirmation",
      description: "Upon acceptance, secure your child's place by completing the enrolment agreement and paying the registration fee. This step confirms your child's spot at HEI Schools Gurugram.",
      icon: "✅"
    },
    {
      id: "orientation",
      title: "Orientation",
      description: "Attend a parent orientation session before your child's first day. This session provides important information about school policies, daily routines, and tips for a smooth transition.",
      icon: "📚"
    },
    {
      id: "start",
      title: "First Day of School",
      description: "Your child begins their educational journey at HEI Schools Gurugram! We work closely with parents to ensure a comfortable and positive transition for every child.",
      icon: "🎒"
    }
  ];

  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-6">
          Enrolment Journey
        </h1>

        <p className="text-center max-w-3xl mx-auto mb-16">
          We are delighted that you are considering HEI Schools Gurugram for your child's education. Our enrolment process is designed to be straightforward while ensuring that we can meet each child's unique needs.
        </p>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enrollmentSteps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white p-6 rounded-lg shadow-md flex ${index % 2 === 0 ? 'md:transform md:translate-y-4' : ''}`}
              >
                <div className="mr-4 text-4xl" aria-hidden="true">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-caecilia text-hei-green mb-2">
                    <span className="inline-block bg-hei-green text-white w-7 h-7 rounded-full text-sm flex items-center justify-center mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-caecilia text-hei-green mb-6 text-center">
              Enrolment Form
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block text-hei-green font-medium mb-1">Child's Full Name</label>
                  <input
                    type="text"
                    id="childName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  />
                </div>

                <div>
                  <label htmlFor="childDob" className="block text-hei-green font-medium mb-1">Child's Date of Birth</label>
                  <input
                    type="date"
                    id="childDob"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  />
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-hei-green font-medium mb-1">Parent/Guardian Name</label>
                  <input
                    type="text"
                    id="parentName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  />
                </div>

                <div>
                  <label htmlFor="parentEmail" className="block text-hei-green font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="parentEmail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  />
                </div>

                <div>
                  <label htmlFor="parentPhone" className="block text-hei-green font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="parentPhone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-hei-green font-medium mb-1">Program of Interest</label>
                  <select
                    id="program"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                  >
                    <option value="">Select a program</option>
                    <option value="toddler">Toddler Program (1.5-2.5 years)</option>
                    <option value="preschool">Preschool Program (2.5-4 years)</option>
                    <option value="kindergarten">Kindergarten Program (4-6 years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-hei-green font-medium mb-1">Additional Information or Questions</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hei-bright-green"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 mr-2"
                />
                <label htmlFor="consent" className="text-sm">
                  I consent to HEI Schools Gurugram collecting and processing my personal information for the purpose of processing my enrolment inquiry and contacting me regarding my application.
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-hei-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Submit Enrolment Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-caecilia text-hei-green mb-4">
              Schedule a Tour
            </h2>
            <p className="mb-6">
              We welcome you to visit HEI Schools Gurugram to experience our unique learning environment firsthand. Please contact us to schedule a tour at a time convenient for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919910669519"
                className="px-6 py-2 bg-hei-bright-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call +91-9910669519
              </a>
              <a
                href="mailto:contact-us@heischoolssec49gurgaon.com"
                className="px-6 py-2 bg-hei-bright-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
