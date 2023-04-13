import React from "react";

import CampaignsItem from "./CampaignsItem";

const Campaigns = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-[15px] my-[45px] container mx-auto">
      <CampaignsItem
        title="Tasty Thursdays"
        percent={20}
        image="/images/o1.jpg"
      />
      <CampaignsItem title="Pizza Days" percent={15} image="/images/o2.jpg" />
    </div>
  );
};

export default Campaigns;
