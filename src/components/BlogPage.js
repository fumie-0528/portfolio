
import React from 'react'
import myImage from "../Images/drowing.jpg";
import IntlBusiness from "../Images/international-business.jpeg";
import Developer from "../Images/developer.jpg";

function BlogPage() {
    return (
       <div class="container"> 
            <div className="blog">
                <div className="blog-contents">
                    <p>                 
                        After graduating from a university in Japan, I moved to the United States on my own. Leveraging my bilingual and bicultural skills, I have primarily worked in the field of international business between Japan and the U.S.
                        <br />
                        I have a strong interest in education, and for about seven years, I have been supporting opportunities for American elementary students to gain experience in Japan, as well as consulting Japanese university students on studying in the U.S. and building careers afterward.
                    </p>   
                </div>

                <div className="blog-image">
                    <img src={IntlBusiness } />
                </div>
            </div>      

            <div className='blog'>                               
                <div className="blog-image">
                    <img src={Developer} />
                </div>
                
                <div className="blog-contents">
                    <p>
                        During the Covid pandemic, I decided to change careers and pursued coding skills while working full-time. I later joined an NFT startup as a Project Manager, where I managed a VR artist community and created the company’s landing page.
                    <br />
                        Subsequently, as a Frontend Developer at Meta, I managed the eCommerce website across 16 languages. As the only bilingual developer on the team, I led the implementation of a Japanese line break tool. When I joined, the accuracy rate was about 20%, but by the time I left, it had improved to around 96%.
                    </p> 
                </div>  
            </div>    

            <div className='blog'>
                <div className="blog-contents">
                    <p>
                        As a mother, I remain highly interested in the education sector. Every Saturday, I teach at a Japanese supplementary school, providing bilingual education to children using Japanese textbooks.
                    <br />
                        In my free time, I enjoy physical activities, especially martial arts, which I have practiced for many years. I also love exploring wineries on weekends, finding my favorite wines.
                    </p>   
                    </div>
                    
                    <div className="blog-image">
                        <img src={myImage} />
                    </div>      
                </div>

                <div className="bottom"/>
        </div>
    )
}

export default BlogPage;