import React from 'react';

const Contact = () => {

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
    }

  return (
    <div className="min-h-screen mt-25 bg-gray-50 px-6 py-12 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question about products, orders, or anything else, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={()=>OnSubmitHandler} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Name"
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-dull text-white font-medium py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-primary">Contact Details</h3>
              <p className="mt-2">📍 Pant Nagar, Saharanpur, Uttar Pradesh</p>
              <p>📞 +91 7078149204</p>
              <p className='pl-6.5'>+91 9027991613</p>
              <p>📧 vegedo@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">Working Hours</h3>
              <p className="mt-2">🕒 Mon – Sat: 9:00 AM – 8:00 PM</p>
              <p>📦 Closed on Sundays</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:underline text-primary-dull">Instagram</a>
                <a href="#" className="hover:underline text-primary-dull">Facebook</a>
                <a href="#" className="hover:underline text-primary-dull">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
