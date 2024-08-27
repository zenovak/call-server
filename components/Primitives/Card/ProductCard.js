
/**
 * A Product card for Ecommerce utility.\
 * This Primitive is usecase specific due to styling hieachy.\
 * For more general purpose card, see CardBlock
 * @param {*} param0 
 * @returns 
 */
export const ProductCard = ({title, description, metaText, image, href, ...props}) => {
    return (
        <div className="group relative w-full h-full" {...props}>
              <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={href}>
                  <span className="absolute inset-0" />
                  {title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500 truncate">{description}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">{metaText}</p>
        </div>
    );
}

/**
 * A Product card for Ecommerce utility.\
 * This Primitive is usecase specific due to styling hieachy.\
 * For more general purpose card, see CardBlock
 * @param {*} 
 * @returns 
 */
export const ProductCardSquare = ({id, title, description, metaText, image, href}) => {
  return (
    <div key={id} href={href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt="An Image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-900">{title}</h3>
      <h4 className="mt-4 text-sm text-gray-700">{description}</h4>
      <p className="mt-1 text-lg font-medium text-gray-900">{metaText}</p>
    </div>
  );
}