import React from 'react'
import img1 from "../../img/11.jpg"
import img2 from "../../img/12.jpg"
import img3 from "../../img/13.jpg"
import img4 from "../../img/144.jpg"
import img5 from "../../img/155.jpg"
import img6 from "../../img/161.jpg"



const Partners = () => {
  return (
    <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img1} title="Project Name">
                            <img className="img-fluid" src={img1} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel A</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img2} title="Project Name">
                            <img className="img-fluid" src={img2} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel B</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img3} title="Project Name">
                            <img className="img-fluid" src={img3} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel C</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img4} title="Project Name">
                            <img className="img-fluid" src={img4} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel D</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img5} title="Project Name">
                            <img className="img-fluid" src={img5} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel E</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={img6} title="Project Name">
                            <img className="img-fluid" src={img6} alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Partner</div>
                                <div className="project-name">Hotel F</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Partners