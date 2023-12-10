import  Card  from 'react-bootstrap/Card';
import '../Interests/interest.css';

export function Interests() {


    return (
        <div className="interest" id='interests'>
            <div className='m-4'>
                <h6>What I Do ?</h6>
                <h4 className='fw-bold m-2 mt-4'>HERE ARE SOME OF MY EXPERTISE</h4>
            </div>


            <div className="cards m-4 p-4 d-flex justify-content-evenly align-content-center flex-wrap">

                {/* card1 */}
                
                
                <Card border="warning" style={{ width: '14rem', height: '20rem' }} className='m-4'>
                    <Card.Body>
                        <Card.Title  className='text-center fw-bold'>HTML and CSS Proficiency</Card.Title>
                        
                        <Card.Text className='mt-4'>
                        "Mastering accessible markup, my HTML expertise spans headings, paragraphs, lists, tables, and forms. I craft captivating layouts, appealing styles, and smooth animations with CSS proficiency."
                        </Card.Text>

                    </Card.Body>
                </Card>


                {/* card 2 */}

                <Card border="warning" style={{ width: '14rem', height: '20rem' }} className='m-4 card2'>
                    <Card.Body>
                        <Card.Title  className='text-center fw-bold'>JavaScript</Card.Title>
                        
                        <Card.Text className='mt-4'>
                        "Skilled in JavaScript and React.js, I create dynamic, interactive website components with scalable UIs, accessible code, and smooth animations, ensuring exceptional user experiences."
                        </Card.Text>

                    </Card.Body>
                </Card>

                {/* card3 */}


                <Card border="warning" style={{ width: '14rem', height: '20rem' }} className='m-4'>
                    <Card.Body>
                        <Card.Title  className='text-center fw-bold'>React JS</Card.Title>
                        
                        <Card.Text className='mt-4'>
                        "Proficient React.js developer creating dynamic, interactive website components with scalable UIs, accessible code, and smooth animations for enhanced user experiences."
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}