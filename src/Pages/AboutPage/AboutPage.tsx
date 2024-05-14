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
                        <div>
                            <p className="text-justify text-lg lg:text-xl">
                                We created this site to help people find their ideal career based on a basic or more detailed AI-powered career quiz. Our goal is to provide personalized career recommendations and guidance to individuals looking to explore different career paths. Whether you're just starting out or considering a career change, our platform can assist you in making informed decisions about your professional future.
                            </p>
                        </div>
                    </div>
                    
                    {/* About Us content */}
                    <div className="space-y-5">
                        <div>
                            <AboutCard 
                                name="Rushil Kaushik"
                                github="https://www.github.com/rushilkaushik"
                                linkedin="https://www.linkedin.com/in/rushil-kaushik"
                                email="rushilkaushik0326@gmail.com"
                                role="Project Manager"
                            />
                        </div>
                        <div>
                            <AboutCard
                                name="Edmar Pelayo"
                                github="https://www.github.com/edmarpelayo"
                                linkedin="https://www.linkedin.com/in/edmar-pelayo-42185121a/"
                                email="edmarp@udel.edu"
                                role="Team Member"
                            />
                        </div>
                        <div>
                            <AboutCard
                                name="Kushal Gurrapu"
                                github="https://www.github.com/kushalgurrapu"
                                linkedin="https://www.linkedin.com/in/kgurrapu/"
                                email="kushalg@udel.edu"
                                role="Team Member"
                            />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default AboutPage;;