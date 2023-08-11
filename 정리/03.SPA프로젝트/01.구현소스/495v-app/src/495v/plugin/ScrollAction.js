import { useParallax } from "react-scroll-parallax";

function ScrollAction(props) {
    let obj;
    let ani = props.ani;
    if(ani==="mu"){
        obj={speed: 20};
    }
    else if(ani==="mr"){
        obj={translateX: [-20, 0]};
    }
    else if(ani==="rl"){
        obj={rotate: [-5, 30]};
    }
    else if(ani==="rr"){
        obj={rotate: [30, -5],scale: [1.3, 1, 'easeInQuad']};
    }

    let parallax = useParallax(obj);
 
    return (
        <div className={props.name} ref={parallax.ref}>
            <img src={props.src} alt={props.name} />
        </div>

    );
}

export {ScrollAction};