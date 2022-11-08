import { useFormik } from "formik";
import ErrorMsg from "../ErrorMsg";
import { contactSchema } from "../schema";

const Footer = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.msg}`);
    resetForm();
  };
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        msg: "",
      },
      validationSchema: contactSchema,
      onSubmit: handleOnSubmit,
    });

  return (
    <>
      <footer id="contacto">
        <div className="tpfooter-area black-bg pt-115 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__widget footer-col-1">
                  <div className="tp-section-title">
                    <span className="tp-sub-title mb-15">#Contacto</span>
                    <h2 className="tp-title tp-title-df mb-20">
                      ¿Alguna pregunta?
                    </h2>
                    <p className="d-none">
                      Methods and techniques to taking raw data - mining for
                      insights and years of experience.
                    </p>
                  </div>
                  <div className="footer__lists mt-40">
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="footer__list-text">
                        <p>
                          <a href="#" target="blank">
                            C.A.B.A - Argentina{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="footer__list-text">
                        <p>
                          <a href="mailto:rskog@gmail.com">skog@gmail.com</a>
                        </p>
                        <p>
                          <a href="mailto:skog@gmail.com">skog@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fa-solid fa-phone-flip"></i>
                      </div>
                      <div className="footer__list-text">
                        <p>
                          <a href="https://wa.me/message/">
                            +08 98787 8773 345
                          </a>
                        </p>
                        <p>
                          <a href="https://wa.me/message/">
                            +08 98787 8773 345
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__widget footer-col-2">
                  <div className="tp-section-title">
                    <span className="tp-sub-title mb-15">#Díganos</span>
                    <h2 className="tp-title tp-title-df mb-20">
                      Comuníquese ahora
                    </h2>
                  </div>
                  <form
                    id="contact-form"
                    method="POST" 
                    data-netlify="true"
                    name="contactanos"
                    onSubmit={handleSubmit}
                  >
                  <input type="hidden" name="form-name" value="contactanos" />
                    <div className="contact-filed mb-20">
                      <input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Nombre"
                      />
                      {touched.name && <ErrorMsg error={errors.name} />}
                    </div>
                    <div className="contact-filed mb-30">
                      <input
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Email"
                      />
                      {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                    <div className="contact-filed mb-25">
                      <textarea
                        id="msg"
                        name="msg"
                        value={values.msg}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Mensaje"
                      ></textarea>
                      {touched.msg && <ErrorMsg error={errors.msg} />}
                    </div>
                    <div className="form-submit">
                      <button className="tp-solid-btn" type="submit">
                        Enviar
                      </button>
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area black-bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-8 col-md-6 col-sm-6">
                <p>
                  © 2022 Skog - Fertilizantes & Biotecnología. Todos los
                  Derechos Reservados.
                </p>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                <div className="ft-social">
                  {/* <a href="#"><i className="fa-brands fa-facebook-f"></i></a> */}
                  <a href="https://www.instagram.com/skog.bio/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  {/* <a href="#"><i className="fa-brands fa-youtube"></i></a> */}
                  {/* <a href="#"><i className="fa-brands fa-behance"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
