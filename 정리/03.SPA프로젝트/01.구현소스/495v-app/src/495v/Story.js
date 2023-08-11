import "./css/story.css";
import PageIntro from "./modules/PageIntro";
import TextBox from "./modules/TextBox";

const Story = () => {
    return(
        <>
            <PageIntro sec="story1" />
            <TextBox sec="story2" />
            <TextBox sec="story3" />
            <TextBox sec="story4" />
        </>
    );
}; ////// Story //////

export default Story;