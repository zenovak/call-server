import { ContainerPaddedXY } from '@components/Primitives/Layout'
import { TextGroupHeading } from '@components/Primitives/Typography'
import { Icon } from '@iconify/react'


/**
 * A feature section is designed to list out textual contents with optional supporting icons\
 * It is commonly used for writing bullet point contents where each point has a title and paragraph.
 * @param {title} title
 * @param {paragraph} paragraph
 * @param {metaText} metaText
 * @param {dataArray} dataArray `[{title, paragraph, icon}, ...]`
 */
export const FeatureCentered = ({title, paragraph, metaText, dataArray}) => {
  return (
    <ContainerPaddedXY>
        <TextGroupHeading
            title={title}
            paragraph={paragraph}
            metaText={metaText}
            className="mx-auto max-w-2xl lg:text-center"
        />
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {dataArray.map((item) => (
              <div key={item.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Icon
                        icon={item.icon || "mdi:google-downasaur"}
                        className="h-6 w-6 text-white" 
                        aria-hidden="true" 
                    />
                  </div>
                  {item.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{item.paragraph}</dd>
              </div>
            ))}
          </dl>
        </div>
    </ContainerPaddedXY>
  )
}
