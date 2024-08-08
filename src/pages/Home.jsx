import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import About from './About';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="food" src="src/assets/Images/image1.jpeg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            WELCOME TO HOUSING
            </h1>
            <p className="mb-8 leading-relaxed">
            Welcome to HOUSING ,your trusted partner in finding the perfect home. Whether you are looking to buy, rent, or sell, 
                    our dedicated team of professionals is here to guide you through every step of the process. 
                    With a wide range of properties and personalized service, we ensure that your real estate journey is smooth and stress-free. 
                    Explore our listings today and discover a place you'll love to call home!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <Link to="/About">About</Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/Contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
<h1 className="text-4xl text-center text-green-500"><b>Services</b></h1>
<Services/>
<h1 className="text-4xl text-center text-green-500"><b>About</b></h1>
<About/>
<h1 className="text-4xl text-center text-green-500"><b>Contact</b></h1>
<Contact/>

</div>
    </>
  );
}

export default Home;
