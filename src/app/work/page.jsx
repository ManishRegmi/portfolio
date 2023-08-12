import Link from 'next/link'
import React from 'react'

const page = () => {


    let projects = ["Heyya", "Nischal"]
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-6">
            <h3 className="text-4xl font-semibold text-white mb-6">Projects</h3>
            <div className="flex justify-between space-x-6">
                <div className="flex-1">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg" alt="Sujan Chaudhary" className="w-full h-[60vh] object-cover" />
                    </div>
                    <div className="mt-6 text-gray-400">
                        <p className="font-semibold">Time: August 2023</p>
                        <p className="mt-2">Description: This is a sample project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex-[0.2] text-white">
                    <p>List of Projects</p>
                    <ul className="space-y-4 pt-2">
                        {projects.map((data, index) => (
                            <li key={index} className="font-semibold">{data}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default page