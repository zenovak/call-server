import { ContainerPXY, Grid1x2 } from "@components/Primitives/Layout";
import { Portrait3x2, Portrait5x2 } from "@components/Primitives/Media/Portrait";
import { TextGroupHeading, TextGroupPoint } from "@components/Primitives/Typography";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Contents are designed to display Images paired with explanation paragraph.\
 * Often used in featuring product specialy and details.
 * @param {*} param0 
 */
export const ContentCards = ({title, paragraph, metaText, dataArray}) => {
    //<div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            
    //    </div>
    return (
        <ContainerPXY>
            <section aria-labelledby="details-heading" className="space-y-16">
                <TextGroupHeading
                    className="mx-auto max-w-3xl text-center"
                    metaText={metaText}
                    title={title}
                    paragraph={paragraph}
                />
                <Grid1x2>
                    {dataArray.map((item, index)=>(
                        <div
                            key={index}
                        >
                            <Portrait3x2
                                image={item.image}
                            />
                            <TextGroupPoint
                                className="mt-8"
                                title={item.title}
                                paragraph={item.paragraph}/>
                        </div>
                    ))}
                </Grid1x2>
            </section>
        </ContainerPXY>
    );
}

/**
 * 
 * @param {*} param0 
 */
export const ContentParallel = ({title, paragraph, metaText, dataArray}) => {
  return (
    <div className="bg-white">
        <ContainerPXY>
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                <TextGroupHeading
                    className="max-w-3xl"
                    metaText={metaText}
                    title={title}
                    paragraph={paragraph}
                />

                <div className="space-y-16 pt-10 mt-10 border-t border-gray-200 sm:pt-16 sm:mt-16">
                    {dataArray && dataArray.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                    >
                        <div className="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.paragraph}</p>
                        </div>
                        <div className="flex-auto lg:col-span-7 xl:col-span-8">
                            <Portrait5x2
                                image={feature.image}
                            />
                        </div>
                    </div>
                    ))}
                </div>
        </div>
        </ContainerPXY>
    </div>
  );
}

/**
 * Alternating pattern of contents
 * @param {*} param0 
 * @returns 
 */
export const ContentAlternate = ({title, paragraph, metaText, dataArray}) => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">

                <TextGroupHeading
                    metaText={metaText}
                    title={title}
                    paragraph={paragraph}
                />
                <div className="mt-16 space-y-16">
                    {dataArray.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                        >
                            <div
                                className={classNames(
                                index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                                )}
                            >
                                <h3 className="text-lg font-medium text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {feature.paragraph}
                                </p>
                            </div>
                            <div
                                className={classNames(
                                index % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 shadow drop-shadow-sm'
                                )}
                            >
                                <Portrait5x2
                                    image={feature.image}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Contents are designed to display Images paired with explanation paragraph.\
 * Often used in featuring product specialy and details.
 * @param {*} param0 
 */
export const Content = ({title, paragraph, metaText, variant, dataArray}) => {
    let SelectedContent = "";
    switch (variant) {
        case "1":
            SelectedContent = ContentAlternate;
            break;
            
        case "2":
            SelectedContent = ContentParallel;
            break;

        default:
            SelectedContent = ContentCards;
            break;
    }

    return (
        <SelectedContent
            title={title}
            paragraph={paragraph}
            metaText={metaText}
            dataArray={dataArray}
        />
    );
}