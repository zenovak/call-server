import { ContainerPaddedXY } from "@components/Primitives/Layout";
import { TextGroupHeading } from "@components/Primitives/Typography";
import { Icon } from "@iconify/react";
import Image from "next/image";


/**
 * A feature section is designed to list out textual contents with optional supporting icons\
 * It is commonly used for writing bullet point contents where each point has a title and paragraph.
 * @param {title} title
 * @param {paragraph} paragraph
 * @param {metaText} metaText
 * @param {image} image
 * @param {dataArray} dataArray `[{title, paragraph, icon}, ...]`
 */
export const FeatureLeft = ({title, paragraph, metaText, image, dataArray}) => {
    return (
        <ContainerPaddedXY>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                    <TextGroupHeading
                        metaText={metaText}
                        title={title}
                        paragraph={paragraph}
                        className="text-left"
                    />
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {dataArray.map((item, index) => (
                        <div key={index} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <Icon
                                    icon={item.icon || "mdi:google-downasaur"}
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600" 
                                    aria-hidden="true"
                                />
                                {item.title}
                            </dt>{' '}
                            <dd className="inline">{item.paragraph}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                <Image
                    src={image}
                    alt="image"
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                />

                </div>
        </ContainerPaddedXY>
    );
}
