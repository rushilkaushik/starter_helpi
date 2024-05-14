import React from 'react';
import Hero from '../../Components/Hero/hero';
import background from "../../Components/Hero/background.png";


interface Props {}


const AboutPage = (props: Props) => {
    return (
        <>
            <section
                id="Hero"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    height: "100vh",
                }}
            >
                
            </section>
        </>
    );
};

export default AboutPage;;