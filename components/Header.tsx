import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>

        <h1>Medium Blog</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
