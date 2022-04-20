import React from "react";
import workingImg from "./../../../Images/workingImage.jpg";

const ExpandedContent = () => {
    return (
        <section className="expanded-about-me-section">
            <div className="main-content-container">
                <div className="sub-heading">
                    <h2>Where i am now</h2>
                </div>
                <div className="personal-quote2">
                    <p>
                        <i>
                            I like to create styles that my clients are able to
                            recreate in their own homes.
                        </i>
                    </p>
                </div>
                <div className="indepth-info2">
                    <p>
                        In 2015, I left the industry, going away and learning
                        new skills which have helped solidify who I am today.
                    </p>
                    <p>
                        But! Salon life was ingrained in who I am, so in 2018 I
                        became a self-employed Hair Stylist.
                    </p>
                    <p>
                        So here I am, self-employed at the LV Hair salon and
                        loving it!
                    </p>
                    <p>
                        I have many wonderful clients and am always overjoyed
                        with meeting new people and seeing many more happy faces
                        leave the salon.
                    </p>
                </div>
            </div>
            <div className="img-container">
                <img
                    className="section-img working-img"
                    src={workingImg}
                    alt=""
                />
            </div>
        </section>
    );
};

export default ExpandedContent;
