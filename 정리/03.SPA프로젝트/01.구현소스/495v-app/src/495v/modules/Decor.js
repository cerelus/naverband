import { ParallaxProvider } from "react-scroll-parallax";
import "../css/decor.css";
import decor_data from "../data/decor";

import { ScrollAction } from "../plugin/ScrollAction";

function Decor(props) {
    // props.sec - 섹션이름
    const decor = decor_data[props.sec];

    console.log(decor, props.sec);

    return (

        <div className="decor">
            {decor.map((v, i) =>
                // src가 배열이면
                typeof v.src !== "string" ? (

                    <div className={
                        v.name + 
                
                    'budle'} key={i}
                    >
                        {v["src"].map((a, b) => (
                            <ParallaxProvider key={b}>
                                <ScrollAction name={v.name + (b + 1)} src={a} ani={v.ani} />
                            </ParallaxProvider>
                        ))}
                    </div>
                ) : (
                    <ParallaxProvider key={i}>
                        <ScrollAction name={v.name} src={v.src} ani={v.ani} />
                    </ParallaxProvider>
                )
            )}
        </div>
    );
} ////// Decor //////

export default Decor;
