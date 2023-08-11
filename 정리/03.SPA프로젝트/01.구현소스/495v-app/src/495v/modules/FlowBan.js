import React, { useEffect, useRef } from "react";
import "../css/flowban.css";

function FlowBan(props) {
    // props.txt - 배너텍스트
    const flowBanInnerRef = useRef(null);

    useEffect(() => {
        const flowBanInner = flowBanInnerRef.current;
        let flowBanWidth;
        let pos = 0;
        let intervalId;

        setTimeout(() => flowStart(), 20);

        const flowStart = () => {
            flowBanWidth = flowBanInner.querySelector(".flowBan__text").scrollWidth;
            intervalId = setInterval(() => {
                pos--;
                if (pos < -flowBanWidth) {
                    pos = 0;
                    let flowBanText = flowBanInner.querySelectorAll(".flowBan__text");
                    flowBanInner.appendChild(flowBanText[0]);
                }
                flowBanInner.style.left = pos + "px";
            }, 10);
        };

        // 윈도우 리사이즈
        const handleResize = () => {
            clearInterval(intervalId);
            flowStart();
          };
      
          window.addEventListener("resize", handleResize);

    }, []);

    function makeCode() {
        let array = [];
        for (let i = 0; i < 3; i++) {
            array.push(
                <span key={i} className="flowBan__text">
                    {props.txt}
                </span>
            );
        }
        return array;
    }

    return (
        <div className="flowBan">
            <div ref={flowBanInnerRef} className="flowBan__inner">
                {makeCode()}
            </div>
        </div>
    );
}

export default FlowBan;
