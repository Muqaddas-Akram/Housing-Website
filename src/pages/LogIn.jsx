import React, { useState, useEffect } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setSubmitted(true); 
  };

  useEffect(() => {
    if (submitted) {
      alert('Login successfully'); 
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <section className="text-gray-600 body-font px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
          <h1 className="title-font font-medium text-3xl text-green-500 mb-4">HTML CSS Login Form</h1>
          <p className="leading-relaxed mt-4 text-center md:text-left">
            Welcome back! Please enter your credentials to access your account and continue your sweet journey with us.
            If you're new here, sign up to join our community of dessert lovers and never miss out on our latest treats and
            special offers. Happy indulging!
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/6 bg-green-500 rounded-lg p-8 flex flex-col mx-auto w-full max-w-md">
          <h2 className="text-white text-lg font-medium title-font mb-5">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-green-500 w-full bg-white mt-5 border-0 py-2 px-8 focus:outline-none hover:bg-green-200 rounded text-lg"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
