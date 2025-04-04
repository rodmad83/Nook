import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "HEI Schools Gurugram - HEI Schools Gurugram Sec 49",
  description: "Learn about our HEI Schools Gurugram facility, programs, and educational approach",
};

export default async function HEISchoolsGurugram() {
  const filePath = path.join(process.cwd(), 'content', 'homepage.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return (
    <div className="bg-hei-light py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-12">
          {data.title}
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

            <p className="mb-5">{data.intro1}</p>
            <p className="mb-5">{data.intro2}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-caecilia text-hei-green mb-4">Our Facilities</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {data.facilities?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-caecilia text-hei-green mb-4">Our Programs</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {data.programs?.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-caecilia text-hei-green mb-4">Our Approach</h2>
            <p className="mb-4">{data.approachIntro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {data.approachPoints?.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-caecilia text-hei-green mb-4">Our Team</h2>
            <p className="mb-5">{data.teamIntro}</p>
            <p>{data.teamDetails}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-hei-mint/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">School Hours</h3>
              <p>{data.schoolHoursDays}</p>
              <p className="font-medium">{data.schoolHoursTime}</p>
            </div>

            <div className="bg-hei-peach/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">Location</h3>
              {data.location?.map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <div className="bg-hei-sand/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-caecilia text-hei-green mb-3">Contact</h3>
              {data.contact?.map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
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
  )
}
