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
        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-freelance_516790-463.jpg"
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
              <input
                type="text"
                name="content"
                value={formData.items.content}
                onChange={handleInputChange}
                placeholder="Card content"
              />
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                name="img"
                value={formData.items.img}
                onChange={handleInputChange}
                placeholder="Card image"
              />
            </div>
            <div className={style.formGroup}>
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
