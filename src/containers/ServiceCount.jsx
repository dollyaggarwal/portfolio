import React from "react";
import ServiceCard from "../components/ServiceCard";

const ServiceCount = () => {
  return <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8 ">
   <ServiceCard count={"3+"} text={"Skills"}/>
  <ServiceCard count={"5+"} text={"Projects"}/>
  <ServiceCard count={"90+"} text={"LeetCode Problems"}/>
  </div>;
};

export default ServiceCount;
