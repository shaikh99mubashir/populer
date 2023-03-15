import React from "react";
import banner from "../../assets/banner.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
const Aboutus = () => {
    return (
        <Container fluid className="fluid">
            <div className="text-center" style={{ marginTop: 160 }}>
                <img src={banner} className="bg" />
            </div>
            <div
                className="py-2"
                style={{ background: "#0772BA ", fontSize: "23px" }}
            >
                <Container>
                    <Row>
                        <Col>
                            <div className="py-3">
                                <h2
                                    className="text-white"
                                    style={{ fontWeight: "bold", fontSize: "22px" }}
                                >
                                    SINCE 1987
                                </h2>
                                <h3 style={{ fontSize: "17px", color: "white" }}>
                                    Popular Foods & Beverages enjoys an astounding reputation and
                                    holds the largest share in the local beverages market. The
                                    product portfolio is a huge one covering fruit pulps
                                    (processing of fruits & vegetables), pre-forms, packaging
                                    (Tetra Pak, pet and glass bottles) of juices, fruit drinks,
                                    drinking water, flavored milk products and much
                                </h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-3">
                                <h2
                                    className="text-white"
                                    style={{ fontWeight: "bold", fontSize: "22px" }}
                                >
                                    VISION
                                </h2>
                                <h3 style={{ fontSize: "17px", color: "white" }}>
                                    To make the most of nature by aiming to put the
                                    best on the table.
                                </h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-3">
                                <h2
                                    className="text-white"
                                    style={{ fontWeight: "bold", fontSize: "22px" }}
                                >
                                    MISSION
                                </h2>
                                <h3 style={{ fontSize: "17px", color: "white" }}>
                                    To produce quality for everyone by following world-class
                                    standards of selecting processing and packaging (techniques),
                                    and giving stronger roots to the agricultural
                                    economy of Pakistan.
                                </h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-3">
                                <h2
                                    className="text-white"
                                    style={{ fontWeight: "bold", fontSize: "22px" }}
                                >
                                    VALUE SYSTEM
                                </h2>
                                <h3 style={{ fontSize: "17px", color: "white" }}>
                                    We assure highest commitment to food quality, safety, HISE
                                    standards in production and processing to make products that
                                    are absolutely tasty and daringly delightful everytime.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="text-center p-4">
                            <img
                                src={require("../../assets/aboutimg1.jpg")}
                                style={{ objectFit: "cover", width: "80%" }}
                            />
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="text-center p-4">
                            <img
                                src={require("../../assets/aboutimg2.jpg")}
                                style={{ objectFit: "cover", width: "80%" }}
                            />
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="text-center p-4">
                            <img
                                src={require("../../assets/aboutimg3.jpg")}
                                style={{ objectFit: "cover", width: "80%" }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <div className="text-center p-4">
                            <img
                                src={require("../../assets/aboutimg4.jpg")}
                                style={{ objectFit: "cover", width: "80%" }}
                            />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="text-left p-4">
                            <h2
                                style={{
                                    fontSize: "40px",
                                    color: "rgb(7, 114, 186)",
                                    fontWeight: "bold",
                                }}
                            >
                                PROCESS STRENGTHS
                            </h2>
                            <h3 style={{ fontSize: "20px" }}>
                                Popular is an international brand with production facilities in
                                Pakistan, Afghanistan and Africa. Locally, Popular Foods &
                                Beverages owns and operates manufacturing concerns across
                                Pakistan to satisfy the ever-growing market demand of its
                                renowned brands. The process cycle is an end to end solution for
                                the foods and beverages market including Processing,
                                Homogenizing, Pasteurization, Filling, labeling, Packing,
                                Storage and Other Logistic Requirements.
                            </h3>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="text-center p-4">
                            <img
                                src={require("../../assets/aboutimg5.jpg")}
                                style={{ objectFit: "cover", width: "90%" }}
                            />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="text-left p-4">
                            <h2
                                style={{
                                    fontSize: "40px",
                                    color: "rgb(7, 114, 186)",
                                    fontWeight: "bold",
                                }}
                            >
                                EXPORTS
                            </h2>
                            <h3 style={{ fontSize: "20px" }}>
                                As an internationally certified brand, Popular Foods & Beverages
                                also exports juices across the world, helping the economy
                                through increased exports. Our export revenue exceeds a billion
                                PK, with an export network to 50 plus countries. Our
                                international certifications include:
                            </h3>
                            <ul>
                                <li> Agro Food Research & Resource Center Gold Medalist</li>
                                <li> ISO 9001:2015</li>
                                <li> ISO 22000: 2015</li>
                                <li> Halal Certification PS 3733:2013</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div
                className="py-2"
                style={{ background: "#0772BA ", fontSize: "23px" }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="py-3 text-white">
                                <ul>
                                    <li>United States of America</li>
                                    <li>United Kingdom</li>
                                    <li>UAE</li>
                                    <li>Afghanistan</li>
                                    <li>Angola</li>
                                    <li>Australia</li>

                                    <li>Botswana</li>
                                    <li>Brunei</li>
                                    <li>Canada</li>
                                    <li>China</li>
                                    <li>Denmark</li>

                                    <li>Fiji</li>
                                    <li>Germany</li>
                                    <li>Ghana</li>
                                    <li>Hong Kong</li>
                                    <li>Japan</li>
                                    <li>Kenya</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-3 text-white">
                                <ul>
                                    <li>Madagascar</li>
                                    <li>Maldives</li>
                                    <li>Mauritius</li>
                                    <li>Malta</li>
                                    <li>Mongolia</li>
                                    <li>New Zealand</li>

                                    <li>Nigeria</li>
                                    <li>Romania</li>
                                    <li>Senegal</li>
                                    <li>Singapore</li>
                                    <li>South Africa</li>

                                    <li>Somali Land</li>
                                    <li>Sweden</li>
                                    <li>Tanzania</li>
                                    <li>Uganda</li>
                                    <li>Zambia</li>
                                    <li>Zimbabwe</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-3">
                                <h2
                                    className="text-white"
                                    style={{ fontWeight: "bold", fontSize: "22px" }}
                                >
                                    VALUE SYSTEM
                                </h2>
                                <h3 style={{ fontSize: "17px", color: "white" }}>
                                    We assure highest commitment to food quality, safety, HISE
                                    standards in production and processing to make products that
                                    are absolutely tasty and daringly delightful everytime.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="py-5">
                <h2
                    className="text-black"
                    style={{ fontWeight: "bold", fontSize: "32px" }}
                >
                    POPULAR ANGOLA
                </h2>
                <h3 style={{ fontSize: "17px" }}>
                    Established in 2017, Popular Angola Plant is a manufacturing concern
                    with a diverse portfolio.
                </h3>
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "20px",
                    }}
                >
                    Juices Business
                </h3>
                <h3 style={{ fontSize: "17px" }}>
                    {" "}
                    The Juice business thrives on brands like Bom Fruit and other products
                    of flavored milk and powdered
                    <br /> milk categories.
                    <br />
                    Production: 15000 packs per hour.
                    <br />
                    Annual Revenue: Approximately US $12 Million
                </h3>

                <h3
                    style={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "20px",
                    }}
                >
                    Foods Business
                </h3>
                <h3 style={{ fontSize: "17px" }}>
                    {" "}
                    The constantly innovating Foods business has brands like Candy,
                    Lollipops and others on its portfolio.
                    <br /> The production system is comprehensive with highest quality
                    standards.
                    <br />
                    Annual Revenue: Approximately US $18 Million
                </h3>

                <h3
                    style={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "20px",
                    }}
                >
                    Key Facts
                </h3>
                <h3 style={{ fontSize: "17px" }}>
                    The business is flourishing with rising exports and ever increasing
                    local presence.
                    <br /> Total Land: 12 Acres
                    <br />
                    Technology: European Standard
                </h3>
            </Container>
        </Container>
    );
};

export default Aboutus;