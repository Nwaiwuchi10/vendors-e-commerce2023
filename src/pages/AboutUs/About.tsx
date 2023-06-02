import React, { Fragment, useState } from "react";
import "./Style.css";
import amer from "../../assets/Images/unn.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
interface Props {
  cartItems?: any;
}
const About = ({ cartItems }: Props) => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index: any) => {
    setToggleTab(index);
  };
  return (
    <>
      <Header cartItems={cartItems} />
      <div className="about">
        <div className="rows">
          <div className="column">
            <div className="about-img">
              <img src={amer} alt="jhfdfrf" className="about-img" />
            </div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Vissions</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Mission</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>My Story</h2>
                <p>
                  The American Football Association of Nigeria is a
                  nongovernmental organization which operates as NAFA in
                  Nigeria. It is an association created to promote and growth
                  across the 36 states of the federation [including the FCT] the
                  contact and noncontact American Football. This is currently
                  done under the NFFL AND NAFL brand, in partnership with the
                  international federation IFAF.
                </p>
                <h3>Founding - NAFA</h3>
                <p>
                  Founded n November 2019 by Babajide Akeredolu, NAFA was
                  created as a viable platform for interested Nigerian Youths to
                  use the sports for both personal and national development.
                  Having played the sport in the United States as a recreational
                  sport, Akeredolu alongside other founding members seek to
                  raise the standard of the sport in Nigeria, facilitating the
                  rise of the sport to rank alongside other prominent sports in
                  the country
                </p>
              </div>

              {/* Skills Content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>Vision</h2>
                <p>
                  Our vision is to create increased opportunities for Nigerians
                  through American football. Opportunities range from
                  educational scholarships through sport, provision of
                  livelihood, and exposure to diverse culture and tourism from
                  NAFA tours. We will be the first organization with a clear
                  intent to integrate Nigeria and Africa with the National
                  Football League (NFL) in America and other organizations
                  across the world.
                </p>

                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Strengths</h3>
                      <div className="progress">
                        <div className="progress-bar">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Weaknesses</h3>
                      <div className="progress">
                        <div className="progress-bar Designer">
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Opportunities</h3>
                      <div className="progress">
                        <div className="progress-bar Javascript">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Threats</h3>
                      <div className="progress">
                        <div className="progress-bar PhotoShop">
                          <span>50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Content */}

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Governing Body</h3>
                  <span></span>
                  <p>
                    To become the governing body for the growth, awareness and
                    development of American Football in Nigeria.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Grassroots Development</h3>
                  <span></span>
                  <p>
                    To focus on grassroots development of the sport, throughout
                    Nigeria (and later Africa) by installing the sport as an
                    intricate part of the nation's educational curriculum.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Professionalism</h3>
                  <span></span>
                  <p>
                    To kick-start and sustain a professional American Football
                    League that will consist of American Football teams all over
                    Nigeria, one that would be divided into 4 regional
                    conferences. (All conferences will function individually,
                    but still under the supervision/governance of the NAFA.)
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Promote Safety Culture</h3>
                  <span></span>
                  <p>
                    To use the sport as a viable tool to promote safety culture
                    within and outside the purview of the sport, engaging the
                    youth in a positive and rewarding manner that will aid a
                    holistic growth process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
