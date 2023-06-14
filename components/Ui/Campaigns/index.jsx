import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import axios from "axios";

import CampaignsItem from "./CampaignsItem";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/campaign`
        );
        setCampaigns(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampaigns();
  }, []);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const scrollSpeed = 1;
    const delta = startX - event.clientX;
    containerRef.current.scrollLeft += delta * scrollSpeed;
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col md:flex-row justify-between px-[15px] my-[45px] container mx-auto max-w-[1000px] overflow-x-auto"
    >
      {campaigns.length > 0 &&
        campaigns.map((campaign) => (
          <CampaignsItem
            key={campaign?._id}
            title={campaign?.title}
            percent={campaign?.discount}
            image={campaign?.image}
          />
        ))}
    </div>
  );
};

export default Campaigns;
