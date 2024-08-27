import { Icon } from "@iconify/react"


/**
 * 
 * @param {icon} icon iconify icon string 
 * @param {title} title text label 
 * @returns 
 */
export const EmptyBox = ({icon, title, onClick}) => {

  return (
    <button
      onClick={onClick}
        type="button"
        className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400"
    >
      <Icon 
        className="mx-auto h-12 w-12 text-gray-400"
        icon={icon}
        aria-hidden="true"
      />
      <span className="mt-2 block text-sm font-medium text-gray-900">{title}</span>
    </button>
  )
}
