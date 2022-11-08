import React from 'react';

const BioArea = () => {
  return (
    <>
      <div id="quienes" className="bio-wrapper grey-bg pt-190">
        <div className="container-md rounded">
          {/* biograpy-area start */}
          <div className="biograpy-area pt-80 pb-70 white-bg px-5">
            <div className="container">
              {/* <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="biograpy-image mb-60">
                    <img src="assets/img/about/biograpy-img-1.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="biograpy-image mb-60">
                    <img src="assets/img/about/biograpy-img-2.jpg" alt="img" />
                  </div>
                </div>
              </div> */}
              <h4 className="biograpy-title mb-40">¿Quiénes somos?</h4>
              <p className="bio-text mb-35">Nuestro objetivo es ofrecer soluciones tecnológicas de calidad internacional para la agricultura sostenible, aumentando la rentabilidad del productor garantizando el cuidado del medio ambiente.</p>
              <div className="row mb-20">
                <div className="col-xxl-7 col-xl-8">
                  <div className="row">
                    {/* <div className="col-xl-6 col-lg-6 col-md-6"> */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="features__list mb-10">
                        <ul>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Biofertilizantes</p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Bioestimulantes</p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Promotores de crecimiento de origen microbiano</p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Biocontroladores específicos</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="features__list mb-10">
                        <ul>
                          {/* <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Deputy Attorney General Media Project</p>
                            </div>
                          </li> */}
                          {/* <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Director of the Developing Communities</p>
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>Hacemos énfasis en la calidad de nuestras materias primas asi como en buenas practicas de manufactura. Somos importadores registrados en SENASA y contamos con la representacion de la Empresa BC Fertilis, teniendo la misma prescencia en 5 continentes.
              </p>
            </div>
          </div>
          {/* biograpy-area end */}

          {/* vote-area start  */}
          {/* <div className="vote-area border-top white-bg pt-80 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="vote-content text-center">
                    <div className="flag-img mb-35">
                      <img src="assets/img/about/flag-img.jpg" alt="flag-img" />
                    </div>
                    <h4 className="vote-title mb-35">Leadership..  Experience..  Values..</h4>
                    <h5 className="vote-sm-title">VOTE FOR HILEXA WILLAM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* vote-area end  */}
        </div>
      </div>
    </>
  );
};

export default BioArea;