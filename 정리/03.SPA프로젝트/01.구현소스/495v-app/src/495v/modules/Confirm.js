import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import "../css/confirm.css";
import $ from "jquery";

function Confirm() {
    const [cookies, setCookie] = useCookies(["confirmCookie"]);
    const [showConfirm, setShowConfirm] = useState(true);

    const confirmBoxRef = useRef(null);

    useEffect(() => {
        if (confirmBoxRef.current) {
            confirmBoxRef.current.style.transform = "scale(1)";
        }

        if (cookies.confirmCookie === "true") {
            setShowConfirm(false);
        }
    }, [cookies.confirmCookie]);

    const handleAllowClick = () => {
        setCookie("confirmCookie", "true", { path: "/", maxAge: 60 * 10 });

        setShowConfirm(false);
    };

    const handleRejectClick = () => {
        setShowConfirm(false);
    };

    

    return (
        <div id="confirm" className={showConfirm ? "" : "hidden"}>
            <div className="confirm__box" ref={confirmBoxRef}>
                <div className="confirm__box-inner">
                    <div className="confirm__tit">Are you 18 or older?</div>
                    <div className="confirm__desc">You must be at least 18 years old to visit this website</div>
                    <div className="confirm__btns">
                        <button className="confirm__btn allow" onClick={handleAllowClick}>
                            <div className="btn-icon">
                                <img src="./images/common/btn-arrow.svg" alt="allow-button" />
                            </div>
                            <div className="btn-text">Yes, let’s talk vodka!</div>
                        </button>
                        <button className="confirm__btn reject" onClick={handleRejectClick}>
                            <div className="btn-icon">
                                <img src="./images/common/btn-cancel.svg" alt="cancel-button" />
                            </div>
                            <div className="btn-text">No, I will come back later…</div>
                        </button>
                    </div>
                    <div className="reject-text">You are not old enough to view this content.</div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
