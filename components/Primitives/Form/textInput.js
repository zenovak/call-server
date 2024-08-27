

/**
 * @param {id} id id for assigning label title to field
 * @param {name} name the input field property name. Used to initialize the react hook form register function
 * @param {title} title label title
 * @param {register} register. The register function from react hook form.
 * @returns 
 */
export const TextInput = ({id, name, title, type, register, registerProps, ...props} ) => {
  return (
  <div className="w-full h-full">
    {title && 
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
      {title}
    </label>}
    <div className={title && "mt-2"}>
      <input
        id={id}
        type={type}
        {...register(name, registerProps)}
        {...props}
        className={"block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm " +
          "ring-1 ring-inset ring-gray-300 " + 
          "focus:ring-2 focus:ring-inset focus:ring-indigo-600 " + 
          "placeholder:text-gray-400 " + 
          "sm:text-sm sm:leading-6 "
        }
      />
    </div>
  </div>
)};
    