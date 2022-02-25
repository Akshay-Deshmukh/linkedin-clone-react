import React, {useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './FeedSection.css'
import InputOptions from "./InputOptions/InputOptions";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {CalendarViewDay, EventNote} from "@mui/icons-material";
import Post from "./Post/Post";

function FeedSection(props) {
    const [posts, setPosts] = useState([{
        name: "Akshay",
        description: "this is a test",
        message: 'Welcome to linkedin clone',
    }]);
    const [input, setInput] = useState('');

    const sendPost = (e) => {
        e.preventDefault();
        setPosts(prevState => {
            return prevState.concat({
                name: "Bot Chen",
                description: "new post",
                message: input,
            })
        })
        setInput('')
    }
    return (
        <div className={'feed'}>
            <div className={'feed_inputContainer'}>
                <div className={'feed_input'}>
                    <CreateIcon/>
                    <form>
                        <input type={"text"} value={input} onChange={(e) => setInput(e.target.value)}
                               placeholder={'Start a post'}/>
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
            {posts.map((post, index) => (
                <Post key={index}
                      name={post.name}
                      description={post.description}
                      message={post.message}

                />
            )).reverse()}
        </div>
    );
}

export default FeedSection;