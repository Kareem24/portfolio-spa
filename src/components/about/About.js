import { Fade } from 'react-awesome-reveal'

function About() {
    return (
        <div>
            <section id="about" className={`bx-about-section bx-section padding-b-80 ${"#about" ? "padding-top" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <Fade triggerOnce duration={2000} direction='up' delay={300} className="sec-img">
                                <img src="assets/img/about/my.webp" alt="" />
                            </Fade>
                        </div>
                        <Fade triggerOnce duration={2000} direction='up' delay={300} className="col-md-12 col-lg-6">
                            <div className="detailed-content">
                                <div className="title">
                                    <p className="light-txt">About Me</p>
                                    <h2>Passionate and competent
                                        <span className="primary-clr"> Developer</span></h2>
                                    <p>Hello, I'm Kareem Roqib, A Passionate web developer . I love to create functional and beautiful websites. I specialize in front-end Development , bringing design to life with HTML, CSS and Javascript
                                        . I love solving problems and continously learning new skills to stay updated with the latest in web
                                        development. My goal is to build user-friendly, responsive websites that provide a great experience on any device.

                                        <p> when I'm not coding, I enjoy reading books, tech blogs, exploring new technologies ,and working on personal projects . Let's connect and create something amazing together!</p>
                                    </p>
                                </div>
                                {/* <div className="personal-detail">
                                    <div className="content">
                                        <div className="left">
                                            <div className="name pb">
                                                <span className="info">Full Name :</span>
                                                <span className="detail">R </span>
                                            </div>
                                            <div className="age pb">
                                                <span className="info">Age :</span>
                                                <span className="detail">30 Years</span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="ph pb">
                                                <span className="info">Phone No :</span>
                                                <span className="detail">+00 987654321</span>
                                            </div>

                                            <div className="email pb">
                                                <span className="info">Email :</span>
                                                <span className="detail">example@example.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mail">
                                        <div className="mail">
                                            <div className="address">
                                                <span className="info">Address :</span>
                                                <span className="detail">Ruami mellow moraes,- Salvador, Brazil</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
