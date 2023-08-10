/* eslint-disable quotes */
// import main catagories image
// import c0 from "../assets/images/hotMeals.jpg";
// import c1 from "../assets/images/saladjpg.jpg";
// import c2 from "../assets/images/desserts.jpg";
// import c3 from "../assets/images/breackfasts.jpg";
// import meals from first catagory
import c1t1 from "../assets/images/8.jpg";
import c1t2 from "../assets/images/1.jpg";
import c1t7 from "../assets/images/2.jpg";
import c1t3 from "../assets/images/9.jpg";
import c1t4 from "../assets/images/10.jpg";
import c1t5 from "../assets/images/11.jpg";
import c1t6 from "../assets/images/sub (3).jpg";
import c1t8 from "../assets/images/sub (8).jpg";
// import meals from second catagory
import c2t1 from "../assets/images/sub (9).jpg";
import c2t2 from "../assets/images/13.jpg";
import c2t3 from "../assets/images/15.jpg";
// import c2t4 from "../assets/images/Guacamole.jpg";
// import meals from third catagory
import c3t1 from "../assets/images/4.jpg";
import c3t2 from "../assets/images/6.jpg";
// import c3t3 from "../assets/images/BrownieWithRaspberries.jpg";
// import c3t4 from "../assets/images/Cheesecake.jpg";
// import c3t5 from "../assets/images/BerryIceCream.jpg";
// import meals from fourth catagory
import c4t1 from "../assets/images/12.jpg";
import c4t2 from "../assets/images/14.jpg";
import c4t3 from "../assets/images/5.jpg";
// import c4t4 from "../assets/images/AvocadoToast.jpg";
// import c4t5 from "../assets/images/Catfishonpumpkinpuree.jpg";

const ar1 = [
  {
    id: 8,
    src: c1t1,
    name: "کلاسیک برگر",
    // eslint-disable-next-line no-useless-concat
    discription:
      "۱۵۰ گرم گوشت گوساله،پنیر گودا، گوجه ، پیاز ، کاهو ،خیارشور، سس مخصوص",
    price: 207,
    order: 0,
  },
  {
    id: 0,
    src: c1t4,
    name: "چیزبرگر",
    // eslint-disable-next-line no-useless-concat
    discription: "۱۵۰ گرم گوشت گوساله،دو ورق پنیر گودا ، کاهو ،خیارشور",
    price: 205,
    order: 0,
  },
  {
    id: 1,
    src: c1t3,
    name: "ماشروم برگر",
    discription:
      "۱۵۰ گرم گوشت گوساله ، قارج مزه دار شده ، کاهو ، خیارشور ، پیاز کاراملی، پنیر گودا",
    price: 230,
    order: 0,
  },
  {
    id: 2,
    src: c1t2,
    name: "بیکن برگر",
    discription: "۱۵۰ گرم گوشت گوساله ، بیکن ۹۰% ، کاهو ، خیارشور، پنیر گودا",
    price: 232,
    order: 0,
  },
  {
    id: 3,
    src: c1t6,
    name: "اسپشیال برگر",
    discription:
      "۱۸۰ گرم گوشت گوساله مزه دار شده ، پنیر بلوچیز ، کاهو ، خیارشور",
    price: 272,
    order: 0,
  },
  {
    id: 4,
    src: c1t5,
    name: "چیکن برگر",
    discription: "۱۵۰ گرم سینه مرغ گریل شده ، گوجه ، کاهو ، خیارشور، پنیر گودا",
    price: 199,
    order: 0,
  },
  {
    id: 5,
    src: null,
    name: "اونیون برگر",
    discription:
      "۱۵۰ گرم گوشت گوساله، پیاز کاراملی یا کرانچی ، کاهو ، خیارشور، پنیر گودا",
    price: 219,
    order: 0,
  },
  {
    id: 6,
    src: c1t8,
    name: "اگ برگر",
    discription: "۱۵۰ گرم گوشت گوساله، نیمرو ، کاهو ، خیارشور، پنیر گودا",
    price: 214,
    order: 0,
  },
  {
    id: 7,
    src: c1t7,
    name: "پولد بیف برگر",
    discription:
      "۱۰۰ گرم گوشت ریش ریش شده، ۷۵ گرم برگر گوساله ، سس مخصوص، سس باربیکیو، خیارشور، پیاز سوخاری، پنیر گودا",
    price: 298,
    order: 0,
  },
];

const ar2 = [
  {
    id: 0,
    src: c2t1,
    name: "چیکن آلفردو",
    discription: "۲۰۰ گرم سینه مرغ گریل شده، سس آلفردو ، کاهو ، خیارشور",
    price: 197,
    halfPrice: 117,
    order: 0,
  },
  {
    id: 1,
    src: c2t2,
    name: "چیکن پستو",
    discription: "۲۰۰ گرم سینه مرغ گریل شده سس پستو، کاهو، خیار شور، گوجه خشک",
    price: 197,
    halfPrice: 117,
    order: 0,
  },
  {
    id: 2,
    src: c2t3,
    name: "چیکن بوفالو",
    discription:
      "۲۰۰ گرم سینه مرغ گریل شده، سس دست ساز بوفالو ، کاهو ، خیارشور",
    price: 203,
    halfPrice: 123,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "استیک آلفردو",
    discription: "۱۸۰ گرم راسته گوساله ، سس آلفردو ، کاهو ، خیارشور",
    price: 259,
    halfPrice: 158,
    order: 0,
  },
  {
    id: 4,
    src: null,
    name: "استیک و پنیر",
    discription: "۱۸۰ گرم راسته گوساله، پنیر پیتزا ، کاهو، خیارشور",
    price: 256,
    halfPrice: 155,
    order: 0,
  },
  {
    id: 5,
    src: null,
    name: "رست بیف",
    discription: "۱۸۰ گرم راسته گوساله ریش شده ، کاهو، خیارشور، سس آلفردو",
    price: 283,
    halfPrice: 183,
    order: 0,
  },
];
const ar3 = [
  {
    id: 0,
    src: c3t1,
    name: "کلاسیک هات داگ",
    discription: "هات داگ ۹۰ درصد ، سس مخصوص، پیاز کاراملی ، خیارشور",
    price: 158,
    order: 0,
  },
  {
    id: 1,
    src: c3t2,
    name: "ماشروم داگ",
    discription: "هات داگ ۹۰ درصد، سس مخصوص ، سس آلفردو، خیارشور",
    price: 168,
    order: 0,
  },
  {
    id: 2,
    src: null,
    name: "اسپشیال داگ",
    discription:
      "هات داگ ۹۰ درصد، گوشت ریش ریش شده یا پیرونی ، پنیر موتزارلا ، خیارشور",
    price: 182,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "هات هات",
    discription:
      "هات داگ ۹۰ درصد، گوشت چرخ شده تند، هالوپینو ، خیارشور ، سس تند، دیپ پنیر",
    price: 178,
    order: 0,
  },
];
const ar4 = [
  {
    id: 0,
    src: c4t1,
    name: "سیب زمینی سرخ کرده",
    discription: "سیب زمینی با ادویه مخصوص",
    price: 99,
    order: 0,
  },
  {
    id: 1,
    src: c4t2,
    name: "وایت فرایز",
    discription: "سیب زمینی با سس الفردو",
    price: 109,
    order: 0,
  },
  {
    id: 2,
    src: c4t3,
    name: "اسپشیال چیزی فرایز",
    discription:
      "سیب زمینی، ژامبون گوشت، پنیر موتزارلا، فلفل دلمه ای، سس مخصوص، ادویه مخصوص",
    price: 199,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "بیکن فرایز",
    discription: "سیب زمینی با سس پنیر و بیکن ۹۰ درصد",
    price: 118,
    order: 0,
  },
];

const catagories = [
  {
    id: 0,
    name: "برگر",
    src: null,
    list: ar1,
  },
  {
    id: 1,
    name: "ساندویچ",
    src: null,
    list: ar2,
  },
  {
    id: 2,
    name: "هات داگ",
    src: null,
    list: ar3,
  },
  {
    id: 3,
    name: "پیش غذا",
    src: null,
    list: ar4,
  },
];
export default catagories;
