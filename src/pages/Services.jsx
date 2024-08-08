import React from "react";

const Services = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            We Are Here
            <br className="hidden lg:inline-block" /> Just For You
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            At HOUSING, we offer a comprehensive range of real estate services
            to cater to all your needs. Whether you're looking to buy, sell, or
            rent a property, our expert team is here to provide personalized
            support and guidance. We specialize in effective property marketing,
            seamless transactions, and tailored rental solutions. Additionally,
            our property management services ensure your investments are
            well-maintained, while our real estate consulting offers valuable
            insights to help you navigate the market with confidence. Let us
            assist you in achieving your real estate goals with ease and
            professionalism.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="src/assets/Images/image2.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="src/assets/Images/image3.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="src/assets/Images/image4.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="src/assets/Images/image5.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="src/assets/Images/image6.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="src/assets/Images/image7.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
