import { MinimalistAccordion } from "./MinimalistAccordion";


/**
 * Main Accordion Selector. This is used for easier downstream scripting\
 * This also functions as a type enforcement, and parent object to Accordion direvatives. 
 */
export const Accordion = ({title, paragraph, dataArray, variant}) => {
    var SelectedAccordion = "";

    switch (variant) {
        case "1":
            SelectedAccordion = MinimalistAccordion;
            break;
        default:
            SelectedAccordion = MinimalistAccordion;
            break;
    }

    return (
        <SelectedAccordion
            title={title}
            paragraph={paragraph}
            dataArray={dataArray}
        />
    );
}