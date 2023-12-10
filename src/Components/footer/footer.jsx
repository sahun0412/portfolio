import { MDBFooter } from "mdb-react-ui-kit"

export function Footer() {

    return (
        <div>
            <MDBFooter className='footer text-center text-lg-left' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', mb:0 }}>


                <div className="fw-bold   p-2">

                <div>
                        &copy; {new Date().getFullYear()}
                    </div>
                    
                    
                    <p>Made with <span className="bi bi-heart-fill" style={{ color: "red", fontSize: "larger"}}></span> by me.</p>

                    
                </div>

            </MDBFooter>
        </div>
    )
}