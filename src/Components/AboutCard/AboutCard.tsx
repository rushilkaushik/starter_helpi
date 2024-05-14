import React from 'react';

interface Props {image: string, name: string; github: string; linkedin: string; email: string; description: string;}

const AboutCard: React.FC<Props> = ({ name, description }) => {
    
        return (
            <>
                {/* Card for About Page */}
                <div 
                    className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300"
                    style={{
                        maxWidth: "800px",
                        minWidth: "800px",
                        maxHeight: "300px",
                        minHeight: "150px",
                        margin: "0 auto",
                    }}
                >
                    <div>
                        <h1 className="text-lg transition duration-300 underline hover:underline-offset-4 ease-in-out">
                            {name}
                        </h1>
                        <p className="text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            </>
        );
}

export default AboutCard;