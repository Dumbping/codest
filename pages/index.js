import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaGlobe,
  FaUsers,
  FaMoneyBillWave,
  FaBuilding,
  FaFlag,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SecureBank - Your Trusted Financial Partner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white sticky top-0 z-50">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">SecureBank</div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Home</a>
        <a href="#about" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">About</a>
        <a href="#features" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Features</a>
        <a href="#services" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">Services</a>
        <Link href="/login" className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded transition duration-300">
          Sign In
        </Link>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition duration-300">
          Sign Up
        </Link>
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    {isMenuOpen && (
      <div className="mt-4 md:hidden">
        <a href="#" className="block py-2 hover:bg-blue-700 px-3 rounded transition duration-300">Home</a>
        <a href="#about" className="block py-2 hover:bg-blue-700 px-3 rounded transition duration-300">About</a>
        <a href="#features" className="block py-2 hover:bg-blue-700 px-3 rounded transition duration-300">Features</a>
        <a href="#services" className="block py-2 hover:bg-blue-700 px-3 rounded transition duration-300">Services</a>
        <Link href="/login" className="block py-2 bg-white text-blue-600 hover:bg-blue-100 px-3 rounded transition duration-300 mt-2">
          Sign In
        </Link>
        <Link href="/signup" className="block py-2 bg-blue-500 hover:bg-blue-400 px-3 rounded transition duration-300 mt-2">
          Sign Up
        </Link>
      </div>
    )}
  </nav>
</header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-24 md:py-32">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
                Secure Your Financial Future
              </h1>
              <p className="text-xl mb-8 animate-fade-in-up">
                Experience banking reimagined with cutting-edge technology and
                personalized service.
              </p>
              <a
                href="#"
                className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold hover:bg-blue-100 transition duration-300 animate-pulse"
              >
                Get Started
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-0 w-full md:w-1/2 h-64 md:h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/banking-hero.jpg')" }}
          ></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              About SecureBank
            </h2>
            <div className="md:flex md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/about-image.jpg"
                  alt="About SecureBank"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  SecureBank is a leading financial institution committed to
                  providing innovative banking solutions for individuals and
                  businesses. With over 50 years of experience, we combine
                  traditional banking values with cutting-edge technology to
                  deliver unparalleled service.
                </p>
                <p className="text-gray-700 mb-4">
                  Our mission is to empower our clients to achieve their
                  financial goals through personalized advice, state-of-the-art
                  digital tools, and a wide range of financial products tailored
                  to their needs.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn more about our history →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (Why Choose Us) */}
        <section
          id="features"
          className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose SecureBank
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <FaShieldAlt className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-700">
                  State-of-the-art encryption and multi-factor authentication to
                  keep your assets safe.
                </p>
              </div>
              <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <FaMobileAlt className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Banking</h3>
                <p className="text-gray-700">
                  Manage your finances on-the-go with our user-friendly mobile
                  app.
                </p>
              </div>
              <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <FaChartLine className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Investment Tools</h3>
                <p className="text-gray-700">
                  Access powerful analytics and investment options to grow your
                  wealth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Personal Banking
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Checking
                    Accounts
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Savings
                    Accounts
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Credit Cards
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Personal
                    Loans
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Business Banking
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Business
                    Checking
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Merchant
                    Services
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Business
                    Loans
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Cash
                    Management
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Wealth Management
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Investment
                    Planning
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Retirement
                    Solutions
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Estate
                    Planning
                  </li>
                  <li className="flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> Trust
                    Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <FaUsers className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-xl">Account Holders</div>
              </div>
              <div>
                <FaMoneyBillWave className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">$50B+</div>
                <div className="text-xl">Total Transactions</div>
              </div>
              <div>
                <FaBuilding className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-xl">Branches</div>
              </div>
              <div>
                <FaFlag className="text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-xl">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                <div className="w-full flex-shrink-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      "SecureBank has transformed the way I manage my finances.
                      Their mobile app is intuitive and their customer service
                      is top-notch!"
                    </p>
                    <div className="font-semibold">
                      - Sarah J., Small Business Owner
                    </div>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      "I've been with SecureBank for over a decade, and their
                      investment advice has helped me secure a comfortable
                      retirement."
                    </p>
                    <div className="font-semibold">- Michael R., Retiree</div>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">
                      "As a first-time homebuyer, SecureBank guided me through
                      the mortgage process with ease. I couldn't be happier with
                      my experience!"
                    </p>
                    <div className="font-semibold">- Emily T., Homeowner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 md:w-2/3 mx-auto">
              <FAQItem
                question="How do I open an account?"
                answer="You can open an account online through our website or mobile app, or visit any of our branches for in-person assistance."
              />
              <FAQItem
                question="What are your interest rates for savings accounts?"
                answer="Our interest rates vary depending on the type of account and market conditions. Please check our rates page for the most up-to-date information."
              />
              <FAQItem
                question="Is online banking secure?"
                answer="Yes, we use industry-leading encryption and multi-factor authentication to ensure the security of your online and mobile banking experience."
              />
              <FAQItem
                question="How can I report a lost or stolen card?"
                answer="You can report a lost or stolen card immediately through our 24/7 customer service hotline or by logging into your online banking account and freezing your card."
              />
              <FAQItem
                question="Do you offer international wire transfers?"
                answer="Yes, we offer international wire transfers. You can initiate them through our online banking platform or visit one of our branches for assistance."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join SecureBank today and experience banking reimagined.
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            >
              Open an Account
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SecureBank</h3>
              <p className="text-sm text-gray-400">
                Your trusted financial partner since 1970.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>123 Banking St, Finance City</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@securebank.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaGlobe className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaUsers className />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaUsers className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaMoneyBillWave className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaBuilding className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2024 SecureBank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
