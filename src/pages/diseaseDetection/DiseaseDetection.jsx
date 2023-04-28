import React, { useRef, useState } from 'react'
import {BsFillCloudUploadFill} from "react-icons/all"
import Section from '../../components/section/Section'
import LearnMoreLink from '../../components/LearnMoreLink'
import images from '../../assets/images'
import { useForm } from "react-hook-form";

const DiseaseDetection = () => {
  const [isProccessed, setIsProccessed] = useState(false);
  const [inProccessing, setInProccessing] = useState(false);
  const imgPreview = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => { console.log("data", data, "errors", errors)};

  function showPreview(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      console.log("impOreview",imgPreview.current);
      if(imgPreview.current) {
        imgPreview.current.src = src;
        // remove class d-none to show img
        imgPreview.current.classList.remove("d-none");
      }
    }
  }


  return (
    <div className={"disease-detection"}>
      <Section className={"py-5"} containerClassName={"container"}>
        <div className="row align-items-center">
          <h1 className='main-header display-6 fw-bolder text-uppercase mt-5 w-fit-content'>Examine your apples samples now,<br/> find out if it has infected by <br/> apple scab disease or not</h1>
          <div className="col-12 col-md-7">
            <p className="fs-5 fw-bold text-muted">
              We are using a deep learning <br/> model called Convolutional Neural Network (CNN)<br/> to examine your unhealthy apple leaves images
              {/* deep learning model used to power this detection system is called Convolutional Neural Network (CNN), which has been trained on a large dataset of images of healthy and infected apple leaves. */}
              <LearnMoreLink link={""} />
            </p>
            <span className='fs-5 fw-bold text-muted border border-primary w-fit-content p-3'>
              Our model accuracy reatched to
              <span className='d-inline-block fw-bolder fs-4 text-primary p-1 m-1'>93%</span>
            </span>
          </div>
          {/* <div className='col-3'>
            <img src={images.main.detection_animation} alt="..." className=" w-100 h-100" style={{"mixBlendMode": "darken", "objectFit": "cover"}}/>
          </div> */}
          <form onSubmit={handleSubmit(onSubmit)}
           className='col-12 col-md-5 m-auto py-5 d-flex flex-column align-items-center gap-3'>
            <div className="img-upload-box text-center">
              {
                (!inProccessing) ?
                (
                  <div 
                  className={
                    `h-100 border border-primary position-relative d-flex flex-wrap align-items-center justify-content-center ${
                      errors.imgUpload ? "is-invalid" : ""
                    }`}>
                    <label role='button' htmlFor="imgUpload" className='fs-5 fw-bold text-primary'><BsFillCloudUploadFill className='me-2 fs-4'/>Upload Your Image</label>
                    <input
                    {...register("imgUpload", {
                      required:"you should select image",
                      // validate: {
                      //   lessThan10MB: (files) => {
                      //     if(files[0]?.size < 30000 || "Max 30kb"){
                      //       return {acceptedFormats: (files) =>{
                      //         return ["image/jpeg", "image/png", "image/jpg"].includes(files[0]?.type);
                      //       }}
                      //     }
                      //   }
                      // }
                    }
                      )}
                      onChange={showPreview} 
                      id='imgUpload' name='imgUpload' 
                      type="file" className='invisible position-absolute'
                    />
                    <img ref={imgPreview} id='img-preview' src=""
                    className="w-100 h-100 position-absolute top-0 left-0 d-none"
                    style={{"objectFit": "contain"}}/>
                  </div>
                ):
                <>
                  <img src={images.main.detection_animation} alt="..." className="w-100 h-100" style={{"mixBlendMode": "darken", "objectFit": "cover"}}/>
                  <span className='text-primary'>proccessing ...</span>
                </>
              }
            </div>
            { (isProccessed) ?
              (
                <span className='fw-bold fs-5 text-center'>
                  Possibility of infected by Apple Scab Disease :  
                  <span className='text-primary ms-2'>90%</span>
                </span>
              ) : 
              ""
            }
            {
              (!inProccessing) ?
              (
                <div className="d-flex align-items-center gap-3">
                  <button type='submit' className='py-2 px-3 btn btn-primary text-white'>Detect Now</button>
                  <label role='button' htmlFor='imgUpload' className="py-2 px-3 btn btn-primary text-white">
                    <BsFillCloudUploadFill className='fs-4'/>
                  </label>
                </div>
              ) :
              ""
            }
            </form>
        </div>
      </Section>
    </div>
  )
}

export default DiseaseDetection
