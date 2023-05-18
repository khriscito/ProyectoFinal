import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-4 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Efectistay 2023</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-grad btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" style={{color: "#ffffff",}} ></i></a>
                        <a className="btn btn-grad btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" style={{color: "#ffffff",}}></i></a>
                        <a className="btn btn-grad btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" style={{color: "#ffffff",}}></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer