import React from "react";

export const About = ({ bio, contact, address }) => {
  return (
    <>
      <div className="aboutContainer">
        <p className="childComponentHeading aboutBiography">Biography:</p>
        <div className="childComponent aboutBiography">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="aboutContact">
          <div className="childComponent">
            <p className="childComponentHeading">Contact Information</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">000-000-0000</p>
          </div>
          <div className="childComponent aboutPostalAddress">
            <p className="childComponentHeading">Postal Address</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">Wah Cantt, Islamabad </p>
          </div>
        </div>
            
      </div>

      <div style={{ height: 10, marginTop: 20 }}></div>
    </>
  );
};
