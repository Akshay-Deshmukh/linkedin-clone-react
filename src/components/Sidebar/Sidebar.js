import React from 'react';
import './Sidebar.css'
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../../Redux/userStore/userSlice";
function Sidebar(props) {
    const user = useSelector(selectUser)
    
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
                <Avatar className={'sidebar_avatar '} src={user.photoURL}  sx={{ width: 50, height: 50 }}>{user.email[0]} </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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