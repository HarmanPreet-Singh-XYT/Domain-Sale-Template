"use client"
import React, { useState } from 'react';
import sendMail from './api/Nodemailer';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    country: '',
    state: '',
    amount: '',
    company: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e:any) => {
    e.preventDefault();
    sendMail(formData.name, formData.email, formData.mobile, formData.message, formData.country, formData.state, formData.amount, formData.company);
    alert('Thank you for your offer. We will be in touch soon.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Domain for Sale
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          This domain is available for purchase. The minimum offer is <strong>$100</strong>.
        </p>
        <a
          href="https://www.namecheap.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mb-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 font-semibold transition"
        >
          Buy Now on Namecheap
        </a>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company (optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount you&apos;re willing to pay (min $100)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 font-semibold transition"
          >
            Submit Offer
          </button>
        </form>
      </div>
    </div>
  );
}
