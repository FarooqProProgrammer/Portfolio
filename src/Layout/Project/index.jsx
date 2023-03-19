import React from 'react'
import { Animated } from "react-animated-css";
export default function Project() {
    return (
        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
            <section class="bg-gray-100 py-16">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-4 text-center">Our Projects</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/500" alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                                    <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                                    <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/500" alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                                    <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                                    <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/500" alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                                    <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                                    <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/500" alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                                    <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                                    <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/500" alt="Project Image" class="w-full h-48 object-cover" />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                                    <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit euismod, commodo nulla in, auctor mauris.</p>
                                    <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Animated>

    )
}
