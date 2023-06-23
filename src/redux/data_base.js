/* eslint-disable quotes */
// import main catagories image
// import c0 from "../assets/images/hotMeals.jpg";
// import c1 from "../assets/images/saladjpg.jpg";
// import c2 from "../assets/images/desserts.jpg";
// import c3 from "../assets/images/breackfasts.jpg";
// import meals from first catagory
// import c1t1 from "../assets/images/dumplings.jpg";
// import c1t2 from "../assets/images/soup.jpg";
// import c1t3 from "../assets/images/burger.jpg";
// import c1t4 from "../assets/images/borscht.jpg";
// import c1t5 from "../assets/images/fishPancake.jpg";
// import c1t6 from "../assets/images/hotRolls.jpg";
// import meals from second catagory
// import c2t1 from "../assets/images/avogado.jpg";
// import c2t2 from "../assets/images/camembert.jpg";
// import c2t3 from "../assets/images/greekSalad.jpg";
// import c2t4 from "../assets/images/Guacamole.jpg";
// import meals from third catagory
// import c3t1 from "../assets/images/RaspberryMousse.jpg";
// import c3t2 from "../assets/images/VanillaIceCream.jpg";
// import c3t3 from "../assets/images/BrownieWithRaspberries.jpg";
// import c3t4 from "../assets/images/Cheesecake.jpg";
// import c3t5 from "../assets/images/BerryIceCream.jpg";
// import meals from fourth catagory
// import c4t1 from "../assets/images/FullEnglishBreakfast.jpg";
// import c4t2 from "../assets/images/Oatmeal.jpg";
// import c4t3 from "../assets/images/Cheesepancakeswithstrawberryjam.jpg";
// import c4t4 from "../assets/images/AvocadoToast.jpg";
// import c4t5 from "../assets/images/Catfishonpumpkinpuree.jpg";

const ar1 = [
  {
    id: 0,
    src: null,
    name: "چیزبرگر",
    // eslint-disable-next-line no-useless-concat
    discription: "۱۵۰ گرم گوشت گوساله،پنیر پرچرب ، کاهو ،خیارشور",
    price: 199,
    order: 0,
  },
  {
    id: 1,
    src: null,
    name: "ماشروم برگر",
    discription:
      "۱۵۰ گرم گوشت گوساله ، قارج مزه دار شده ، کاهو ، خیارشور ، پیاز کاراملی",
    price: 215,
    order: 0,
  },
  {
    id: 2,
    src: null,
    name: "بیکن برگر",
    discription: "۱۵۰ گرم گوشت گوساله ، بیکن ۹۰% ، کاهو ، خیارشور",
    price: 219,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "اسپشیال برگر",
    discription: "۱۸۰ گرم گوشت گوساله ، پنیر بلوچیز ، کاهو ، خیارشور",
    price: 169,
    order: 0,
  },
  {
    id: 4,
    src: null,
    name: "چیکن برگر",
    discription: "۱۵۰ گرم سینه مرغ گریل شده ، گوجه ، کاهو ، خیارشور",
    price: 169,
    order: 0,
  },
  {
    id: 5,
    src: null,
    name: "اونیون برگر",
    discription: "۱۵۰ گرم گوشت گوساله پیاز کاراملی یا کرانچی ، کاهو ، خیارشور",
    price: 209,
    order: 0,
  },
  {
    id: 6,
    src: null,
    name: "اگ برگر",
    discription: "۱۵۰ گرم گوشت گوساله نیمرو ، کاهو ، خیارشور",
    price: 205,
    order: 0,
  },
  {
    id: 7,
    src: null,
    name: "ژولین برگر",
    discription:
      "۱۵۰ گرم گوشت گوساله سیب زمینی سرخ کرده ژولین ، کاهو ، خیارشور، پیاز کاراملی",
    price: 215,
    order: 0,
  },
];

const ar2 = [
  {
    id: 0,
    src: null,
    name: "چیکن آلفردو",
    discription: "۱۵۰ گرم سینه مرغ گریل شده، سس آلفردو ، کاهو ، خیارشور",
    price: 189,
    halfPrice: 109,
    order: 0,
  },
  {
    id: 1,
    src: null,
    name: "چیکن پستو",
    discription: "۱۵۰ گرم سینه مرغ گریل شده سس پستو، کاهو، خیار شور",
    price: 189,
    halfPrice: 109,
    order: 0,
  },
  {
    id: 2,
    src: null,
    name: "چیکن بوفالو",
    discription:
      "۱۵۰ گرم سینه مرغ گریل شده، سپس دست ساز بوفالو ، کاهو ، خیارشور",
    price: 195,
    halfPrice: 115,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "استیک آلفردو",
    discription: "۱۵۰ گرم راسته گوساله ، سس آلفردو ، کاهو ، خیارشور",
    price: 245,
    halfPrice: 155,
    order: 0,
  },
  {
    id: 4,
    src: null,
    name: "استیک و پنیر",
    discription: "۱۵۰ گرم راسته گوساله، پنیر پیتزا ، کاهو، خیارشور",
    price: 250,
    halfPrice: 160,
    order: 0,
  },
  {
    id: 5,
    src: null,
    name: "رست بیف",
    discription: "۱۵۰ گرم راسته گوساله ریش شده ، کاهو، خیارشور",
    price: 258,
    halfPrice: 168,
    order: 0,
  },
];
const ar3 = [
  {
    id: 0,
    src: null,
    name: "کلاسیک هات داگ",
    discription: "هات داگ ۹۰ درصد ، سس مخصوص پیاز کاراملی ، خیارشور",
    price: 158,
    order: 0,
  },
  {
    id: 1,
    src: null,
    name: "ماشروم داگ",
    discription: "هات داگ ۹۰ درصد، سس مخصوص ، سس الفردو",
    price: 168,
    order: 0,
  },
  {
    id: 2,
    src: null,
    name: "اسپشیال داگ",
    discription:
      "هات داگ ۹۰ درصد گوشت ریش ریش شده یا پیرونی ، پنیر گودا ، خیارشور",
    price: 182,
    order: 0,
  },
  {
    id: 3,
    src: null,
    name: "هات هات",
    discription:
      "هات داگ ۹۰ درصد گوشت چرخ شده تند، هالوپینو ، خیارشور ، سس تند",
    price: 178,
    order: 0,
  },
];
const ar4 = [
  {
    id: 0,
    src: null,
    name: "سیب زمینی سرخ کرده",
    discription: "سیب زمینی با ادویه مخصوص",
    price: 99,
    order: 0,
  },
  {
    id: 1,
    src: null,
    name: "وایت فرایز",
    discription: "سیب زمینی با سس الفردو",
    price: 109,
    order: 0,
  },
  {
    id: 2,
    src: null,
    name: "چیزی فرایز",
    discription: "سیب زمینی با سس پنیر",
    price: 112,
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
