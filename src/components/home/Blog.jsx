import React from 'react';
import BlogCard from './BlogCard';
import images from '../../assets/images';
import Slider from "../slider/Slider";

const posts = [
    {
        title: "what is the causes of apple scap disease?",
        image: images.main.unhealth_leave_2 ,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore iusto illum fuga pariatur repellendus exercitationem numquam! Maiores totam veniam assumenda officia voluptas, debitis natus, numquam accusantium, quam a ut?
        Necessitatibus aliquam accusamus tenetur alias quos. Ratione repudiandae maxime architecto, illum neque, accusamus possimus laborum cumque optio dolor assumenda.` 
    },
    {
        title: "what is the causes of apple scap disease?",
        image: images.main.unhealth_leave_2 ,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore iusto illum fuga pariatur repellendus exercitationem numquam! Maiores totam veniam assumenda officia voluptas, debitis natus, numquam accusantium, quam a ut?
        Necessitatibus aliquam accusamus tenetur alias quos. Ratione repudiandae maxime architecto, illum neque, accusamus possimus laborum cumque optio dolor assumenda.` 
    },
    {
        title: "what is the causes of apple scap disease?",
        image: images.main.unhealth_leave_2 ,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore iusto illum fuga pariatur repellendus exercitationem numquam! Maiores totam veniam assumenda officia voluptas, debitis natus, numquam accusantium, quam a ut?
        Necessitatibus aliquam accusamus tenetur alias quos. Ratione repudiandae maxime architecto, illum neque, accusamus possimus laborum cumque optio dolor assumenda.` 
    },
    {
        title: "what is the causes of apple scap disease?",
        image: images.main.unhealth_leave_2 ,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore iusto illum fuga pariatur repellendus exercitationem numquam! Maiores totam veniam assumenda officia voluptas, debitis natus, numquam accusantium, quam a ut?
        Necessitatibus aliquam accusamus tenetur alias quos. Ratione repudiandae maxime architecto, illum neque, accusamus possimus laborum cumque optio dolor assumenda.` 
    }
]
const Blog = () => {
    const isLoading = false;
  return (
    <>
        <h2 role="title" className="main-header d-block fw-bolder fst-italic text-uppercase display-6 mb-4">latest from our blog</h2>
        <Slider>
              {isLoading ? (
                <>
                  <div className="col-12 col-sm-3 col-md-4 p-3">
                    <div className="card shadow-sm border-0" aria-hidden="true">
                      <div className="ratio ratio-4x3">
                        <div className="card-img-top"></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-6"></span>
                          <span className="placeholder col-8"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6"></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-3 col-md-4 p-3">
                    <div className="card shadow-sm border-0" aria-hidden="true">
                      <div className="ratio ratio-4x3">
                        <div className="card-img-top"></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-6"></span>
                          <span className="placeholder col-8"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6"></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-3 col-md-4 p-3">
                    <div className="card shadow-sm border-0" aria-hidden="true">
                      <div className="ratio ratio-4x3">
                        <div className="card-img-top"></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-6"></span>
                          <span className="placeholder col-8"></span>
                        </p>
                        <a className="btn btn-primary disabled placeholder col-6"></a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                posts.map((post, i) => <div key={i} className="col-12 col-sm-6 col-md-3 col-md-4 p-3"><BlogCard post={post} /></div>)
              )}
            </Slider>
    </>
  )
}

export default Blog;
