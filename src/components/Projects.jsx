import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Houseimage1 from '/Houseimage1.jpg'
import Houseimage2 from '/Houseimage2.jpg'
import Houseimage3 from '/Houseimage3.jpg'
import Houseimage4 from '/Houseimage4.jpg'
import Houseimage5 from '/Houseimage5.jpg'
import Houseimage6 from '/Houseimage6.jpg'
import Houseimage7 from '/Houseimage7.jpg'
import Houseimage8 from '/Houseimage8.jpg'
import Houseimage9 from '/Houseimage9.jpg'
import Houseimage10 from '/Houseimage10.jpg'
import Houseimage11 from '/Houseimage11.jpg'
import Houseimage12 from '/Houseimage12.jpg'
import Houseimage13 from '/Houseimage13.jpg'
import Houseimage14 from '/Houseimage14.jpg'
import Houseimage15 from '/Houseimage15.jpg'
import Houseimage16 from '/Houseimage16.jpg'
import Houseimage17 from '/Houseimage17.jpg'
import { useEffect } from "react";
import { motion } from "framer-motion"

const projectData = [
    {
        title: "Port-Harcourt",
        image: Houseimage1
    },
    {
        title: "Lagos",
        image: Houseimage10
    },
    {
        title: "Bayelsa",
        image: Houseimage16
    },
    {
        title: "Lagos",
        image: Houseimage4
    },
    {
        title: "Lagos",
        image: Houseimage8
    },
    {
        title: "Lagos",
        image: Houseimage12
    },
    {
        title: "Lagos",
        image: Houseimage17
    },
    {
        title: "Lagos",
        image: Houseimage14
    },
    {
        title: "Lagos",
        image: Houseimage5
    },
];

function Projects(){
    const[currentIndex, setCurrentIndex] = useState(0);
    const[cardsToShow, setCardsToShow] = useState(1);

    useEffect(()=>{
    const updateCardsToShow = ()=>{
        if(window.innerWidth >= 1024){
            setCardsToShow(projectData.length);
        } else{
            setCardsToShow(1)
        };
    };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    },[])

    const nextProject = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length)
    }
    const prevProject = () =>{
        setCurrentIndex((prevIndex) =>prevIndex === 0 ? projectData.length - 1 : prevIndex - 1)
    }

    return(
        <motion.div
            initial={{opacity:0, x:-200}}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
            viewport={{once: true}}
        className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects 
                <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Crafting Spaces, Building Legacies-Explore our Portfolio</p>

            {/* Slider buttons */}
            <div className="flex justify-end items-center mb-8">
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project" onClick={prevProject}>
                    <ArrowLeft />
                </button>
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project" onClick={nextProject}>
                    <ArrowRight />
                </button>
            </div>
            {/* Poject Slider Container */}
            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in"
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                    {projectData.map((project, index) =>(
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img src={project.image} alt={project.title} className="w-full h-auto mb-14"/>
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="font-semibold text-gray-800">{project.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects