"use client"
import React, { useState } from 'react';
import sendMail from './api/Nodemailer';

export default function Home() {
  const [loading, setloading] = useState(false);
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
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setloading(true);
    await sendMail(formData.name, formData.email, formData.mobile, formData.message, formData.country, formData.state, formData.amount, formData.company);
    setloading(false);
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
          disabled={loading}
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 font-semibold transition"
          >
            {loading ? <div role="status">
                          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div> : 
                  'Submit Offer'}
          </button>
        </form>
      </div>
    </div>
  );
}
