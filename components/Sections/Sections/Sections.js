import { ProductCatalog } from "@components/Application/Ecommerce";
import { Accordion } from "../Accordion";
import { Feature } from "../Feature";
import { ArticleMarkdown } from "../Article";
import { Hero } from "../Hero";
import { Columns } from "../Columns";
import { Content } from "../Content";



const SelectionRegistery = {
    "Accordion": Accordion ,
    "Article": ArticleMarkdown ,     // Special component
    "Hero": Hero ,
    "Columns": Columns,
    "Content": Content ,
    "Feature": Feature,
    "ProductCatalog": ProductCatalog // Special Component
}

/**
 * The Main Section Registery. This Mother component allows Rapid Scripting to return other components
 */
export const Section = ({title, paragraph, metaText, src, image, type, variant, dataArray}) => {

    if (type in SelectionRegistery) {
        const SelectedSection = SelectionRegistery[type];

        return (
            <SelectedSection
                metaText={metaText}
                title={title}
                paragraph={paragraph}
                image={image}
                src={src}
                variant={variant}
                dataArray={dataArray}
            />
        );
    } else {
        return <div></div>;
    }
    
}