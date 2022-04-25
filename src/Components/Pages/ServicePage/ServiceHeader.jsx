import React from "react";
import { Link } from "react-router-dom";
import serviceHero from "./../../../Images/woman-washing-head-hairsalon.jpg";

const ServiceHeader = () => {
    return (
        <section className="service-header">
            <a
                className="service-header-attr"
                href="https://www.freepik.com/photos/hair-salon"
            >
                Hair salon photo created by prostooleh
            </a>
            <img className="service-header-img" src={serviceHero} alt="" />
            <div className="service-header-blurb">
                <p className="blurb-line1">
                    Cut or Colour, Long or Short, Thick or Thin.
                </p>
                <p className="blurb-line2">
                    Services for men and women with any hair type and style.
                </p>
                <p className="blurb-line3">
                    <i>
                        A quality service that will last through your busy
                        lifestyle.
                    </i>
                </p>
                <Link to="/contact">
                    <button className="bookingBtn">Enquire Now</button>
                </Link>
            </div>
        </section>
    );
};

export default ServiceHeader;
