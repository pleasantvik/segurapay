import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-[#EFFBFF] px-10 lg:px-[103px] nxl:pt-[131px] pt-20 pb-10 nxl:pb-[101px]">
      {/* feature one */}
      <div className="section-layout mb-10 lg:mb-0">
        <div className="order-2 lg:order-1 flex justify-center">
          <Image
            src="/asset/images/FundWallet.svg"
            height={400}
            width={800}
            alt="fund wallet"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="section-name">FEATURES</span>
          <h3 className="section-title">Wallet Management</h3>
          <p className="section-description">
            SeguraWallet allows clients to manage their customers' wallet
            balances and transactions. This includes adding funds to their
            wallets, deducting funds for purchases, and viewing their
            transaction history.
          </p>
        </div>
      </div>

      {/* feature 2 */}
      <div className="section-layout">
        <div>
          <h3 className="section-title">High Level Security</h3>
          <p className="section-description mb-4">
            Transactional Notifications: SeguraWallet sends transactional
            notifications to both clients and customers. Clients receive
            notifications of wallet top-ups and transactional activity, while
            customers receive notifications of their wallet balance, transaction
            history, and other relevant information.
          </p>

          <p className="section-description mb-10 lg:mb-0">
            Security: SeguraWallet employs high-level security measures to
            ensure the safety of its clients and customers' funds. The service
            uses advanced encryption and secure storage methods to protect
            sensitive data
          </p>
        </div>
        <div className="flex justify-center">
            <Image src='/asset/images/Segurawallet2.svg' height={400} width={800} alt='Segura wallet'/>
        </div>
      </div>
    </div>
  );
};

export default Features;
