import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="h-20 object-contain cursor-pointer"
            src="curiositylogo.png"
            alt=""
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/about">
          <h3>About</h3>
          </Link>
          
          <h3>Contact</h3>
          <h3 className="text-white bg-yellow-500 text-sm px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
