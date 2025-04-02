import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-hei-light pt-16 pb-8">
      <div className="container">
        {/* App Download Section */}
        <div className="mb-16">
          <h3 className="text-center uppercase text-2xl mb-8 text-hei-green font-caecilia">Download our app</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              className="flex items-center"
            >
              <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <div>
                  <div className="text-xs">Get it On</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </Link>
            <Link
              href="https://apps.apple.com"
              target="_blank"
              className="flex items-center"
            >
              <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 1H8C4.14 1 1 4.14 1 8v8c0 3.86 3.14 7 7 7h8c3.86 0 7-3.14 7-7V8c0-3.86-3.14-7-7-7zm-4 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h3 className="text-center uppercase text-2xl mb-8 text-hei-green font-caecilia">Follow us on Instagram</h3>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <div className="bg-hei-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </div>
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <div className="bg-hei-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <div className="bg-hei-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <div className="bg-hei-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=919910669519" target="_blank">
              <div className="bg-hei-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* School Logo and Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Nook Junior School Gurugram"
                width={200}
                height={70}
                className="h-20 w-auto"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row gap-2">
                <Link href="/" className="text-hei-green hover:text-hei-bright-green">Home</Link>
                <span className="hidden md:inline text-hei-green">|</span>
                <Link href="/enrolment-journey" className="text-hei-green hover:text-hei-bright-green">Book a School Tour</Link>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <Link href="/blog" className="text-hei-green hover:text-hei-bright-green">Blog</Link>
                <span className="hidden md:inline text-hei-green">|</span>
                <Link href="/contact-us" className="text-hei-green hover:text-hei-bright-green">Contact us</Link>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="mb-4">
              <div className="text-hei-green font-medium">+91-9910669519</div>
              <div className="text-hei-green font-medium">+91-9910669507</div>
            </div>
            <div className="text-hei-green">School hours: 08:00 am-04:00 pm</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-hei-green/70">
          © 2025 Nook Junior School Gurugram, Sector 49
        </div>
      </div>
    </footer>
  );
}
