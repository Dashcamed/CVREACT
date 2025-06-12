import React from "react";
import AvatarPortrait3 from "../../common/avatars/AvatarPortrait3";
import MockupCode from "../../common/mockupCode/MockupCode";
import Modal from "../../common/modal/Modal";
import AvatarPortrait4 from "../../common/avatars/AvatarPortrait4";
import AvatarPortrait5 from "../../common/avatars/AvatarPortrait5";
import { Link } from "react-router-dom";

const About = ({ content }) => {
  return (
    <section className="h-fit bg-gradient-to-b from-base-100 via-base-300 to-base-100 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-3 transition ease-in-out animate-fade-in">
      <article className="content-center justify-self-center mt-4">
        <AvatarPortrait3 />
      </article>
      <article className="content-center justify-self-center bg-inherit mx-2 ">
        <MockupCode content={content} />
      </article>
      <article className="card content-center justify-self-center bg-inherit border border-primary-content mx-2 p-6 rounded-lg mb-3">
        <h2 className="text-3xl mb-2">Resume</h2>
        <p className="prose lg:prose-xl">{content.resume}</p>
      </article>
      <article className="card place-content-start bg-inherit border border-primary-content mx-2 p-6 rounded-lg mb-4">
        <h2 className="text-3xl mb-3">{content.certificationsTitle}</h2>
        <ul>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("React-certificate").showModal()
              }
            >
              React
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("Java-certificate").showModal()
              }
            >
              Java
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("English-certificate").showModal()
              }
            >
              {content.englishDocTitle}
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("Next-certificate").showModal()
              }
            >
              Next
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("React-Gob-certificate").showModal()
              }
            >
              React Gob
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("Backend1-certificate").showModal()
              }
            >
              Backend 1
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document.getElementById("Backend2-certificate").showModal()
              }
            >
              Backend 2
            </button>
            <Modal content={content} />
          </li>
          <li>
            <button
              className="btn btn-outline w-full my-1"
              onClick={() =>
                document
                  .getElementById("Prompt-developers-certificate")
                  .showModal()
              }
            >
              Prompt Developers
            </button>
            <Modal content={content} />
          </li>
        </ul>
        <h2 className="text-3xl mb-2 mt-3">{content.recommendationsTitle}</h2>
        <AvatarPortrait4 />
        <p className="prose lg:prose-xl">{content.recommendationsText}</p>
      </article>
      <div className="col-start-1 col-end-2 sm:col-end-3 content-center justify-items-center">
        <AvatarPortrait5 />
        <h2 className="text-2xl text-center sm:text-3xl mb-2">
          {content.lastTitle}
        </h2>
        <Link to={"/Skills"} className="btn btn-primary btn-wide my-3">
          {content.lastButton}
        </Link>
      </div>
    </section>
  );
};

export default About;
