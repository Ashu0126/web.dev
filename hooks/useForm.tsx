import { useState } from "react";
import pageData from "@/data/dataset.json";

interface FormData {
  title: string;
  items: {
    heading: string;
    img: string;
    content: string;
  };
}

interface CardItem {
  title: string;
  items: {
    heading: string;
    img: string;
    content: string;
  }[];
}

const useForm = () => {
  const initialFormData: FormData = {
    title: "",
    items: { heading: "", img: "", content: "" },
  };

  const [selectTab, setSelectTab] = useState("all");

  const handleTabClick = (e: any) => {
    setSelectTab(e.target.innerText);
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [cardList, setCardList] = useState<CardItem[]>(pageData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      items: {
        ...prevData.items,
        [name]: value,
      },
    }));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const existingCardIndex = cardList.findIndex(
      (card) => card.title === formData.title
    );

    setCardList((prevCardList) => {
      const updatedCardList = [...prevCardList];
      if (existingCardIndex !== -1) {
        updatedCardList[existingCardIndex].items.push(formData.items);
      } else {
        updatedCardList.push({
          title: formData.title,
          items: [formData.items],
        });
      }
      return updatedCardList;
    });

    setFormData(initialFormData);

    console.log("Updated cardList:", cardList);
  };

  const filteredCardList =
    selectTab === "all"
      ? cardList
      : cardList.filter((card) => card.title === selectTab);

  return {
    formData,
    cardList,
    filteredCardList,
    handleInputChange,
    handleTitleChange,
    handleSubmit,
    selectTab,
    handleTabClick,
  };
};

export default useForm;
