"use client";
import CardCollection from "@/components/CardCollection";
import Tab from "@/components/Tab";
import useForm from "@/hooks/useForm";
import React, { useState } from "react";

const Page = () => {
  const { cardList, handleTabClick, selectTab, filteredCardList } = useForm();

  const data = filteredCardList;
  const tabData = cardList;

  return (
    <>
      <Tab
        tabData={tabData}
        selectTab={selectTab}
        handleTabClick={handleTabClick}
      />
      {data.map((items: any) => (
        <CardCollection title={items.title} cardData={items.items} />
      ))}
    </>
  );
};

export default Page;
