import React from "react";
import { useState } from "react";

// import Web3 from "web3";
import { NFT } from "./constants/constants"
import { NFTAbi } from "./constants/constants";

export default function profile() {

  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setUserAddress] = useState();
  const [images, setImages] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [property, setProperty] = useState([]);

  const connectWallet = async () => {
    setLoading(true);
    console.log(loading);
    console.log("== Connecting Wallet");

    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      console.log(window.web3);
      await window.ethereum.enable();
      await accountChangeHandler();
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      await accountChangeHandler();
    }
    // Non-dapp browsers...
    else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const accountChangeHandler = async () => {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    // Setting an address data
    setUserAddress(accounts[0]);
    console.log("User Address: ", accounts[0]);
    await getNFTs();
    setConnected(true);
    setLoading(false);
  };

  const parseURL = async (url) => {
    const data = await fetch(`https://${url}`);
    const json = await data.json();
    // console.log(json);
    return json;
  };
  
  const getNFTImage = async (url) => {
    let imageURL = await parseURL(url);
    let image = imageURL.image;
    image = image.toString();
    return "https://" + image.slice(8);
  };

  const getNFTdesc = async (url) => {
    let descURL = await parseURL(url);
    let desc = descURL.description;
    return desc;
  };

  const getNFTName = async (url) => {
    let nameURL = await parseURL(url);
    let name = nameURL.name;
    return name;
  };

  const getNFTprops = async (url) => {
    let propsURL = await parseURL(url);
    let attributes = propsURL.attributes;
    return attributes;
  }

  const getNFTs = async () => {
    const web3 = window.web3;
    const professionalNFT = new web3.eth.Contract(NFTAbi, NFT);

    let tokenCount = await professionalNFT.methods.tokenCount().call();
    console.log("Token Count: ", tokenCount);

    let estateList = [];
    let imageList = [];
    let estateDetailList = [];
    let verifiedList = [];
    let propertyList = [];

    for (var i = 1; i <= tokenCount; i++) {
      // const estate = await marketplace.methods.estates(i).call();
      // estateList.push(estate);
      // console.log(estate.verified)
      // verifiedList.push(estate.verified);
      const tokenUri = await professionalNFT.methods.tokenURI(i).call();
      console.log("Token URI: ", tokenUri);

      const img = await getNFTImage(tokenUri);
      console.log("Image: ", img)
      imageList.push(img);

      const desc = await getNFTdesc(tokenUri);
      setDescription(desc);
      console.log(desc);

      const name = await getNFTName(tokenUri);
      setName(name);
      console.log(name);

      const property = await getNFTprops(tokenUri);
      setProperty(property);
      console.log(property);
      // console.log(property[0].trait_type," : ",property[0].value);
      // console.log("first element of first property:", property[0][0]);

      // const documentURI = await document.methods.tokenURI(i).call();
      // const pd = await parseURL(documentURI);
      // const doc = await getDocument(pd.image);
      // console.log(doc.toString());
      // estateDetailList.push(pd.name);
    }
    // setVerified(verifiedList);
    // setEstates(estateList);
    setImages(imageList);
    // setEstateDetails(estateDetailList);
    // console.log("Images: ", imageList);
    // console.log(productList);
    // console.log(productDetailList);
    setLoading(false);
  };

  return (
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
      <div style={{ margin: "50px" }} class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Applicant Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Margot Foster
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Application for</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Backend Developer
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                $120,000
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">About</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Attachments</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <button
                        onClick={()=>connectWallet()}
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div style={{ margin: "50px" }}>
      {/* <div  class="flex justify-center items-center  bg-white shadow sm:rounded-lg"> */}
      
<a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xxxl hover:bg-gray-100 ">
    <img class="object-cover w-5/12 rounded-t-lg  md:h-auto md:rounded-none md:rounded-l-lgx" src="https://www.w3schools.com/images/img_cybermonday_300.png" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

      </div>
    </div>
    // </div>
  );
}
