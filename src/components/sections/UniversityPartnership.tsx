import Image from "next/image";

export default function UniversityPartnership() {
  return (
    <section className="py-16 md:py-24 bg-hei-mint/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <Image
              src="/images/panda-icon.png"
              alt="Nook Junior School Mascot"
              width={400}
              height={400}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-caecilia text-hei-green mb-6">
              Nook Junior School is founded in partnership with the University of Helsinki
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg">
                The Finnish model has been rigorously tested for decades with outstanding learning results. It combines the best and latest learning philosophies, models, and practices to meet the highest standards in education. At Nook Junior School, we adapt its holistic approach, emphasizing on a child's perspective without compromising academic results.
              </p>
              <p className="text-lg mt-4">
                As our co-founder, the education experts at the University of Helsinki are a part of our daily working team. Together, we constantly strive to research, plan, and innovate for a successful implementation of the Finnish early education system. This is done through a carefully designed plan by providing purposeful play, nurturing guidance from highly-trained teachers, as well as the opportunity to adopt learning as a natural process shaped by one's interests, all in due time. In this way, Learning Can Happen Everywhere, All The Time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
