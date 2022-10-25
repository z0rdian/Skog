import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footers/Footer';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import portfolioData from '../../data/portfolioData';

const PortfolioDetails = () => {
  const router = useRouter();
  const [portfolioItem, setPortfolioItem] = useState({});
  const id = router.query.slug;

  useEffect(() => {
    if (!id) {

    }
    else {
      setPortfolioItem(portfolioData.find(item => item.id == id))
    }
  }, [id])
  return (
    <>
      <SEO pageTitle="Profile Details" />
      <Header />
      <div className="project-details-area pt-50 pb-130 grey-bg">
        <div className="container white-bg pt-100 pb-100 px-5 w-95">
          <div className="row align-items-center">
              <div className="aboutme-wrapper text-center">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-60">
                    <b>{portfolioItem.title}</b>
                  </h3>
                </div>
            </div>
          </div>
              <div className="mb-40 text-center">
                <img className="b-radius" src={`/assets/img/project/${portfolioItem.product}`} alt="project img" />
              </div>
          <div className="row">
            <div className="col-xl-12 custom-p">
              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30"><b>Características</b></h4>
              </div>
              <p className='mb-30 fuente'>{portfolioItem.caracteristicas}</p>

              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30"><b>Composición</b></h4>
              </div>
              <p className='mb-30'>{portfolioItem.composicion}</p>

              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30"><b>Dosis</b></h4>
              </div>
              <p className='mb-30 overflow-hidden'>{portfolioItem.dosis}</p>

              <div className="project-details-nav mt-55">
                <div className="details-nav-item">
                <Link href={`/portfolio-details/${portfolioItem.atras}`}>
                    <a><i className="fas fa-long-arrow-left"></i>Atrás</a>
                  </Link>
                </div>
                <div className="details-nav-item">
                  <Link href={`/portfolio-details/${portfolioItem.siguiente}`}>
                    <a>Siguiente<i className="fas fa-long-arrow-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default PortfolioDetails;