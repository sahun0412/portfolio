
import "../About/about.css"


export function About() {
    return (
        <div className="about" id="about">
            <div className="m-4">
                <h6>About ME</h6>
                <h5 className="m-2 fw-bold">Who Am I ?</h5>
            </div>
            <div className="abouMe m-5 mt-4">
                <p>
                My name is <b>Naresh Rampratap Sahu </b> and I am a fresh graduate. I completed my degree in <b>Bachelor's of Science in Computer Science from <a href="https://gug.digitaluniversity.ac/" target='_blank'>Gondwana University Gadchiroli</a></b>. I am passionate about developing new things, and I find excitement in exploring new technologies.
                </p>

                <p> As a practitioner, I like to stay on top of the latest trends in the tech industry. I strive to write every line of code in a readable, accessible, and modular way. :)</p>
            </div>
        </div>
    )
}