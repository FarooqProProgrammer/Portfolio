import React from 'react'
import { Animated } from "react-animated-css";

export default function Contact() {
    return (
        <Animated animationIn="zoomInDown" animationOut="zoomOutDown" isVisible={true}>
            <section className="bg-white py-16" id='contact'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Contact Us</h2>
                        <p className="mt-2 leading-6 text-gray-500">Get in touch with us to learn more about our services.</p>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="max-w-lg w-full">
                            <form className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" type="text" name="name" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="mt-1">
                                        <input class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" type="email" name="email" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="mt-1">
                                        <input class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" type="tel" name="phone" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" rows="4" name="message" required></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button class="w-full py-3 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-[#e74c3c] bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Animated>

    )
}
