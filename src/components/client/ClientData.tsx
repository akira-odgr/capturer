import ClientImage1 from "../../assets/images/client-1.jpg";
import ClientImage2 from "../../assets/images/client-2.jpg";
import ClientImage3 from "../../assets/images/client-3.jpg";

type ClientDataType = {
    id: number;
    image: string;
    desc: string;
    title: string;
};

export const clientData: ClientDataType[] = [
    {
        id: 1,
        image: ClientImage1,
        desc: " Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable. Every time we look at our wedding photos, we're transported back to those magical moments. Thank you for preserving our memories so beautifully!",
        title: "Sarah and Michael",
    },
    {
        id: 2,
        image: ClientImage2,
        desc: " Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable. Every time we look at our wedding photos, we're transported back to those magical moments. Thank you for preserving our memories so beautifully!",
        title: "Sarah and Michael",
    },
    {
        id: 3,
        image: ClientImage3,
        desc: " Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable. Every time we look at our wedding photos, we're transported back to those magical moments. Thank you for preserving our memories so beautifully!",
        title: "Sarah and Michael",
    },
];
