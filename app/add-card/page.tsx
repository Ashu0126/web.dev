"use client";
import React from "react";
import useForm from "@/hooks/useForm";
import style from "./index.module.scss";

const Page = () => {
  const { formData, handleInputChange, handleTitleChange, handleSubmit } =
    useForm();

  return (
    <div className={style.pageContainer}>
      <img
        src="https://miro.medium.com/v2/resize:fit:2000/1*kIgFEQYSKMk2DSW-yff5jg.jpeg"
        alt=""
      />
      <div className={style.formContainer}>
        <div>
          <h4 className={style.formTitle}>Add new card</h4>
          <form onSubmit={handleSubmit}>
            <div className={style.formGroup}>
              <input
                type="text"
                name="heading"
                value={formData.items.heading}
                onChange={handleInputChange}
                placeholder="Card title"
              />
            </div>
            <div className={style.formGroup}>
              {/* <label>content:</label> */}
              <input
                type="text"
                name="content"
                value={formData.items.content}
                onChange={handleInputChange}
                placeholder="Card img"
              />
            </div>
            <div className={style.formGroup}>
              {/* <label>img:</label> */}
              <input
                type="text"
                name="img"
                value={formData.items.img}
                onChange={handleInputChange}
                placeholder="Card content"
              />
            </div>
            <div className={style.formGroup}>
              {/* <label>title:</label> */}
              <select
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
              >
                <option value="">select the type</option>
                <option value="Nature">Nature</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Technology">Technology</option>
                <option value="Art">Art</option>
              </select>
            </div>
            <div className={style.formGroup}>
              <button type="submit">add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
