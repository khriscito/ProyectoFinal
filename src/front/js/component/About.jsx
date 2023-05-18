import React from 'react'

const About = () => {
    return (
    <section className="page-section bg-light" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Servicios</h2>
                </div>
                <div className="row text-center my-5">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-bed fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Administración</h4>
                        <p className="text-muted">Planifica, organiza, dirige y controla la gestión administrativa de tu hotel.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Comodidad</h4>
                        <p className="text-muted">Realiza la gestión desde un solo lugar.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Seguridad</h4>
                        <p className="text-muted">Te ofrecemos confidencialidad, integridad y disponibilidad de tus datos. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About