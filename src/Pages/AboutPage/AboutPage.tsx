import React from 'react';
import background from "../../Components/Hero/background.png";
import AboutCard from '../../Components/AboutCard/AboutCard';


interface Props {}


const AboutPage = (props: Props) => {
    return (
        <>
            {/* Hero Section */}
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
                <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row pt-20">
                    
                    {/* Left Side Caption */}
                    <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
                        <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                            About Us
                        </h1>
                        <div className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-indigo-500">
                            JobMatchAI
                        </div>
                    </div>
                    
                    {/* About Us content */}
                    <div className="space-y-3">
                        <div>
                            <AboutCard 
                                image="/"
                                name="Rushil Kaushik"
                                github="/"
                                linkedin="/"
                                email="/"
                                description="Rushil Description"
                            />
                        </div>
                        <div>
                            <AboutCard
                                image="/"
                                name="Edmar Pelayo"
                                github="/"
                                linkedin="/"
                                email="/"
                                description="Edmar Description"
                            />
                        </div>
                        <div>
                            <AboutCard
                                image="/"
                                name="Kushal Gurrapu"
                                github="/"
                                linkedin="/"
                                email="/"
                                description="Kushal Description"
                            />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default AboutPage;;