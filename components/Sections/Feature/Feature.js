import { FeatureCentered } from "./FeatureCentered";
import { FeatureLeft } from "./FeatureLeft";


/**
 * A feature section is designed to list out textual contents with optional supporting icons\
 * It is commonly used for writing bullet point contents where each point has a title and paragraph.
 * @param {title} title
 * @param {paragraph} paragraph
 * @param {metaText} metaText
 * @param {image} image
 * @param {dataArray} dataArray `[{title, paragraph, icon}, ...]`
 */
export const Feature = ({title, paragraph, metaText, image, variant, dataArray}) => {
    let SelectedFeature = "";

    switch (variant) {
        case "1":
            SelectedFeature = FeatureCentered;
            break;
    
        default:
            SelectedFeature = FeatureLeft;
            break;
    }

    return (
        <SelectedFeature 
            title={title}
            paragraph={paragraph}
            metaText={metaText}
            image={image}
            dataArray={dataArray}
        />
    );
}
