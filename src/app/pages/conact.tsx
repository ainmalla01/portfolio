'use client';

import React from 'react';

const ContactMe = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4" id='contact'>
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">
          <span className="text-green-500">Contact me</span>
        </h2>
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-2">
          Let's Discuss Your <span className="text-green-500">Project</span>
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Let's make something new, different and more meaningful. <br />
          Or make things more visual or conceptual.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-sm text-gray-500">Call me</p>
              <a href="tel:+8801639868687" className="text-lg font-medium text-gray-900">
                +8801639868687
              </a>
            </div>

            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-sm text-gray-500">Email me</p>
              <a href="mailto:ahmedtanvir467@gmail.com" className="text-lg font-medium text-gray-900">
                ahmedtanvir467@gmail.com
              </a>
            </div>

            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-medium text-gray-900">Zakiganj, Sylhet, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="input" />
              <input type="email" placeholder="Your email" className="input" />
              <input type="text" placeholder="Phone number" className="input" />
              <input type="text" placeholder="Budget" className="input" />
            </div>
            <textarea placeholder="Message" className="input h-32 resize-none"></textarea>
            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
