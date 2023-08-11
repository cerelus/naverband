import "./css/main.css";
import PageIntro from "./modules/PageIntro";
import TextBox from "./modules/TextBox";
import SwiperPr from "./plugin/SwiperPr";
import ImgBox from "./modules/ImgBox";


const Main = () => {
 
  return (
    <>
      <PageIntro sec="main1" />
      <TextBox sec="main2" lk="" />
      <TextBox sec="main3" lk="st" />
      <SwiperPr sec="main4" />
      <ImgBox sec="main5" />
      <TextBox sec="main6" lk="re" />
      <TextBox sec="main7" lk="ca" />
    </>
  );
};

export default Main;