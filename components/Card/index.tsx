import style from "./index.module.scss";

const Card = (props: any) => {
  const { card } = props;

  return (
    <div className={style.card}>
      <img
        src={card.img}
        alt={("picture of a " + card.heading).toLowerCase()}
      />
      <h4>{card.heading}</h4>
      <p>{card.content}</p>
    </div>
  );
};

export default Card;
