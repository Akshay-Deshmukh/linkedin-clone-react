import React, {useState} from 'react';
import {Icon} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import './FeedSection.css'
import InputOptions from "./InputOptions/InputOptions";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {CalendarViewDay, EventNote} from "@mui/icons-material";
import Post from "./Post/Post";
function FeedSection(props) {
    const [posts, setPosts] = useState([]);
    
    const sendPost = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className={'feed'}>
            <div className={'feed_inputContainer'}>
                <div className={'feed_input'}>
                    <CreateIcon />
                    <form>
                        <input type={"text"} placeholder={'Start a post'}/>
                        <button onClick={sendPost} type={"submit"}>Send</button>
                    </form>
                </div>
                <div className={"feed_inputOptions"}>
                    <InputOptions Icon={ImageIcon} title={'Photo'} color={'#70B5F9'}/>
                    <InputOptions Icon={SubscriptionsIcon} title={'Video'} color={'#E7A33E'}/>
                    <InputOptions Icon={EventNote} title={'Event'} color={'#C0CBCD'}/>
                    <InputOptions Icon={CalendarViewDay} title={'Write article'} color={'#7FC15E'}/>
                </div>
            </div>
            {posts.map((post,index) => (
                <Post />

                ))}
        <Post name={'Akshay Deshmukh'} description={'This is a test'} message={'wow this works'} photoUrl={''}/>
        </div>
    );
}

export default FeedSection;