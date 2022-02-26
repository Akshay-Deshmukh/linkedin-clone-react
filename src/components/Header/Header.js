import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import {BusinessCenter, Chat, Notifications, SupervisorAccount} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../Redux/userStore/userSlice";
import {auth} from "../../firebase/Firebase";
import { signOut } from "firebase/auth";
import {useMediaQuery} from "react-responsive";

function Header(props) {
    const dispatch = useDispatch();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const logoutOfApp = () => {
        dispatch(logout())
        signOut(auth).then(r => {
        }).catch(error => alert(error))
    }
    
    return (
        <div className={'header'}>
            <div className={'header_left'}>
                <img src={'linkedin.png'} alt={''} />
            <div className={'header_search'}>
                <SearchIcon />
                <input type={'text'} placeholder={'Search'}/>
            </div>
            </div>
              <div className={'header_right'}>
                  {!isTabletOrMobile ? <>
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={SupervisorAccount} title={'My Network'}/>
                <HeaderOption Icon={BusinessCenter} title={'My Network'}/>
                <HeaderOption Icon={Chat} title={'My Network'}/>
                <HeaderOption Icon={Notifications} title={'My Network'}/>
                <HeaderOption avatar={true} title={'me'} onClick={logoutOfApp}/> </> :
                <HeaderOption avatar={true} title={'me'} onClick={logoutOfApp}/>}
            </div>
            
        </div>
    );
}

export default Header;