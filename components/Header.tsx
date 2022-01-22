import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img src="https://links.papareact.com/yvf" alt="" />
        </Link>

        <h1>Medium Blog</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
