import React from "react";
import style from "./index.module.scss";

const Tab = (props: any) => {
  const { tabData, selectTab, handleTabClick } = props;

  return (
    <div className={style.tabBar}>
      <h2 className={style.heading}>Themes</h2>
      <ul className={style.tabList}>
        <li
          onClick={handleTabClick}
          className={`${selectTab === "all" ? style.active : ""}`}
        >
          all
        </li>
        {tabData.map((index: any) => (
          <li
            key={index.title}
            onClick={handleTabClick}
            className={`${selectTab === index.title ? style.active : ""}`}
          >
            {index.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
