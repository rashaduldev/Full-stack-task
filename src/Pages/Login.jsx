import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-8">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>
          <p className="mb-6">Enter your credentials to access your account</p>
          
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <a href="#" className="text-sm text-blue-600 float-right mt-2">Forgot Password?</a>
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">I agree to the <a href="#" className="text-blue-600">Terms & Policy</a></label>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md mb-4">Sign In</button>
          </form>

          <div className="flex justify-between items-center mb-6">
            <button className="border w-full mr-2 py-2 flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Google.png/600px-Logo_2013_Google.png"
                alt="Google"
                className="w-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="border w-full ml-2 py-2 flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-5 mr-2"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm">
            Have an account? <a href="#" className="text-blue-600">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Right Side - Promotional Image */}
      <div className="hidden md:block w-1/2 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1602524815680-f38802143a99"
          alt="Promo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="bg-blue-600 p-3 rounded-full mb-4">
            <h1 className="text-3xl font-bold">Furni<span className="text-blue-300">Flex</span></h1>
          </div>
          <p className="text-center px-4">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;