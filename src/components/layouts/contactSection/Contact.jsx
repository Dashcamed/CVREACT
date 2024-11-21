import React from "react";
import AvatarPortrait6 from "../../common/avatars/AvatarPortrait6";
import CopyToClipboard from "react-copy-to-clipboard";
import AvatarPortrait4 from "../../common/avatars/AvatarPortrait4";
import { Link } from "react-router-dom";

const Contact = ({ messageId, handleSubmit, onSubmit, register, errors }) => {
  return (
    <>
      {messageId ? (
        <div className="h-dvh grid grid-cols-1 content-center justify-items-center">
          <div className="mx-2 justify-items-center">
            <AvatarPortrait4 />
            <p className="text-center prose lg:prose-xl mb-3">
              Solicitud enviada, me pondré en contacto contigo a la brevedad.
            </p>
            <p className="text-center prose lg:prose-xl">
              Este es el identificador de tu solicitud, has click para guardar
              en el portapapeles.
            </p>
            <CopyToClipboard text={messageId}>
              <p className="text-center prose lg:prose-xl underline hover:cursor-pointer">
                {messageId}
              </p>
            </CopyToClipboard>
            <Link to={"/"} className="btn btn-accent btn-wide mt-10">
              Back to home
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-dvh grid grid-cols-1 content-start justify-items-center">
          <AvatarPortrait6 />
          <h2 className="text-3xl mb-4 mt-3">Contact me</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-1"
              {...register("name", {
                required: "Required",
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                  message: "Solo letras y espacios",
                },
              })}
            />
            {errors.name && (
              <p className="text-warning text-sm mt-1">{errors.name.message}</p>
            )}
            <input
              type="text"
              placeholder="Number"
              className="input input-bordered w-full mb-1"
              {...register("phone", {
                required: "Required",
                pattern: { value: /^[0-9]+$/, message: "Solo números" },
              })}
            />
            {errors.phone && (
              <p className="text-warning text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
            <label className="input input-bordered flex items-center gap-2 w-full mb-1">
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
                placeholder="Email"
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
              placeholder="Write Here"
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
              <p className="text-warning text-sm mt-1">{errors.text.message}</p>
            )}
            <div className="flex justify-end">
              <button className="btn btn-success">Send</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
