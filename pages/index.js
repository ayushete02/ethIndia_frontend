import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
  <div>
        <div class="isolate bg-white">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="px-6 pt-6 lg:px-8">
            <div>
              <nav
                class="flex h-9 items-center justify-between"
                aria-label="Global"
              >
                <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img
                      class="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div class="flex lg:hidden">
                  <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                  <a
                    href="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Product
                  </a>

                  <a
                    href="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Company
                  </a>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <a
                    href="#"
                    class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log in
                  </a>
                </div>
              </nav>
              <div role="dialog" aria-modal="true">
                <div
                  focus="true"
                  class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                >
                  <div class="flex h-9 items-center justify-between">
                    <div class="flex">
                      <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                          class="h-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="flex">
                      <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      >
                        <span class="sr-only">Close menu</span>
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                      <div class="space-y-2 py-6">
                        <a
                          href="#"
                          class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          Product
                        </a>

                        <a
                          href="#"
                          class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          Features
                        </a>

                        <a
                          href="#"
                          class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          Marketplace
                        </a>

                        <a
                          href="#"
                          class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          Company
                        </a>
                      </div>
                      <div class="py-6">
                        <a
                          href="#"
                          class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        >
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main>
            <div class="relative px-6 lg:px-8">
              <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                  <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <span class="text-gray-600">
                        Announcing our next round of funding.{" "}
                        <a href="#" class="font-semibold text-indigo-600">
                          <span
                            class="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                          Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Safeguard All The Documents
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Web3Locker allows the users to create their accounts and upload their documents. These verified documents can be shared and accessed by the user as desired. It also uses the concept of zero knowledge proof to verify the documents.
                    </p>
                    <div class="mt-8 flex gap-x-4 sm:justify-center">
                      <a
                        href="#"
                        class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                      >
                        Login
                        <span class="text-indigo-200" aria-hidden="true">
                          {/* &rarr; */}
                        </span>
                      </a>
                      <a
                        href="#"
                        class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                      >
                        Register
                        <span class="text-gray-400" aria-hidden="true">
                          {/* &rarr; */}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                      class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                      viewBox="0 0 1155 678"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                        fill-opacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                      />
                      <defs>
                        <linearGradient
                          id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                          x1="1155.49"
                          x2="-78.208"
                          y1=".177"
                          y2="474.645"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#9089FC"></stop>
                          <stop offset="1" stop-color="#FF80B5"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </div>
        <div class="bg-white py-24 sm:py-32 lg:py-40">

<section style={{margin:"100px", marginTop:"-200px"}} class=" pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap justify-center">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
          <span class="text-primary mb-2 block text-lg font-semibold">
            Our Blogs
          </span>
          <h2
            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            Our Recent News
          </h2>
          <p class="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mx-auto mb-10 max-w-[370px]">
          <div class="mb-8 overflow-hidden rounded">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
              alt="image"
              class="w-full"
            />
          </div>
          <div>
            <span
              class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Dec 22, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                The Arcana Network
              </a>
            </h3>
            <p class="text-body-color  text-gray-600 text-base">
            More convenience to design and integrate the dApp is possible since it is powered by the Arcana Network, which offers total data protection and access control for user data.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mx-auto mb-10 max-w-[370px]">
          <div class="mb-8 overflow-hidden rounded">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
              alt="image"
              class="w-full"
            />
          </div>
          <div>
            <span
              class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Mar 15, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
               Login with Unstoppable Domains
              </a>
            </h3>
            <p class="text-body-color  text-gray-600 text-base">
            Thanks to Unstoppable, users have control over login credentials and the developers can avoid hosting database of user information by requesting access when needed.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mx-auto mb-10 max-w-[370px]">
          <div class="mb-8 overflow-hidden rounded">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
              alt="image"
              class="w-full"
            />
          </div>
          <div>
            <span
              class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Jan 05, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
              Privacy with Polygon ID
              </a>
            </h3>
            <p class="text-body-color  text-gray-600 text-base">
            Since Polygon ID is private, access control is based on proving verifiable information rather than sharing it with the verifier (Zero Knowledge concept).This ensures the Right of access to apps with user anonymity
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-lg font-semibold leading-8 text-indigo-600">Locker</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Awesome features</p>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Web3Locker aims towards making it convenient and secure for users to store and share documents</p>
    </div>

    <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
      <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">-</p>
            <p class="mt-2 text-base leading-7 text-gray-600">
Uses the decentralized platform which makes storing and accessing files faster.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">-</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Documents are verified to prevent any forgery or different files from being shared that are not associated to the original account.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
           <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">-</p>
            <p class="mt-2 text-base leading-7 text-gray-600">
Polygon ID applies zero-knowledge native protocols for ultimate user privacy.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
          
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">-</p>
            <p class="mt-2 text-base leading-7 text-gray-600">
Maintain control over information shared and your digital identity.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between m-4 md:p-6 dark:bg-gray-200">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">Digital Locker™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

</div>
  );
}
