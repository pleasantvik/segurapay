import React from "react";

const Features = () => {
  return (
    <div className="h-[1237px] bg-[#EFFBFF] px-[103px] pt-[131px] pb-[101px]">
      {/* feature one */}
      <div className="grid grid-cols-2 items-center">
        <div>
          <img src="/asset/images/FundWallet.svg" alt="fund wallet" />
        </div>
        <div>
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

          <p className="section-description">
            Security: SeguraWallet employs high-level security measures to
            ensure the safety of its clients and customers' funds. The service
            uses advanced encryption and secure storage methods to protect
            sensitive data
          </p>
        </div>
        <div>
          <img src="/asset/images/Segurawallet2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
