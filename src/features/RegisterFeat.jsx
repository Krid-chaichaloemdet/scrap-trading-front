import { useState } from "react";
import Joi from "joi";
import InputErrorMessage from "./inputErrorMessage";
import { useAuth } from "../hooks/use-auth";


const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
  role: Joi.boolean(),
});


export default function RegisterFeat() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
    role: false,
  });
  const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
  
    if (error) {
      const result = error.details.reduce((acc, el) => {
        const { message, path } = el;
        acc[path[0]] = message;
        return acc;
      }, {});
      return result;
    }
  };

  const [error, setError] = useState({});

  const { register , authUser } = useAuth();


  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    console.log("ee",input);
    e.preventDefault();
    const validationError = validateRegister(input);
    console.log(validationError)
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input)
    console.log("asd")
  };

  return (
    <form
      className="flex justify-center items-center flex-col gap-5  p-10 rounded-lg bg-gray- h-screen bg-yellow-100"
      onSubmit={handleSubmitForm}
    >
      {/* <div onClick={() => console.log(register)}>test</div> */}
      <input
        type="text"
        placeholder="First name"
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.firstName}
        name="firstName"
        onChange={handleChangeInput}
      />
      {error.firstName && <InputErrorMessage message={error.firstName} />}

      <input
        type="text"
        placeholder="Last name"
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.lastName}
        name="lastName"
        onChange={handleChangeInput}
      />
      {error.lastName && <InputErrorMessage message={error.lastName} />}

      <input
        type="text"
        placeholder="E-mail or phone number "
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.emailOrMobile}
        name="emailOrMobile"
        onChange={handleChangeInput}
      />
      {error.emailOrMobile && (
        <InputErrorMessage message={error.emailOrMobile} />
      )}

      <input
        type="password"
        placeholder="Password"
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.password}
        name="password"
        onChange={handleChangeInput}
      />
      {error.password && <InputErrorMessage message={error.password} />}

      <input
        type="password"
        placeholder="Confirm password"
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.confirmPassword}
        name="confirmPassword"
        onChange={handleChangeInput}
      />
      {error.confirmPassword && (
        <InputErrorMessage message={error.confirmPassword} />
      )}
      <button className="bg-green-500 p-3 rounded-lg font-semibold text-white">
        SUBMIT
      </button>
    </form>
  );
}
