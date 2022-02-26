import React from 'react';
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget(props) {
    const newArticle = (heading, subtitle) => {
        return (
            <div className={'widget_article'}>
                <div className={'widget_articleLeft'}>
                    <FiberManualRecordIcon />
                </div>
                <div className={'widget_articleRight'}>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={'widget'}>
            <div className={'widget_header'}>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("Test", 'Top news - 9099 readers')}
            {newArticle("Covid", 'New Variant Omicron found')}
            {newArticle("Apple", 'Apple stock reach new high')}
        </div>
        
    );
}

export default Widget;