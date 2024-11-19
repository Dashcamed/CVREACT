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
    </>
  );
};

export default Modal;