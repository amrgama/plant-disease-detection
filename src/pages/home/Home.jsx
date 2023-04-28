import React from "react";
import {Link} from "react-router-dom";
import homeVideo from "../../assets/videos/How do bacterial plant diseases impact plant health_ food production and landscape management_(720P_HD).mp4"
import Section from "../../components/section/Section";
import images from "../../assets/images";
import {BsArrowRight} from "react-icons/all";
import Blog from "../../components/home/Blog";
import LearnMoreLink from "../../components/LearnMoreLink";

const Home = () => {
  return <div className={"home"}>
    <Section className={"main py-5 vh-100"} containerClassName={"container h-100"}>
      <div className="row flex-wrap justify-content-center align-items-center h-100">
        <h1 className="col-11 col-sm-7 main-header fw-bolder fs-2 text-uppercase text-center mt-4 d-block">we are using ai to detect <br/> an apple scab disease</h1>
        <div className="col-12 d-flex flex-column flex-sm-row flex-wrap align-items-center align-items-sm-between justify-content-center justify-content-sm-between my-auto">
          <div className="col-3 col-md-2 left d-flex gap-4 flex-column align-items-center justify-content-end flex-wrap position-relative">
            <img src={images.main.apple_1} alt="..." className="main-img w-100" />
            <img src={images.main.leave_2} alt="..." className="main-img w-100" />
            <img src={images.main.apple_2} alt="..." className="main-img w-100" />
          </div>
          <div className="col-7 d-flex flex-wrap flex-column align-items-center justify-content-center">
            <img src={images.main.robot} alt="sorry, something wrong" className="main-img robot w-100" />
          </div>
          <div className="col-3 col-md-2 right d-none d-md-flex gap-4 flex-column align-items-center justify-content-end flex-wrap position-relative">
            <img src={images.main.unhealth_leave_1} alt="..." className="main-img w-100" />
            <img src={images.main.apples_1} alt="..." className="main-img w-100" />
            <img src={images.main.unhealth_apples_1} alt="..." className="main-img w-100" />
          </div>
        </div>
        </div>
    </Section>
    <Section className={"about-us py-5"} containerClassName={"container"}>
      <h2 role="title" className="main-header d-block fw-bolder fst-italic text-uppercase display-6 mb-4">we are using ai in detection<br/> of apple scap disease Specifically,<br/> using deep learning model calld CNN</h2>
      <div className="d-flex flex-wrap align-items-center">
      <div className="col-12 col-md-7 d-flex flex-column flex-wrap">
        <p className="fs-5 col-12 col-md-10 text-muted">We specializes in the detection of apple scab disease using deep learning technology. By leveraging advanced computer vision algorithms and machine learning model called CNN, we are able to accurately identify and classify diseased apple trees with high precision and recall rates.</p>
        <LearnMoreLink link={"/about"} />
      </div>
      <div className="col-12 col-md-5 d-flex justify-content-end">
        <div className="col-12 col-lg-8 d-flex flex-column align-items-center flex-wrap gap-3">
        <img src={images.main.detection_animation} alt="..." className="w-100" style={{"mixBlendMode": "darken", "maxWidth": "315px"}}/>
        <Link to="/disease-detection" className="py-3 px-3 nav-link btn btn-primary text-white fs-5 text-capitalize">
          detect a disease now
        </Link>
        </div>
      </div>
      </div>
    </Section>
    <Section className={"about-apple-scab-disease py-5"} containerClassName={"container"}>
      <h2 role="title" className="main-header d-block fw-bolder fst-italic text-uppercase display-6 mb-4">about apple scap disease</h2>
      <div className="row flex-wrap">
        <div className="col-12 col-lg-6 d-flex flex-wrap flex-column p-3">
          <p className="fs-5">
          Apple scab is caused by the fungus Venturia inaequalis. It infects crabapples and apples (Malus spp.), mountain ash (Sorbus spp.), pear (Pyrus communis) and Cotoneaster (Cotoneaster spp.).
          </p>
          <p className="fs-5">
          The apple scab fungus has several host-specific strains that can cause disease on one type of plant but not any other. For example, the strain of V. inaequalis that infects mountain ash will only infect other mountain ash trees and will not infect crabapple trees. Apple and crabapple trees are infected by the same strain of the apple scab fungus because the trees are in the same genus.
          </p>
          <LearnMoreLink link={"/about"} />
        </div>
        <div className="col-12 col-lg-6 p-3">
          <div className="d-flex flex-wrap flex-column gap-3 border border-primary">
            <span className="small-title fs-5 fw-bold text-capitalize p-3 border-bottom border-primary">life cycle of apple scap</span>
            <div className="p-2 ps-4">
              <ul className="col-12 fs-6">
                <li className="">Apple scab is caused by the fungus Venturia inaequalis.</li>
                <li className="">In spring, these fungi shoot spores into the air.</li>
                <li className="">Spores are carried by wind to newly developing leaves, flowers, fruit or green twigs.</li>
                <li className="">Spores need several hours of moisture on the plant surface in order to start new infections.</li>
                <li className="">These infections grow into spots that can produce more</li>
                <li className="">Spores are spread by wind, splashing rain or irrigation throughout the tree canopy or to neighboring trees, starting new infections.</li>
                <li className="">The infection cycle can repeat many times throughout the growing season whenever leaves remain wet long enough.</li>
                <li className="">Warm, rainy weather in the spring and summer creates ideal conditions for apple scab.</li>
                <li className="">Leaves with many leaf spots turn yellow and fall off early. This weakens the tree.</li>
                <li className="">Many ornamental crabapple trees are susceptible to apple scab, so the disease can be spread to your fruit trees from nearby flowering crabs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section className={"blog py-5"} containerClassName={"container"}>
      <div className="row flex-wrap">
        <Blog />
      </div>
    </Section>
  </div>
};

export default Home;
