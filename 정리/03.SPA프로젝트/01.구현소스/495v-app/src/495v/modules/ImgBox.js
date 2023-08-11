import "../css/imgbox.css";
import imgbox_data from "../data/imgbox";
import Decor from "./Decor";

function ImgBox(props) {
    // props.sec - 섹션이름
    const sdt = imgbox_data[props.sec];
    const item = sdt["item"];

    return (
        <section className={props.sec}>
            <div className="imgbox">
                <div className="imgbox__top">
                    <div className="imgbox___tit">{sdt.tit}</div>
                    <div className="imgbox__sub">{sdt.sub}</div>
                    <div className="imgbox__divider">
                        <img src="./images/common/divider_w.svg" alt="divider" />
                    </div>
                </div>
                <div className="imgbox__bottom">
                    {item.map((v, i) => (
                        <div key={i} className="imgbox__item">
                            <div className="item-img">
                                <img src={v.img} />
                            </div>
                            <div className="item-tit">{v.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Decor sec={props.sec} />
        </section>
    );
} ////// ImgBox //////

export default ImgBox;
