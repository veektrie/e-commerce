import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div classname="navbar-container">
      <p className="logo">
        <Link href="/"> Vee Accessories</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">{`3`}</span>
      </button>
    </div>
  );
};

export default Navbar;
