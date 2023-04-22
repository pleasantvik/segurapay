import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className="bg-[#00093E]"
      style={{
        backgroundImage: `url(/asset/images/world-map-min.png)`,
      }}
    >
      <div className="container py-4 flex my-8 gap-4  justify-between flex-wrap text-white">
        <div>
          <h6 className="mb-4 text-white">Company</h6>
          <ul className="opacity-70">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">
                Careers <button>We&apos;re hiring</button>
              </Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4">Our Products</h6>
          <ul className="opacity-70">
            <li>
              <Link href="/">Segura Wallet</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4">Developers</h6>
          <ul className="opacity-70">
            <li>
              <Link href="/">Documentation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4">Legal</h6>
          <ul className="opacity-70">
            <li>
              <Link href="/about">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Developer Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of service</Link>
            </li>
            <li>
              <Link href="/">Cookies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4">Contact Us</h6>
          <ul className="opacity-70">
            <li>
              <Link href="/">
                Kendall Square - Third Street Cambridge, MA USA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
