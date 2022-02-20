import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import {BusinessCenter, Chat, Notifications, SupervisorAccount} from "@mui/icons-material";

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'header_left'}>
                <img src={'linkedin.png'} alt={''} />
            <div className={'header_search'}>
                <SearchIcon />
                <input type={'text'} />
            </div>
            </div>
            <div className={'header_right'}>
                <HeaderOption  Icon={HomeIcon} title={'Home'}/>
                <HeaderOption  Icon={SupervisorAccount} title={'My Network'}/>
                <HeaderOption  Icon={BusinessCenter} title={'My Network'}/>
                <HeaderOption  Icon={Chat} title={'My Network'}/>
                <HeaderOption  Icon={Notifications} title={'My Network'}/>
                <HeaderOption  avatar={'me.png'} title={'me'}/>
            </div>
        </div>
    );
}

export default Header;