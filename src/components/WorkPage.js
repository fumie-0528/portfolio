
import React from 'react';
import metaImage from "../Images/meta-logo.png";
import webHooImage from "../Images/incoming-webhoo.png";
import cmsImage from "../Images/cms-logo.png";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/wordpress.png";

function WorkPage() {
    return (
        <div className="container text-center">
            <section class="page-section" id="services">
                <div className="service">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Works</h2>
                    </div>

                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <img src={metaImage} className="metaImage" />
                            </span>

                            <a href="https://www.meta.com/">
                                <h4 class="my-3">Work at Meta</h4>
                            </a>
                            <p class="text-muted">
                                At Meta, I used a CMS to develop and manage the Meta.com website. The CMS at Meta utilizes HTML inline styling. I was responsible for creating and managing the Ecommerce website in 16 different languages, ensuring it aligned with Meta's brand standards.
                            </p>
                        </div>

                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <img src={webHooImage} className="webHooImage" />
                            </span>
                            <h4 class="my-3">Project</h4>
                            <p class="text-muted">    
                                <strong>Chat bot</strong>; a simple Chatbot that automatically responds to user-selected questions based on a pre-defined dataset. 
                            </p>
                            <p class="text-muted">    
                            <strong>Pixabay</strong>; a simple website that uses the Pixabay API to search for and display photos. Users can enter keywords to find images, which are fetched and presented dynamically on the site.
                            </p>
                        </div>

                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <img src={cmsImage} className="cmsImage" />
                            </span>

                            <a href="https://snowx.com/">
                                <h4 class="my-3">CMS</h4>
                            </a>
                            <p class="text-muted">
                                I created the landing page (LP) for a virtual art marketplace company's app using WordPress.
        </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skill">
                <div class="text-center">
                    <h2 class="title">Technical skill</h2>

                    <div class="row text-center">
                        <div class="col-md-4 skill">
                            <img src={reactImage} />
                            <h4>React</h4>
                        </div>

                        <div class="col-md-4 skill">
                            <img src={jsImage} />
                            <h4>HTML/CSS/Javascript</h4>
                        </div>

                        <div class="col-md-4 skill">
                            <img src={firebaseImage} />
                            <h4>WordPress</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkPage;