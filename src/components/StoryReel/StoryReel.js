import React from 'react'
import './styles/StoryReel.css'
import Story from '../Story/Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                profileSrc="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
                title="Some One" 
            />
            <Story 
                image="https://720891.smushcdn.com/1454540/wp-content/uploads/2019/06/Header-2.jpg?lossy=1&strip=1&webp=1"
                profileSrc="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"
                title="Some OneElse" 
            />
            <Story 
                image="https://www.lavishvegas.com/news/wp-content/uploads/2020/02/corona-virus-las-vegas.jpg"
                profileSrc="https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png"
                title="Weesley Snipes" 
            />
            <Story 
                image="https://coolmaterial.com/wp-content/uploads/2012/03/15-classic-cars-that-define-cool-hero-1000x600.jpg"
                profileSrc="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
                title="Super Woman" 
            />
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
                profileSrc="https://thewritelife.com/wp-content/uploads/2016/11/how-to-write-a-profile.jpg"
                title="Santa Lucy" 
            />
        </div>
    )
}

export default StoryReel
