function Navbar() {
    return (
        <div>
            {/* <!-- Hero --> */}
            <div className="relative overflow-hidden">
                {/* <!-- Gradients --> */}
                <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
                </div>
                {/* <!-- End Gradients --> */}

                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-green-600 to-lime-500 text-transparent">
                                Nano: A vision for 2024
                            </p>

                            {/* <!-- Title --> */}
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-semibold text-green-800 text-4xl md:text-5xl lg:text-6xl">
                                    Selling Sprint Brands in the World
                                </h1>
                            </div>
                            {/* <!-- End Title --> */}

                            <div className="mt-5 max-w-3xl">
                                <p className="text-lg text-green-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere libero eaque tempore, vitae, nulla quis provident quasi esse cumque qui ratione fuga.</p>
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="mt-8 gap-3 flex justify-center">
                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Get started
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    <svg className="flex-shrink-0 w-4 h-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83"></path>
                                        <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF"></path>
                                        <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E"></path>
                                        <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262"></path>
                                        <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE"></path>
                                    </svg>
                                    Figma
                                </a>
                            </div>
                            {/* <!-- End Buttons --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero --> */}
        </div>
    )
}

export default Navbar