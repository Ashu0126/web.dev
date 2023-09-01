"use client";
// Import necessary dependencies
import React from "react";
import useForm from "@/hooks/useForm"; // Assuming this is a custom hook
import style from "./index.module.scss"; // Assuming this is a stylesheet

// Define the Page component
const Page = ({ params }: any) => {
  // Fetch data using the useForm custom hook
  const { filteredCardList } = useForm();

  // Extract cardType and id from the params object
  const { cardType, id } = params;

  // Filter and map the card details based on cardType and id
  const cardDetails = filteredCardList
    .filter((card) => card.title === cardType)
    .map((item) => item.items[id - 1]);

  // Destructure cardDetails
  const { heading, img, content } = cardDetails[0];

  // Render the component
  return (
    <div className={style.cardInfo}>
      <img className={style.cardImg} src={img} alt="" />
      <span className={style.cardContent}>
        <h3>{heading}</h3>
        <h6>{content}</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolore illum neque. Voluptatibus, fugiat maxime, magnam eveniet
          doloremque omnis optio mollitia neque necessitatibus eos quia
          voluptatum nemo, quo totam delectus. Aut molestias temporibus officia
          veniam placeat sapiente earum quasi repellendus odio libero porro
          minima debitis beatae, quo atque voluptate illum accusantium quisquam
          nesciunt corrupti fugiat, dolorem aliquam! Nobis, amet modi. Dolore
          aliquam voluptate vitae possimus distinctio aliquid numquam repellat
          cum velit temporibus eligendi a saepe cumque iste veniam excepturi, ex
          ipsam quo impedit ducimus praesentium quidem non laboriosam? Ullam,
          adipisci. Sed magnam accusantium, corporis ex reprehenderit
          dignissimos nam qui, esse ea iure sequi cum consequatur eligendi
          perspiciatis odio! Velit exercitationem architecto voluptatibus
          explicabo voluptatem animi ipsa possimus rem dolorem delectus. Ducimus
          fuga molestiae amet veniam suscipit recusandae asperiores eos ratione!
          Vitae, quo possimus? Amet perferendis illum nam eius autem velit, quis
          ea eveniet! Ea esse, dolore deleniti illo nostrum perferendis?
          Molestias quod quaerat delectus, exercitationem eveniet sunt dolorem a
          quia aliquid laboriosam esse ipsa animi autem. Dolore aut voluptate
          molestiae eos at, excepturi assumenda veniam dolores ad veritatis
          blanditiis expedita. Veniam ipsum iste ea consequuntur laudantium
          facilis. Excepturi fugiat quae doloribus asperiores autem! Temporibus
          esse ipsam similique labore cumque repellendus impedit non a aliquid
          harum inventore praesentium possimus, necessitatibus consectetur.
          Sequi modi veritatis laudantium est, quis ratione sapiente pariatur
          voluptates consectetur praesentium et nesciunt deserunt repellendus
          quos delectus non velit temporibus mollitia consequatur voluptatibus
          quidem aperiam id? Tempora, saepe molestiae? Fugiat molestiae iure
          corrupti, voluptates explicabo consequatur repellat exercitationem
          beatae dolores dolorem quae tempore molestias atque veniam assumenda
          non odio iste ex vero cum. Repellat aut officia placeat ducimus!
          Ullam. Iste quisquam explicabo minus veritatis aspernatur quaerat,
          voluptas saepe tempora! Non doloribus eligendi voluptatum officiis
          laboriosam laborum modi, molestias itaque earum impedit quam labore
          reprehenderit minima expedita, placeat nihil eos?
        </p>
      </span>
    </div>
  );
};

// Export the Page component as the default export
export default Page;
