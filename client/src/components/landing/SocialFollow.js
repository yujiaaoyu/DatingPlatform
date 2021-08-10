import React from "react";
import './landing.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

// Footer of landing page.
const SocialFollow = () => {
    return (
        <div>
        <div className="discover">Social&nbsp;Follow</div>

        <div className="link">
            <a className="facebbok" href="https://facebook.com">
                <FacebookIcon style={{ fontSize: 30 }}/>
            </a>&nbsp;
            <a href="https://youtube.com">
                <YouTubeIcon style={{ fontSize: 30 }}/>
            </a>&nbsp;
            <a href="https://twitter.com">
                <TwitterIcon style={{ fontSize: 30 }}/>
            </a>&nbsp;
            <a href="https://instagram.com">
                <InstagramIcon style={{ fontSize: 30 }}/>
            </a>        
        </div>
        
        
        
       
        </div>
    );
};

export default SocialFollow;