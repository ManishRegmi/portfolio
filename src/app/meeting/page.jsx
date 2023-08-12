"use client"

import React, { useState } from 'react';
import Datetime from 'react-datetime';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <h2 className='text-white'>Contact Form</h2>
            <div className="flex justify-center items-center h-screen bg-black gap-2">
                <div className="p-6 bg-white shadow-md rounded-lg w-500 h-[45%]">
                    <div className="mb-4">
                        <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">
                            Date and Time:
                        </label>
                        {/* <input type='date' /> */}
                        <Datetime className="mt-2 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500
               bg-white text-gray-700 shadow-sm hover:shadow-md focus:outline-none"/>
                    </div>

                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-6 bg-white shadow-md rounded-lg w-[50%]"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
