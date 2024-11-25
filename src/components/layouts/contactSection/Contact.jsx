import React from "react";
import AvatarPortrait6 from "../../common/avatars/AvatarPortrait6";
import CopyToClipboard from "react-copy-to-clipboard";
import AvatarPortrait4 from "../../common/avatars/AvatarPortrait4";
import { Link } from "react-router-dom";
import { useAlert } from "../../../context/AlertContext";

const Contact = ({
  messageId,
  handleSubmit,
  onSubmit,
  register,
  errors,
  content,
}) => {
  const { showAlert } = useAlert();
  return (
    <>
      {messageId ? (
        <div className="h-dvh sm:h-fit grid grid-cols-1 content-center justify-items-center mb-3">
          <div className="mx-2 justify-items-center">
            <AvatarPortrait4 />
            <p className="text-center prose lg:prose-xl mb-3">
              {content.response.text1}
            </p>
            <p className="text-center prose lg:prose-xl">
              {content.response.text2}
            </p>
            <CopyToClipboard text={messageId}>
              <p
                onClick={() => showAlert("Copied", "success")}
                className="text-center prose lg:prose-xl underline hover:cursor-pointer"
              >
                {messageId}
              </p>
            </CopyToClipboard>
            <Link to={"/"} className="btn btn-accent btn-wide mt-10">
              {content.response.linkButton}
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-dvh sm:h-fit grid grid-cols-1 content-start justify-items-center mb-3">
          <AvatarPortrait6 />
          <h2 className="text-3xl mb-4 mt-3">{content.contactTitle}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-2">
            <label className="input input-bordered flex items-center mb-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                placeholder={content.formName.name}
                className="grow"
                {...register("name", {
                  required: "Required",
                  maxLength: { value: 50, message: "50 characters maximium" },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                    message: "Only letters and spaces",
                  },
                })}
              />
              {errors.name && (
                <p className="text-warning text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </label>
            <label className="input input-bordered flex items-center mb-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                placeholder={content.formNumber.number}
                className="grow"
                {...register("phone", {
                  required: "Required",
                  pattern: { value: /^[0-9]+$/, message: "Only numbers" },
                })}
              />
              {errors.phone && (
                <p className="text-warning text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder={content.formEmail.email}
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-warning text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>
            <textarea
              type="text"
              className="textarea textarea-bordered w-full"
              placeholder={content.formText.textArea}
              {...register("text", {
                required: "Required",
                maxLength: { value: 200, message: "Max 200 characters" },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\s]+$/,
                  message: "Only letters, numbers and spaces",
                },
              })}
            ></textarea>
            {errors.text && (
              <p className="text-warning text-end text-sm">
                {errors.text.message}
              </p>
            )}
            <div className="flex justify-end mt-2">
              <button className="btn btn-success">
                {content.submitButton}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
