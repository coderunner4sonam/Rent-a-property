import { dummyDataType } from "../types/types";
// Import house images
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";
import house10 from "../assets/house10.jpg";
import house11 from "../assets/house11.jpg";
import house12 from "../assets/house12.jpg";
import house13 from "../assets/house13.jpg";
import house14 from "../assets/house14.jpg";
import house15 from "../assets/house15.jpg";
import house16 from "../assets/house16.jpg";
import house17 from "../assets/house17.jpg";
import house18 from "../assets/house18.jpg";
import house19 from "../assets/house19.jpg";
import house20 from "../assets/house20.jpg";

// Import villa images
import villa1 from "../assets/villa1.jpg";
import villa2 from "../assets/villa2.jpg";
import villa3 from "../assets/villa3.jpg";
import villa4 from "../assets/villa4.jpg";
import villa5 from "../assets/villa5.jpg";
import villa6 from "../assets/villa6.jpg";
import villa7 from "../assets/villa7.jpg";
import villa8 from "../assets/villa8.jpg";
import villa9 from "../assets/villa9.jpg";
import villa10 from "../assets/villa10.jpg";
import villa11 from "../assets/villa11.jpg";
import villa12 from "../assets/villa12.jpg";
import villa13 from "../assets/villa13.jpg";
import villa14 from "../assets/villa14.jpg";
import villa15 from "../assets/villa15.jpg";
import villa16 from "../assets/villa16.jpg";
import villa17 from "../assets/villa17.jpg";
import villa18 from "../assets/villa18.jpg";
import villa19 from "../assets/villa19.jpg";
import villa20 from "../assets/villa20.jpg";

// Import flat images
import flat1 from "../assets/flat1.jpg";
import flat2 from "../assets/flat2.jpg";
import flat3 from "../assets/flat3.jpg";
import flat4 from "../assets/flat4.jpg";
import flat5 from "../assets/flat5.jpg";
import flat6 from "../assets/flat6.jpg";
import flat7 from "../assets/flat7.jpg";
import flat8 from "../assets/flat8.jpg";
import flat9 from "../assets/flat9.jpg";
import flat10 from "../assets/flat10.jpg";
import flat11 from "../assets/flat11.jpg";
import flat12 from "../assets/flat12.jpg";
import flat13 from "../assets/flat13.jpg";
import flat14 from "../assets/flat14.jpg";
import flat15 from "../assets/flat15.jpg";
import flat16 from "../assets/flat16.jpg";
import flat17 from "../assets/flat17.jpg";
import flat18 from "../assets/flat18.jpg";
import flat19 from "../assets/flat19.jpg";
import flat20 from "../assets/flat20.jpg";

// Import rowhouse images
import rowhouse1 from "../assets/rowhouse1.jpg";
import rowhouse2 from "../assets/rowhouse2.jpg";
import rowhouse3 from "../assets/rowhouse3.jpg";
import rowhouse4 from "../assets/rowhouse4.jpg";
import rowhouse5 from "../assets/rowhouse5.jpg";
import rowhouse6 from "../assets/rowhouse6.jpg";
import rowhouse7 from "../assets/rowhouse7.jpg";
import rowhouse8 from "../assets/rowhouse8.jpg";
import rowhouse9 from "../assets/rowhouse9.jpg";
import rowhouse10 from "../assets/rowhouse10.jpg";
import rowhouse11 from "../assets/rowhouse11.jpg";
import rowhouse12 from "../assets/rowhouse12.jpg";
import rowhouse13 from "../assets/rowhouse13.jpg";
import rowhouse14 from "../assets/rowhouse14.jpg";
import rowhouse15 from "../assets/rowhouse15.jpg";
import rowhouse16 from "../assets/rowhouse16.jpg";
import rowhouse17 from "../assets/rowhouse17.jpg";
import rowhouse18 from "../assets/rowhouse18.jpg";
import rowhouse19 from "../assets/rowhouse19.jpg";
import rowhouse20 from "../assets/rowhouse20.jpg";

// Import hotel images
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import hotel7 from "../assets/hotel7.jpg";
import hotel8 from "../assets/hotel8.jpg";
import hotel9 from "../assets/hotel9.jpg";
import hotel10 from "../assets/hotel10.jpg";
import hotel11 from "../assets/hotel11.jpg";
import hotel12 from "../assets/hotel12.jpg";
import hotel13 from "../assets/hotel13.jpg";
import hotel14 from "../assets/hotel14.jpg";
import hotel15 from "../assets/hotel15.jpg";
import hotel16 from "../assets/hotel16.jpg";
import hotel17 from "../assets/hotel17.jpg";
import hotel18 from "../assets/hotel18.jpg";
import hotel19 from "../assets/hotel19.jpg";
import hotel20 from "../assets/hotel20.jpg";


const propertyTypes = ["house", "villa", "flat", "rowhouse", "bungalow", "hotel"];
const propertyNames = ["Plam Harbor", "Sunset Villa", "Urban Flat", "Green Rowhouse", "Seaside Bungalow", "Luxury Hotel"];

const generateProperty = (type: string, index: number) => {
    return {
        propertyImage: `${type}${index + 1}`,
        price: Math.floor(Math.random() * 10000) + 1500,
        isPopular: Math.random() < 0.5,
        propertyType: type,
        isAvailable: Math.random() < 0.8,
        Location: "NewYork",
        propertyName: `${propertyNames[index % propertyNames.length]} ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        propertyAddress: `${Math.floor(Math.random() * 5000) + 100} Random Street, Highfand Lake, NY`,
        beds: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 3) + 1,
        size: `${Math.floor(Math.random() * 10) + 5}*${Math.floor(Math.random() * 10) + 5} m2`,
    };
};

const generatedProperties: dummyDataType[] = [];

for (let i = 0; i < 100; i++) {
    const type = propertyTypes[i % propertyTypes.length];
    generatedProperties.push(generateProperty(type, i));
}

console.log(generatedProperties);








