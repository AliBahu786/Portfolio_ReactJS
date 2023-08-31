// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Form = () => {

//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_8bqh54n', 'template_vxgx79k', form.current, 'ZLoh976hmw2NRhwEW')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//       };
//     return (
//         <>
//         <form ref={form} onSubmit={sendEmail}>
//             <div className="row">
//                 <div className="col-sm-12 mb-25">
//                     <div className="contact__area-bottom-form-item">
//                         <input type="text" name="user_name" placeholder="Your Name" required />
//                     </div>
//                 </div>
//                 <div className="col-sm-12 mb-25">
//                     <div className="contact__area-bottom-form-item">
//                         <input type="email" name="user_email" placeholder="Email Address" required />
//                     </div>
//                 </div>
//                 {/* <div className="col-sm-12 mb-25">
//                     <div className="contact__area-bottom-form-item">
//                         <input type="text" name="user_name" placeholder="Subject" required />
//                     </div>
//                 </div> */}
//                 <div className="col-sm-12 mb-30">
//                     <div className="contact__area-bottom-form-item">
//                         <textarea name="message" rows="5" placeholder="Message"></textarea>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 mb-45">
//                     <div className="contact__area-bottom-form-item">
//                         <label><input className="mr-10" type="checkbox" />I agree with services tarms and condition</label>
//                     </div>
//                 </div>
//                 <div className="col-sm-12">
//                     <div className="contact__area-bottom-form-item">
//                         <button className="theme-btn-1" type="submit">Submit Now<i className="far fa-long-arrow-right"></i></button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//         </>
//     );
// };

// export default Form;

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_8bqh54n",
        "template_vxgx79k",
        form.current,
        "ZLoh976hmw2NRhwEW"
      );
      console.log(result.text);
      form.current.reset(); // Clear form data after successful submission
    } catch (error) {
      console.log(error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-sm-12 mb-25">
            <div className="contact__area-bottom-form-item">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 mb-25">
            <div className="contact__area-bottom-form-item">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          {/* <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="user_name" placeholder="Subject" required /> 
                    </div>
                </div> */}
          <div className="col-sm-12 mb-30">
            <div className="contact__area-bottom-form-item">
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12 mb-45">
            <div className="contact__area-bottom-form-item">
              <label>
                <input className="mr-10" type="checkbox" />I agree with services
                tarms and condition
              </label>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact__area-bottom-form-item">
              {/* <button className="theme-btn-1" type="submit">Submit Now<i className="far fa-long-arrow-right"></i></button> */}
              <button
                className="theme-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
                <i className="far fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
