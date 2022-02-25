import React from 'react';
import './Sidebar.css'
import {Avatar} from "@mui/material";
function Sidebar(props) {
    
    const reactItems = (topics) => {
        return (
            <div className={'sidebar_recentItem'}>
                <span className={'sidebar_hash'}>#</span>
                <p>{topics}</p>
            </div>
        )
    }
    return (
        <div className={'sidebar'}>
            <div className={'sidebar_top'}>
                <img src={'background.jpg'} alt={''} />
                <Avatar className={'sidebar_avatar '}/>
                <h2>Akshay Deshmukh</h2>
                <h4>akshaydeshmukh@yahoo.com</h4>
            </div>
            
            <div className={'sidebar_stats'}>
                <div className={'sidebar_stat'}>
                    <p>Who viewd you</p>
                    <p className={'sidebar_statNumber'}>
                        2,543
                    </p>
                </div>
                <div className={'sidebar_stat'}>
                    <p>View on post</p>
                    <p className={'sidebar_statNumber'}>
                        2,44
                    </p>
                </div>
            </div>
            
            <div className={'sidebar_bottom'}>
                <p>Recent</p>
                {reactItems('reactjs')}
                {reactItems('programming')}
                {reactItems('.Net')}
                {reactItems('Software developer')}
            </div>
        </div>
    );
}

export default Sidebar;