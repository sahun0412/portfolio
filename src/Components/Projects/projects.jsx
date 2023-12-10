import { Card } from "react-bootstrap";
import { useState } from "react";
import foodie from "../images/foodie.jpg";
import hotel from "../images/hotel.jpg";
import moviesdb from "../images/moviesdb.jpg";
import store from "../images/store.jpg";
import littleMoments from "../images/little-moments.jpg";


import "../Projects/projects.css";


export function Projects() {
    const [getCardItem, setCardItem] = useState([
        
        {
            link: "https://store-ns0412.web.app/",
            title: "Ecommerce",
            techStack: "Tech Stack : React, Redux, Bootstrap, FakeStoreAPI",
            desc: "An eCommerce masterpiece crafted using the React.js framework, boasting complete responsiveness for an optimal shopping journey.",
            image: store,
        },
        {
            link: "https://nsmoviesdb-b6444.web.app/",
            title: "MoviesDB",
            techStack: "Tech Stack : HTML, CSS, React",
            desc: " MoviesDB is a React-based web app that fetches data from the OMDb API, allowing users to search for and view movie details.",
            image: moviesdb,
        },
        
        
        {
            link: "https://sahun0412.github.io/DigitalBhem/hotel.html",
            title: "Hotel",
            techStack: "Tech Stack : HTML, CSS, JavaScript",
            desc: "Hotel Registration Form is a web-based form that allows users to book hotel rooms by providing their relevant information and preferences.",
            image: hotel,
        },
        {
            link: "https://sahun0412.github.io/Foodies/",
            title: "Foodie",
            techStack: "Tech Stack : HTML, CSS, JavaScript",
            desc: " Foodie restaurant web app is an online application designed to cater to food enthusiasts, providing them with various features related to restaurants and dining experiences.",
            image: foodie,
        },

        {
            link: "https://little-moments-5686f.web.app/",
            title: "Little-Moments",
            techStack: "Tech Stack : React Js, Material UI",
            desc: "Single Page UI",
            image: littleMoments,
        }
       

        
    ]);

    return (
       <div>
         
         <div className="mt-4 p-4" id="projects">
            <h6>My Work</h6>
            <h3 className="m-4 fw-bold">Projects</h3>
         </div>
         
         <div className="m-4 p-4 d-flex justify-content-evenly align-content-center flex-wrap">
            
            {getCardItem.map((item, index) => (
                <Card className="card mt-4" style={{ width: '24em', m: 2, p: 2 }} key={index}>
                    <Card.Img variant="top" src={item.image} className="crdImg" height={350} />


                    <div className="cardOverlay">
                        <div className="cardHeader">
                            <div className="cardArc">
                                <Card.Body className="body">
                                    <Card.Title className="fw-bold fs-3">{item.title}</Card.Title>

                                    <Card.Text>{item.techStack}</Card.Text>


                                </Card.Body>
                            </div>


                          
                          <div className="cardFooter m-2 p-2">
                          <Card.Text className="desc">{item.desc}</Card.Text>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold text-white">
                                View Project
                            </a>
                          </div>
                           
                        </div>


                    </div>


                </Card>
                
            ))}
        </div>
        
       </div>
    );
}
