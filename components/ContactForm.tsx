// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full my-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <form className="max-w-2xl mx-auto space-y-6">
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-white text-gray-700 border border-gray-200 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:border-gray-200"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white text-gray-700 border border-gray-200 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:border-gray-200"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-white text-gray-700 border border-gray-200 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:border-gray-200"
            id="message"
            placeholder="Your message"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            className="bg-red hover:bg-red text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
            type="button"
          >
            Send
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
