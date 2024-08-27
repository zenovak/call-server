import { QuoteCard } from "@components/Primitives/Card/QuoteCard"
import { ContainerPXY } from "@components/Primitives/Layout"
import { Avatar } from "@components/Primitives/Media"
import { OrbGlass } from "@components/Primitives/Panel"
import { TextGroupHeading } from "@components/Primitives/Typography"


/**
 * 
 * @param {dataArray} dataArray `[{title, metaText, paragraph, image}, ...]`
 * @returns 
 */
export const Columns = ({title, paragraph, metaText, dataArray}) => {

    // for root pb-32 pt-24 sm:pt-32
  return (
      <OrbGlass>
        <ContainerPXY>
            <TextGroupHeading
              className="mx-auto text-center max-w-xl"
              metaText={metaText}
              title={title}
              paragraph={paragraph}
            />
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              {/* Main Figure */}
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>{`“${dataArray[0].paragraph}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <Avatar
                      image={dataArray[0].image}
                    />
                    <div className="flex-auto">
                        <div className="font-semibold">{dataArray[0].title}</div>
                        <div className="text-gray-600">{`@${dataArray[0].metaText}`}</div>
                    </div>
                    {/* <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" /> Logo */}
                  </figcaption>
              </figure>

              {/* Other Figures */}
              <div
                className="space-y-8 xl:contents xl:space-y-0"
              >
                <div
                  className="xl:row-span-2 space-y-8"
                >
                  {/* Every 3rd item or index 1, cept index 3*/}
                  { dataArray && dataArray.map((item, index)=> (
                    ((index % 4 == 3 || index == 1 || index == 5 ) && index != 3) &&
                    <QuoteCard
                      key={index}
                      title={item.title}
                      paragraph={item.paragraph}
                      metaText={item.metaText}
                      image={item.image}
                    />
                  ))
                  }
                </div>
                <div
                  className="xl:row-start-1 space-y-8"
                >
                  {/* Every 1st item or index 3, cept index 4 & 0*/}
                  { dataArray && dataArray.map((item, index)=> (
                    ((index % 4 == 0 || index == 3) && (index != 4 && index != 0)) &&
                    <QuoteCard
                      key={index}
                      title={item.title}
                      paragraph={item.paragraph}
                      metaText={item.metaText}
                      image={item.image}
                    />
                  ))
                  }
                </div>
              </div>
              <div
                className="space-y-8 xl:contents xl:space-y-0"
              >
                <div
                  className="xl:row-start-1 space-y-8"
                >
                  {/* Every 2 item or index 4, cept 1 & 5 */}
                  { dataArray && dataArray.map((item, index)=>(
                    ((index % 4 == 1 || index == 4) && (index != 5 && index != 1)) &&
                    <QuoteCard
                      key={index}
                      title={item.title}
                      paragraph={item.paragraph}
                      metaText={item.metaText}
                      image={item.image}
                    />
                  ))
                  }
                </div>
                <div
                  className="xl:row-span-2 space-y-8"
                >
                  {/* Every 2rd item index */}
                  { dataArray && dataArray.map((item, index)=>(
                    (index % 4 == 2) &&
                    <QuoteCard
                      key={index}
                      title={item.title}
                      paragraph={item.paragraph}
                      metaText={item.metaText}
                      image={item.image}
                    />
                  ))
                  }
                </div>
              </div>
            </div>
        </ContainerPXY>
      </OrbGlass>
  );
}
