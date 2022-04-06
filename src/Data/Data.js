import serviceImg from "./../Images/hair-tools.webp";
import hairTypeImg from "./../Images/redhead.webp";
import priceImg from "./../Images/Smiling-Woman.webp";
import toolsImg from "./../Images/woman-mixing-hair-dye-bowl.webp";
import ladiesServiceImg from "./../Images/female-cutting.webp";
import colorServiceImg from "./../Images/hairdresser-does-hair-style-woman.webp";
import gentsServiceImg from "./../Images/stylish-man-sitting-barbershop.webp";
import bridalServiceImg from "./../Images/wedding-hair.webp";

export const services = [
    {
        title: "Ladies",
        img: ladiesServiceImg,
        options: [
            { name: "Wash, Cut & Finish", price: "£32.00" },
            { name: "Restyle", price: "£37.00" },
            { name: "Dry Cut", price: "£20.00" },
            { name: "Wash & Cut", price: "£25.00" },
            { name: "Wash & Finish", price: "£15.00" },
            { name: "Wash & Cut (thick/long)", price: "£20.00" },
            { name: "Wash & Curl", price: "£20.00" },
            { name: "Wash & Blast Dry", price: "£10.00" },
        ],
    },
    {
        title: "Colours",
        img: colorServiceImg,
        options: [
            { name: "Root touch up", price: "£62.00" },
            { name: "Full Head Colour", price: "£72.00" },
            { name: "Semi-Permanent", price: "£62.00" },
            { name: "Full Head Foils", price: "£82.00" },
            { name: "Half Head Foils", price: "£77.00" },
            { name: "T-Section Foils", price: "£72.00" },
            { name: "Parting Foils", price: "£62.00" },
            { name: "Face Frame", price: "£52.00" },
            { name: "Balayage", price: "£92.00" },
            { name: "Toner", price: "£10.00" },
        ],
    },
    {
        title: "Gents",
        img: gentsServiceImg,
        reverse: "reverse",
        options: [
            { name: "Gents Cut", price: "£10.00" },
            { name: "Head Shave", price: "£6.00" },
            { name: "Childs Cut", price: "£7.00 - £10.00" },
        ],
    },
    {
        title: "Hair Up",
        img: bridalServiceImg,
        reverse: "reverse",
        options: [
            { name: "Hair Up Do", price: "£30.00" },
            { name: "Bridal", price: "On Request" },
        ],
    },
];

export const homeTiles = [
    {
        title: "Quality Service",
        blurb: "I pride myself in taking care of each of my clients, listening to any concerns you may have and adapting my technique to leave you feeling wonderful.",
        img: serviceImg,
        imgAlt: "",
        innerText: "Hello World",
    },
    {
        title: "Any Type of Hair",
        blurb: "Curly, Straight, Long or Short. All hair types are welcome.",
        img: hairTypeImg,
        imgAlt: "",
        innerText: "Hello World",
    },
    {
        title: "Great Prices",
        blurb: "A price to match any service needed.",
        img: priceImg,
        innerText: "Hello World",
        imgAlt: "",
        reverse: "reverse",
    },
    {
        title: "The Best Tools for the Job",
        blurb: "Employing the latest techniques, no job is too big for me. Only the best equipment is used to ensure a quality service throughout.",
        img: toolsImg,
        innerText: "Hello World",
        imgAlt: "",
        reverse: "reverse",
    },
];

export const reviewQuote = [
    {
        review: "Had my hair done by Claire for colour correction (by a different salon) Claire did an amazing job and I can’t wait for my next appointment, super talented and an excellent hairdresser 😍",
    },
    {
        review: "Was lucky enough to win a competition for a hair treatment with cut and blow dry. Lovely products used and really pleased with the result. Would def recommend Claire. thank you again x",
    },
    {
        review: "Claire is amazing with hair. She created the most amazing colour for me. Honestly would recommend Claire to anyone looking for any kind of cut or colour x",
    },
];
