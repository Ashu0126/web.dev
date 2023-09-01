import React from "react"; // Don't forget to import React
import style from "./index.module.scss";
import Card from "../Card";
import Link from "next/link";

const CardCollection = (props: any) => {
  const { title, cardData } = props;

  return (
    <div className={style.cardCollection}>
      <h2>{title}</h2>
      <div className={style.cards}>
        {cardData.map((card: any, index: any) => (
          <Link href={"/" + title + "/" + (index + 1)} key={card}>
            <Card card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardCollection;
