import React from "react";
import Image from "next/image";
import Card from "../reusable/card/Card";
import { CardTextDiv } from "../reusable/card/CardTextDiv";
import { CardImgDiv } from "../reusable/card/CardImgDiv";

const Features = () => {
  return (
    <div className=" bg-[#EFFBFF] mt-[20px] py-10">
      <Card>
        <CardImgDiv imgSrc="/asset/images/FundWallet.svg" />
        <CardTextDiv
          heading="Features"
          subHeading="Wallet Management"
          text="SeguraWallet allows clients to manage their customers' wallet
            balances and transactions. This includes adding funds to their
            wallets, deducting funds for purchases, and viewing their
            transaction history."
        />
      </Card>
      <Card>
        <CardTextDiv
          subHeading="High Level Security"
          text=" Transactional Notifications: SeguraWallet sends transactional
            notifications to both clients and customers. Clients receive
            notifications of wallet top-ups and transactional activity, while
            customers receive notifications of their wallet balance, transaction
            history, and other relevant information."
          textTwo="  Security: SeguraWallet employs high-level security measures to
            ensure the safety of its clients and customers' funds. The
            service uses advanced encryption and secure storage methods to
            protect sensitive data"
        />
        <CardImgDiv imgSrc="/asset/images/Segurawallet2.svg" />
      </Card>
    </div>
  );
};

export default Features;
