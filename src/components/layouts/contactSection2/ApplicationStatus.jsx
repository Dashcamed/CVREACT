import React from "react";

const applicationStatus = ({
  messageId,
  messageBody,
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <section className="h-dvh sm:h-fit grid grid-cols-1 content-start justify-items-center mb-3">
      <h2 className="text-3xl mb-6 mt-2">Application Status</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered flex items-center gap-2 mb-6">
          <input
            type="text"
            className="grow"
            placeholder="Write your email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid format",
              },
            })}
          />
          {errors.email && (
            <p className="text-warning text-sm mt-1">{errors.email.message}</p>
          )}
          <button className="btn btn-ghost p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
      {messageId ? (
        <section className="h-dvh sm:h-fit grid grid-cols-1 content-start justify-items-center mb-3">
          <p className="text-center prose lg:prose-xl mb-1 mx-2">
            Id de tu solicitud:{messageId}
          </p>
          <p className="text-center prose lg:prose-xl mb-1 mx-2">
            Hola {messageBody.client.name},{messageBody.client.status}
          </p>
        </section>
      ) : (
        <p className="text-center prose lg:prose-xl mb-1 mx-2">
          Check the application Status
        </p>
      )}
    </section>
  );
};

export default applicationStatus;
