import React from 'react'
import member1 from "../../img/team1.jpg"
import member2 from "../../img/member2.jpg"
import member3 from "../../img/team3.jpg"


const Team = () => {
  return (
    <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nosotros</h2>
                    <h3 className="section-subheading text-muted">Conoce a nuestro equipo:<br></br> <br></br>Somos un equipo caracterizado por brindar sistemas accesibles que faciliten gestiones del día a día.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={member1} alt="..." />
                            <h4>Khristhopher </h4>
                            <p className="text-muted my-3">Full-Stack Developer</p>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="https://github.com/khriscito" aria-label="Khris Twitter Profile"><i className="fab fa-github" style={{color: "#ffffff",}}></i></a>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="#!" aria-label="https://www.instagram.com/khristhopherarthuro/"><i className="fab fa-instagram" style={{color: "#ffffff",}}></i></a>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="#!" aria-label="https://www.linkedin.com/in/khristhopherleon/"><i className="fab fa-linkedin-in" style={{color: "#ffffff",}}></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={member2} alt="..." />
                            <h4>Patricia</h4>
                            <p className="text-muted my-3">Full-Stack Developer</p>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="https://github.com/patriciaacpd" aria-label="Patricia Twitter Profile"><i className="fab fa-github" style={{color: "#ffffff",}}></i></a>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="https://www.instagram.com/paatriciapd/" aria-label="Patricia Facebook Profile"><i className="fab fa-instagram" style={{color: "#ffffff",}}></i></a>
                            <a className="btn btn-grad btn-social mx-2 my-2" href="https://www.linkedin.com/in/patricia-p%C3%A9rez-8ab645230/" aria-label="Patricia LinkedIn Profile"><i className="fab fa-linkedin-in" style={{color: "#ffffff",}}></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  )
}

export default Team