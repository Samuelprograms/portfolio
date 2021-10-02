import React,{useState} from "react";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./../css/Contact.css";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Name must be longer than 2 characters")
          .required("Name is required"),
        email: Yup.string().email().required("Email is required"),
        subject: Yup.string()
          .min(5, "Subject must be longer than 5 character")
          .required("Subject is required"),
        message: Yup.string()
          .min(5, "Message must be longer than 5 character")
          .required("Message is required"),
      }),
      onSubmit: () => {
        sendEmail();
      },
    });

  const sendEmail = async() => {
    setIsSending(true);
    await emailjs
      .send(
        "service_rdwz3nd",
        "template_6yr1gsf",
        values,
        "user_RkBW3FeSHbWnLKiMfMgKA"
      )
      .then((response) => {
        alert("Message sent succesfully")
        console.log(response);
      }).finally(() => setIsSending(false))
      .catch((err) => {
        alert("The message can't be sent")
        console.log(err)
      });
      
  };

  return (
    <div id="contact" className="contact">
      <div className="form">
        <Fade bottom cascade>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              required
              name="name"
              className="form__field"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <label className="error">{errors.name}</label>
            ) : null}
            <input
              required
              name="email"
              type="email"
              className="form__field"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <label className="error">{errors.email}</label>
            ) : null}
            <input
              required
              name="subject"
              className="form__field"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.subject && errors.subject ? (
              <label className="error">{errors.subject}</label>
            ) : null}
            <input
              required
              name="message"
              className="form__field"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.message && errors.message ? (
              <label className="error">{errors.message}</label>
            ) : null}
            <button disabled={isSending} type="submit" className="form__button">
              <FontAwesomeIcon className="form__icon" icon={faPaperPlane} />
              Send
            </button>
          </form>
          <iframe
            className="contact-video video_one"
            src="https://www.youtube.com/embed/7_9Jyuhd9I4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="contact-video video_two"
            src="https://www.youtube.com/embed/rfhVOakcwW4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
