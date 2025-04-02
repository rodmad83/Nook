export default function EducationalApproach() {
  return (
    <section className="py-16 md:py-24 bg-hei-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center font-caecilia text-hei-green mb-12 max-w-4xl mx-auto">
          The Finnish education system and Nook Junior School successfully combine emotional intelligence and academic competence
        </h2>

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg font-medium italic text-hei-green">
            Competitive, performance and test based models are not good for children.
          </p>
          <p className="text-lg mt-4">
            At Nook Junior School, with the Finnish education model, we promote comprehensive growth, learning, development and the well-being of children, and provide a rich foundation for the progress of their emotional development, skills and competence.
          </p>
        </div>

        {/* Educational approach diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
          <div className="bg-hei-green text-white rounded-full p-8 w-48 h-48 flex flex-col items-center justify-center text-center">
            <span className="text-lg font-medium mb-2">MORE</span>
            <ul className="text-sm space-y-1">
              <li>Child interaction</li>
              <li>Creativity &amp; play</li>
              <li>Joy of learning</li>
              <li>Wellbeing</li>
              <li>Nature connection</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-hei-mint text-hei-green rounded-full p-6 w-32 h-32 flex flex-col items-center justify-center text-center mx-2 md:mx-4">
              <span className="text-base font-medium">LESS</span>
              <ul className="text-xs space-y-0.5">
                <li>Stress</li>
                <li>Testing</li>
                <li>Competition</li>
                <li>Homework</li>
                <li>Screen time</li>
              </ul>
            </div>

            <div className="text-center mt-4 md:mt-0 md:ml-8 font-medium text-xl text-hei-green">
              =
            </div>

            <div className="bg-hei-green text-white rounded-full p-6 w-32 h-32 flex items-center justify-center text-center mx-2 md:mx-4 mt-4 md:mt-0">
              <span className="text-base font-medium">BALANCED EDUCATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
