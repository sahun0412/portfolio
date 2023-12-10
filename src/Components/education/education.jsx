
import { Work } from "@mui/icons-material";
import { School } from "@mui/icons-material";

import "../education/education.css";







export function Education(){


    return(
        <div className="box" id='education'>
        
          <span className="head">MY JOURNEY</span>
          <section className="container">
            <div className="container_content">
              <div className="row">
                <div className="row_md_12">
                  <div className="timeline_centered">
                    
                    
                    
                      
                    
                    
                      <article className="timeline_entry">
                        <div className="timeline_icon">
                          <School />
                        </div>
                        <div className="label">
                          <h2>
                            Undergraduation at Gondwana University <span>2022</span>
                          </h2>
                          <p>
                            I have completed my undergraduation in Bachelor's of Science in Computer Science from 
                            from <a href='https://gug.digitaluniversity.ac/' rel="noreferrer" target="_blank">Gondwana University,Gadchiroli</a> with overall 8.33 CGPA ( 75% ).
                          </p>
                        </div>
                      </article>
                    
                      <article className="timeline_entry">
                        <div className="timeline_icon timeline_icon_2">
                          <School />
                        </div>
                        <div className="label">
                          <h2>
                            Higher Secondary ( XII<sup>th</sup> ) <span>2018</span>
                          </h2>
                          <p>
                            I have completed my Higher Secondary education from  Nagpur Board, Maharashtra with major subjects as
                            Physics,Chemistry & Maths with 59% .
                          </p>
                        </div>
                      </article>


                      <article className="timeline_entry">
                        <div className="timeline_icon timeline_icon_2">
                          <School />
                        </div>
                        <div className="label">
                          <h2>
                             Secondary ( X<sup>th</sup> ) <span>2016</span>
                          </h2>
                          <p>
                            I have completed my  Secondary education from  Nagpur Board, Maharashtra with  with 73% .
                          </p>
                        </div>
                      </article>
                   
                      <article>
                        <div className="timeline_icon timeline_icon_4">
                          <Work />
                        </div>
                        <div className="label">
                          <h2>Internship</h2>
                          <p>
                            Completed one month Virtual Internship in  Js with Digital Bhem .
                          </p>
                        </div>
                        <div className="timeline_entry_inner">
                          <div className="timeline_icon_3 || classes.color_none"></div>
                        </div>
                      </article>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
       
      </div>
    )
}