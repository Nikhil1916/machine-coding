import Accordion from "./Accordian";
import Banner from "./Banner";
import { CardRow } from "./CardRow";
import { uiConfig } from "./config";

export const ConfigUI = () => {
    return (
        uiConfig?.map((section, index)=>{
            const props = { ...section.data, className: section.className || "" };
            switch(section.type) {
                case "banner": return <Banner key={index} data={section.data} className={section.className}  /> 
                case "cardRow": return <CardRow key={index} data={section.data} className={section.className} />
                case "accordion":return <Accordion key={index} {...props} />;
                default: return <div></div>
            }
        })
    )
};