import serviceImg from "./../Images/hair-tools.webp";
import hairTypeImg from "./../Images/redhead.webp";
import priceImg from "./../Images/Smiling-Woman.webp";
import toolsImg from "./../Images/woman-mixing-hair-dye-bowl.webp";
import ladiesServiceImg from "./../Images/female-cutting.webp";
import colorServiceImg from "./../Images/hairdresser-does-hair-style-woman.webp";
import gentsServiceImg from "./../Images/stylish-man-sitting-barbershop.webp";
import bridalServiceImg from "./../Images/wedding-hair.webp";
import portraitImg from "./../Images/claire-about.webp";
import workingImg from "./../Images/workingImage.jpg";
import storeFront from "./../Images/shopFront.jpg";

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
        blurb: "A quality service you can expect on every return to the salon.",
        img: toolsImg,
        imgAlt: "Service tools of the trade representing quality.",
        innerText: "Hello World",
    },
    {
        title: "Any Type of Hair",
        blurb: "Curly, Straight, Long or Short. All hair types are welcome.",
        img: hairTypeImg,
        imgAlt: "Image of red headed lady with curly hair.",
        innerText: "Hello World",
    },
    {
        title: "Great Prices",
        blurb: "A competitive price to match any service needed.",
        img: priceImg,
        innerText: "Hello World",
        imgAlt: "Image of brunette haired lady with straight hair",
        reverse: "reverse",
    },
    {
        title: "The Best Tools for the Job",
        blurb: "Employing the latest techniques and only the best equipment, a quality service is assured throughout.",
        img: serviceImg,
        innerText: "Hello World",
        imgAlt: "A combination of tools used when cutting hair.",
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

export const aboutContent = [
    {
        img: portraitImg,
        imgAlt: "",
        title: "In the beginning",
        personalQuote:
            "I would describe my style of hairdressing as naturally beautiful.",
        indepthInfo: [
            "After gaining my qualifications in Foundation and Advanced hairdressing, I quickly worked my way up, working from a Junior to Senior stylist.",
            "My journey did not stop there, I was always chasing my next big opportunity, and this led to me becoming Salon Manager, overseeing a team of seven.",
            "I loved my job, and still do!",
        ],
        reverse: false,
    },
    {
        img: workingImg,
        imgAlt: "",
        title: "Where i am now",
        personalQuote:
            "I like to create styles that my clients are able to recreate in their own homes.",
        indepthInfo: [
            "In 2015, I left the industry, going away and learning new skills which have helped solidify who I am today.",
            "But! Salon life was ingrained in who I am, so in 2018 I became a self-employed Hair Stylist.",
            "So here I am, self-employed at the LV Hair salon and loving it!",
            "I have many wonderful clients and am always overjoyed with meeting new people and seeing many more happy faces leave the salon.",
        ],
        reverse: true,
    },
];

export const aboutFuture = [
    {
        img: storeFront,
        imgAlt: "",
        title: "LV Hair",
        personalQuote:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa minima consequatur consectetur nam placeat.",
        indepthInfo: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa minima consequatur consectetur nam placeat.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa minima consequatur consectetur nam placeat.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa minima consequatur consectetur nam placeat.",
        ],
        reverse: false,
    },
];

export const aboutServiceTC = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint ratione rerum voluptatum praesentium, temporibus repellat aliquid. Rerum, aliquid fugit? Perspiciatis pariatur magnam quam, nisi sint id itaque nostrum dicta reprehenderit voluptatibus, nesciunt sit perferendis beatae qui corrupti repellendus illum quos ut mollitia.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint ratione rerum voluptatum praesentium, temporibus repellat aliquid. Rerum, aliquid fugit? Perspiciatis pariatur magnam quam, nisi sint id itaque nostrum dicta reprehenderit voluptatibus, nesciunt sit perferendis beatae qui corrupti repellendus illum quos ut mollitia.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint ratione rerum voluptatum praesentium, temporibus repellat aliquid. Rerum, aliquid fugit? Perspiciatis pariatur magnam quam, nisi sint id itaque nostrum dicta reprehenderit voluptatibus, nesciunt sit perferendis beatae qui corrupti repellendus illum quos ut mollitia.",
];

export const cancellationPolicy = [
    {
        title: "Cancelling An Appointment",
        policy: [
            "I know life doesnt always go to plan and things come up, therefore, in consideration of my other clients,",
            "If you cant make an appointment please contact me ASAP.",
        ],
    },
    {
        title: "Deposits",
        policy: [
            "Less than 24 hours notice will result in a 50% non-refundable charge of the service you were booked in for.",
            "A no show for the appointment will be a 100% non-refundable charge of the service.",
        ],
    },
    {
        title: "Future Appointments",
        policy: [
            "Repeat offenders of no shows will not be welcome to book any future appointments.",
            "To cancel, please contact me directly.",
        ],
    },
];
