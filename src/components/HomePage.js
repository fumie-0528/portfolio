import React from "react";
// import image1 from "../../Images/bg1.jpg";

import profileImage from "../Images/fumie_avatar.png";

function HomePage() {
    return (
        <div className="container text-center">
            <h1>About Me</h1>
            <img src={profileImage} className="profileImage" />

            <div className="description">
                <div className="jt">
                    <h3>
                        Skilled Developer
                    </h3>
             
                    <p className="first-paragraph">
                        I am a Frontend Developer with a passion for creating intuitive and visually engaging web experiences. After seven years in the education sector, I transitioned into tech, embarking on a journey to learn coding during the pandemic. This decision led me to my current role at Meta, where I have been working as a contractor, developing Ecommerce websites and managing complex global projects. My role involves developing modules, maintaining high-quality UI/UX across 16 different locales, and ensuring accurate localization, particularly for the Japanese market.
                    </p>

                    <p>
                        I have honed my skills in HTML, CSS, CMS, responsive design, and project management while collaborating closely with cross-functional teams. One of my most rewarding experiences was leading a high-priority project under tight deadlines, which strengthened my problem-solving skills and boosted my confidence.
                </p>
                </div>

                <div className="jt">
                    <h3>
                        Dynamic Project Manager
                </h3>
                    <p className="first-paragraph">
                        As an experienced Project Manager with over 10 years in the industry, I have successfully led diverse teams and managed projects across multiple sectors, including technology, education, and consumer goods. My strong background in Agile methodologies enables me to effectively coordinate cross-functional teams, ensuring timely delivery of high-quality results. I am passionate about fostering collaboration and open communication among team members, which I believe are essential for achieving project goals and driving innovation.
                    </p>

                    <p>
                        My expertise includes project planning, resource allocation, and risk management, allowing me to navigate challenges and adapt to changing circumstances with ease. I have a proven track record of managing budgets and timelines, while maintaining a strong focus on stakeholder satisfaction. With a commitment to continuous improvement, I actively seek opportunities to enhance processes and methodologies, ultimately contributing to the success of my projects and the growth of the organizations I work with.
                    </p>
                </div>
            </div>

            <div className="jt">
                <h3>
                    Other skills
                </h3>
                <div className="other-skill">
                    <p>
                        Localization Specialist, Native Japanese Speaker, Leadership
                    </p>
                </div>
            </div>

            <div className="bottom"/>
        </div>
    )
}

export default HomePage;