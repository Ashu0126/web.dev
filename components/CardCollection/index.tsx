import React from "react"; // Don't forget to import React
import style from "./index.module.scss";
import Card from "../Card";

const CardCollection = (props: any) => {
  const { title, cardData } = props;

  return (
    <div className={style.cardCollection}>
      <h2>{title}</h2>
      <div className={style.cards}>
        {cardData.map((card: any) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardCollection;
