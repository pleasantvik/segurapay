import React from "react";

const Job = ({ jobOpening }: any) => {
  return (
    <>
      <header className="bg-[#EFFBFF]">
        <div className="container px-4 mx-auto text-center py-8">
          <h2 className="text-[#243AC0]">Careers</h2>
          <h1 className="text-[#1E1D1D] font-semibold">{jobOpening?.title}</h1>
        </div>
      </header>
      <section className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <h2 className="text[#1E1D1D] font-semibold">About us</h2>
            <p className="text-[#525252]">
              SeguraPay is a product-driven company that is focused on solving
              financial/ payment problems. The company currently offers two
              products, SeguraPay and SeguraWallet, which are designed to
              provide secure, convenient, and efficient payment solutions.
            </p>
            <p className="mt-4 text-[#525252]">
              We are a cutting-edge financial technology company that is
              revolutionizing the way people manage their money. Founded in
              2022, SeguraPay is dedicated to using technology to empower
              individuals and businesses to make better financial decisions and
              achieve their financial goals. Reliable and trustworthy partner
              for financial institutions and businesses seeking innovative
              payment solutions.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-[#1E1D1D] font-semibold">About the role</h2>
            <p className="text-[#525252]">
              We are looking for an experienced engineer who is excited about
              creating a thoughtful billing experience for our clients and their
              customers.
            </p>
          </div>
          <div>
            <h2 className="text[#1E1D1D] font-semibold">Minimum Requirement</h2>
            <ul className="list-disc">
              <li>
                3+ years work experience using Typescript, GraphQL, or Node
              </li>
              <li>
                Build out greenfield applications on top of our fast growing
                invoice platform.
              </li>
              <li>
                Work with design and product to scope and invent new client
                features
              </li>
              <li>
                Contribute to frontend and backend systems that drive our
                billing engine
              </li>
              <li>
                Empower the rest of the company by building infrastructure to
                improve feature velocity
              </li>
              <li>
                Work closely with co-founders and customers to inform
                what&apos;s possible, what&apos;s difficult, and what&apos;s
                easy Much more!
              </li>
              <li>
                As a small startup, we need folks to pitch in wherever they can.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text[#1E1D1D] font-semibold">
              Compensation & Benefit
            </h2>
            <ul className="list-disc">
              <li>
                Excellent medical, dental, vision, and life insurance coverage,
                including a One Medical membership
              </li>
              <li>FSA (Flexible spending account) Flexible time off</li>
              <li>
                Employee assistance program (mental health benefits) Culture
                where personal growth is highly valued
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#f9f9f9]">form</div>
      </section>
    </>
  );
};

export default Job;
