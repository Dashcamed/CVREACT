import React from "react";

const Modal = ({ content }) => {
  return (
    <>
      <dialog id="React-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.reactDoc} alt="react-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="Java-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.javaDoc} alt="java-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="English-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.englishDoc} alt="english-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="Next-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.nextDoc} alt="next-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="React-Gob-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.reactGobDoc} alt="react-gob-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="Backend1-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.backend1} alt="backend1-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="Backend2-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img src={content.backend2} alt="backend2-certificate" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="Prompt-developers-certificate" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <img
            src={content.promptProgramadores}
            alt="prompt-developers-certificate"
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
