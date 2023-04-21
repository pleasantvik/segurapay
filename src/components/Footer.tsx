import React from "react";
import Link from "next/link";
import About from "@/pages/about";

const Footer = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/asset/images/world-map-min.png)`,
      }}
    >
      <div className="w-4/5 flex my-8 mx-auto">
        <div>
          <h6>Company</h6>
          <ul>
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
          <h6>Our Products</h6>
          <ul>
            <li>
              <Link href="/">Segura Wallet</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Developers</h6>
          <ul>
            <li>
              <Link href="/">Documentation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
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
          <h6>Contact Us</h6>
          <ul>
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
