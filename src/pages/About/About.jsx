import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import imejjj from "../../assets/defineReact.jpg";
import { motion } from 'framer-motion';
import FadeInOnScroll from '../../constants/FadeInOnScroll'

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="page"
    >
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-[50px] py-[50px] my-[50px]">
          <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px]">
            {t("aboutWebsite.title")}
          </h2>
          <p className="text-white max-w-[100%] md:max-w-[60%]">
            {t("aboutWebsite.description")}
          </p>
        </div>

        <FadeInOnScroll delay={0.1}><div className="bg-black rounded-2xl px-[50px] py-[50px] my-[50px]">
          <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px] mt-[70px]">
            {t("aboutWebsite.meaning")}{" "}
            <Link to="/" className="hover:underline">
              DEVORA
            </Link>{" "}
            {t("aboutWebsite.and")} "
            <Link to="/" className="hover:underline">
              devoraf.online
            </Link>
            "
          </h2>
          <p className="text-white max-w-[100%] md:max-w-[60%]">
            {t("aboutWebsite.meaning_description.part1")}{" "}
            <Link to="/" className="hover:underline">
              DEVORA
            </Link>{" "}
            {t("aboutWebsite.meaning_description.part2")}{" "}
            <Link to="/" className="hover:underline">
              devoraf.online
            </Link>{" "}
            {t("aboutWebsite.meaning_description.part3")}{" "}
            <Link to="/" className="hover:underline">
              DEVORA
            </Link>{" "}
            + F, {t("aboutWebsite.meaning_description.part4")}
          </p>
        </div></FadeInOnScroll>

        <FadeInOnScroll delay={0.1}><div>
          <img
            className="w-full h-[500px] rounded-2xl"
            src={imejjj}
            alt="React Photo"
          />
        </div></FadeInOnScroll>

        <FadeInOnScroll delay={0.1}><div className="bg-black rounded-2xl px-[50px] py-[50px] my-[50px]">
          <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px]">
            {t("aboutWebsite.for_whom_title")}
          </h2>
          <p className="text-white max-w-[100%] md:max-w-[60%]">
            {t("aboutWebsite.for_whom_text")}
          </p>
        </div></FadeInOnScroll>

        <FadeInOnScroll delay={0.1}><div className="container mx-auto bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-[50px] py-[50px] my-[50px]">
          <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px]">
            {t("aboutWebsite.author_title")}
          </h2>
          <p className="text-white max-w-[90%] md:max-w-[60%]">
            {t("aboutWebsite.author_description")}
          </p>
          <ul className="block mt-[40px] text-white">
            <li>
              📁 GitHub:{" "}
              <a
                className="opacity-[.6] hover:opacity-[1] transition-[.66s] hover:underline"
                href="https://github.com/Irisboyev-I"
              >
                github.com/Irisboyev-I
              </a>
            </li>
            <li>
              💬 Telegram:{" "}
              <a
                className="opacity-[.6] hover:opacity-[1] transition-[.66s] hover:underline"
                href="https://t.me/irisboyevw"
              >
                @irisboyevw
              </a>
            </li>
            <li>
              📞 WhatsApp:{" "}
              <a
                className="opacity-[.6] hover:opacity-[1] transition-[.66s] hover:underline"
                href="https://wa.me/998200105221"
              >
                {t("aboutWebsite.write")}
              </a>
            </li>
          </ul>
        </div></FadeInOnScroll>

        <button className="m-auto block">
          <Link
            className="hover:text-white hover:bg-amber-700 transition-[.66s] cursor-pointer mt-[50px] bg-amber-500 rounded-xl py-[10px] px-[20px]"
            to="/articles"
          >
            {t("aboutWebsite.start_button")}
          </Link>
        </button>
      </div>
    </motion.div>
  );
}
