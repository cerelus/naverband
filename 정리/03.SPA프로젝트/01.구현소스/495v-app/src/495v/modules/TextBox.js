import { Link } from "react-router-dom";
import "../css/decor.css";
import "../css/textbox.css";
import textbox_data from "../data/textbox";

function TextBox(props) {
    // props.sec - 섹션이름, props.lk - 링크
    const sdt = textbox_data[props.sec];

    return (
        <section className={props.sec}>
            <div className="textbox">
                
                {sdt.tit !== "" && (
                    <div className="textbox___tit">{sdt.tit}</div>
                )}
                {sdt.img !== "" && (
                    <div className="textbox__img">
                        <img src={sdt.img} alt="img" />
                    </div>
                )}
                <div className="textbox__desc">{sdt.desc}</div>
                {sdt.divider !== "" && (
                    <div className="textbox__divider">
                        <img src={sdt.divider} alt="divider" />
                    </div>
                )}
                <div className="textbox__btn">
                    {
                        // 버튼이 있으면
                        sdt.btnIcon !== "" ? 
                            <Link to={`/${props.lk}`}>
                                <div className="btn-icon">
                                    <img src={sdt.btnIcon} alt="move-button" />
                                </div>
                                <div className="btn-text">{sdt.btnTxt}</div>
                            </Link>
                            :
                            // 버튼이 없으면
                            <div className="btn-text">{sdt.btnTxt}</div>
                    }
                </div>
            </div>
            
        </section>
    );
} ////// TextBox //////

export default TextBox;
