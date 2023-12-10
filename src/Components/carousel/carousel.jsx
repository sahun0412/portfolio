// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"


import Carousel from "react-bootstrap/Carousel";

import { DownloadForOffline, EmojiEmotions, Collections } from "@mui/icons-material";
import "../carousel/carousel.css";


import Caro2 from "../images/Caro2.jpg";
import Caro from "../images/Caro.jpg";


export function MCarousel() {




  return (
    <div className="caro text-center ">


      {/* View CV */}
      <Carousel fade>
        
        <Carousel.Item>
        <img src={Caro} className="caroImg img-fluid" alt="" />
          
          
         
         <Carousel.Caption>
          <h3 className="h3">Hello ! I Am Naresh <EmojiEmotions /></h3>
            <p className="hello">"The showcased project in my portfolio demonstrates my aptitude for building impactful and scalable solutions."</p>
            
           <div className="btn">
             
           <a className="link"
              href='https://drive.google.com/file/d/1sPlPG4Q3RgrHSEwawWcC-mLALg4sK-li/view'
              rel='opener noreferrer'
              target='_blank'
            >
              VIEW CV <DownloadForOffline className="offlineBtn"/>
            </a>
           </div>
            
          </Carousel.Caption>
        
          
          
          

        </Carousel.Item>


        {/* View Project In Git Repo */}

        <Carousel.Item>
          <img src={Caro2} className="caroImg img-fluid" alt="" />
          <Carousel.Caption>

            <p className="h3">
              Please review what I have built and provide constructive feedback for improvement.
            </p>
           <div className="btn">
           <a className="link"
              href='https://github.com/sahun0412?tab=repositories'
              rel='opener noreferrer'
              target='_blank'
            >
              VIEW PROJECTS <Collections />
            </a>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}