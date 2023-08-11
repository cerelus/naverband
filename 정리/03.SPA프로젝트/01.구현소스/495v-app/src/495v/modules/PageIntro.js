import "../css/decor.css";
import "../css/pageintro.css";
import pageintro_data from "../data/pageintro";
import FlowBan from "./FlowBan";
import Decor from "./Decor";


function PageIntro(props) {
    const sdt = pageintro_data[props.sec];
    const imgbx = sdt["imgbx"];

    return (
        <section className={props.sec}>
            <FlowBan txt={sdt.txt} />
            <div className="introimg">
                {imgbx["left"] !== "" && (
                    <div className="introimg__left">
                        {imgbx["left"].indexOf("./") !== -1 ?
                            <img src={imgbx.left} alt="introimg" /> :
                            <span>{imgbx.left}</span>}
                    </div>
                )}

                {imgbx["center"] !== "" && (
                    <div className="introimg__center">
                        {imgbx["center"].indexOf("./") !== -1 ?
                            <img src={imgbx.center} alt="introimg" /> :
                            <span>{imgbx.center}</span>}
                    </div>
                )}

                {imgbx["right"] !== "" && (
                    <div className="introimg__right">
                        {imgbx["right"].indexOf("./") !== -1 ?
                            <img src={imgbx.right} alt="introimg" /> :
                            <span>{imgbx.right}</span>}
                    </div>
                )}
            </div>
            {
                props.sect === "story1" &&
            <Decor sec={props.sec} />
            }
        </section>
    );
}

export default PageIntro;