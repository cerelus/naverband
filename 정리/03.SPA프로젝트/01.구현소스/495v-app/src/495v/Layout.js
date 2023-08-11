import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import { top_data } from "./data/common";
import { useState, useEffect } from "react";
import $ from "jquery";
import Confirm from "./modules/Confirm";



const Layout = () => {
    // 햄버거 토글
    const [isToggle, setIsToggle] = useState(false);
    const toggleHandler = () => {
        setIsToggle(!isToggle);
    };
    document.body.style.overflow = isToggle ? "hidden" : "auto";
    const toggleClassName = isToggle ? "show" : "";

    // 메뉴버튼 클릭시 메뉴닫기
    $(".menu__list a").click(()=> $(".top__burger").trigger("click") )

    // 스크롤시 헤더숨김
    const [isMenuHidden, setIsMenuHidden] = useState(false);
    useEffect(() => {
        let lastScrollTop = 0;

        const scrollHandler = () => {

            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setIsMenuHidden(true);
            } else {
                setIsMenuHidden(false);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };
        window.addEventListener("scroll", scrollHandler);

    }, [setIsMenuHidden]);
    const menuClassName = isMenuHidden ? 'hidden' : '';

   

    ////////////////////////////////////////////////////////////////

    return (
        <>
            <Confirm />
            <header id="top" className={menuClassName} >
                <button className={`top__burger ${toggleClassName}`} onClick={toggleHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav id="top__menu" className={toggleClassName}>
                    <ul className="menu__list">
                        {top_data.map((v, i) => (
                            <li key={i}>
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="decor">
                        <div className="wire">
                            <img src="./images/decor/wire.svg" alt="" />
                        </div>
                        <div className="phone">
                            <img src="./images/decor/phone.svg" alt="" />
                        </div>
                    </div>
                </nav>
                <h1 className="top__logo">
                    <Link to="/">
                        <img src="./images/common/logo.svg" alt="495 vodka" />
                    </Link>
                </h1>
            </header>

            <main id="cont">
                <Outlet />
            </main>
        </>
    );
}; ////// Layout //////

export default Layout;
