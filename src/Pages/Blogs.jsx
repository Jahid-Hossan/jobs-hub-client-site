import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto max-w-7xl'>

            <div>
                <div className="px-4 pt-24 mx-auto ">

                    <div className="w-full mx-auto mb-12  ">

                        <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" title="Rise of Tailwind - A Utility First CSS Framework">
                            What is an access token and refresh token? How do they work and where should we
                            store them on the client-side?
                        </h1>
                        <p className="text-gray-700">
                            Written by
                            <span className="byline author vcard" >
                                <a className="text-primary hover:text-primary-dark"><span > Jahid Hossan</span> </a>
                            </span>
                            on <time>Nov 11 2023</time>
                        </p>
                    </div>
                </div>

                <article
                    className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                    <span className="inline-block rounded bg-blue-600 p-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                    </span>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                What's an access token?
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            When a user logs in the authorization server issued an access token which is an Artifact that client application can use to make secure calls to an API server. When a client application needs Excess protected resources On a server on behalf of a user the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks and access certain resources.
                        </p>
                    </div>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                What's an Refresh token?
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            As we know for security Purposes, token may be valid for a short amount of time.Once they expire,Client application can use a refresh token to refresh the access token that is a refresh token is a credential artifact that lets client application get new access token without having to ask the user to login again.
                        </p>
                    </div>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                How do they work where should we store them on the client side?
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            Actually they both work together access token Help to authorize the user for accessing secure data. Here we need refresh token to because of security purposes once user does not have valid access token refresh token we will refresh the access token and make it accessible if the user is authorized.
                            We can store them in local Storage and cookies storage, Local students is not secured like cookie storage. Cookie storage is much better than local storage but it can be hacked. Moral of the story is cookie is much better than local storage but it is not 100 percent secure.
                        </p>
                    </div>
                </article>
            </div>

            <div>
                <div className="px-4 pt-24 mx-auto ">

                    <div className="w-full mx-auto mb-12  ">

                        <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" title="Rise of Tailwind - A Utility First CSS Framework">
                            What is express js? What is Nest JS?
                        </h1>
                        <p className="text-gray-700">
                            Written by
                            <span className="byline author vcard" >
                                <a className="text-primary hover:text-primary-dark"><span > Jahid Hossan</span> </a>
                            </span>
                            on <time>Nov 11 2023</time>
                        </p>
                    </div>
                </div>

                <article
                    className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                    <span className="inline-block rounded bg-blue-600 p-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                    </span>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                What is express js?
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            Express JS is the most popular web framework for for node js. It is Designed for building web application and Apis it has been called de facto standard server for Node.js. Express JS help developer to write backend server code with Javascript. It is very useful for real time collaboration single page application and streaming application as well.
                        </p>
                    </div>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                What is Node.JS
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            Note JS is an asynchronous even-driven javascript runtime. This is open source server environment it ran on Google Chrome v8 engine. Node.js allows developers to create both front-end and back-end application using javascript.
                        </p>
                    </div>


                </article>
            </div>

            <div>
                <div className="px-4 pt-24  mx-auto ">

                    <div className="w-full mx-auto mb-12  ">

                        <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" title="Rise of Tailwind - A Utility First CSS Framework">
                            Explanation of my Code?
                        </h1>
                        <p className="text-gray-700">
                            Written by
                            <span className="byline author vcard" >
                                <a className="text-primary hover:text-primary-dark"><span > Jahid Hossan</span> </a>
                            </span>
                            on <time>Nov 11 2023</time>
                        </p>
                    </div>
                </div>

                <article
                    className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                    <span className="inline-block rounded bg-blue-600 p-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                    </span>

                    <div>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                Explanation of my code?
                            </h3>
                        </a>

                        <p className="mt-2  text-md/relaxed text-gray-500">
                            I've built job portal website using html,css and javascript. I Used Tailwind CSS as a css framework. And I use node js. And many component library for give the minimalistic look of my website. My court are very simple and easy to understand. I have gathered out all the component Like banner, footer, header in one component folder. And all the beach web page in one pages folder. I have another folder for route and for authentication provider as well. And I have one hook folder where I used my custom created hook. And I have one firebase folder Where all of my firebase information stored. And I store all my secret code from Firefox I store in .env.local file.
                        </p>
                    </div>




                </article>
            </div>
        </div>
    );
};

export default Blogs;