import React from 'react'
import { FaCode,FaMobileAlt,FaChartLine } from "react-icons/fa"

export default function Services() {
    return (
        <section class="bg-gray-100 py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">Services</h2>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                            <div class="text-4xl mb-4">
                                    <FaCode />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Web Development</h3>
                            <p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                            <div class="text-4xl mb-4">
                                <FaMobileAlt />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Mobile App Development</h3>
                            <p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                            <div class="text-4xl mb-4">
                                    <FaChartLine />
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Digital Marketing</h3>
                            <p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
