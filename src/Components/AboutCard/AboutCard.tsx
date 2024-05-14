import React from 'react';

interface Props { name: string; github: string; linkedin: string; email: string; role: string;}

const AboutCard: React.FC<Props> = ({ name, role, email, linkedin, github }) => {
    
        return (
            <>
                {/* Card for About Page */}
                <div 
                    className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300"
                    style={{
                        maxWidth: "600px",
                        minWidth: "600px",
                        maxHeight: "300px",
                        minHeight: "150px",
                        margin: "0 auto",
                    }}
                >
                    <div className="space-y-4">
                        {/* top row with Name, email, linkedin, github */}
                        <div className="flex align-middle space-x-4 text-slate-500">
                            <h1 className="text-2xl transition duration-300 underline hover:underline-offset-4">
                                {name}
                            </h1>
                            <div className="text-lg">
                                {role}
                            </div>
                        </div>
                        
                        {/* Bottom half of card */}
                        <div className="flex align-middle space-x-8 text-sm text-blue-500">
                            <div className="flex">
                                <image></image>
                                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </div>
                            <div >
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </div>
                            <div>
                                <a href={`mailto:${email}`}>
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default AboutCard;