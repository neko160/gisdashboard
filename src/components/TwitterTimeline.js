import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

class TwitterTimeline extends React.Component {
    render() {
        return (
            <div className="menuTwitter_wrapper"> 
            <a className="twitter-timeline" 
                data-width="499" 
                data-height="450" data-theme="dark" href="https://twitter.com/Chilquinta600?ref_src=twsrc%5Etfw">Tweets by Chilquinta600</a>
            </div>
           
           
           
        );
    }
}

export default TwitterTimeline;

