import React, {useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './FeedSection.css'
import InputOptions from "./InputOptions/InputOptions";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {CalendarViewDay, EventNote} from "@mui/icons-material";
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {selectUser} from "../../Redux/userStore/userSlice";
import FlipMove from "react-flip-move";

function FeedSection(props) {
    const user = useSelector(selectUser)
    
    const [posts, setPosts] = useState([{
        name: "Akshay",
        description: "ad_test@gmail.com",
        message: 'Welcome to linkedin clone',
        photoUrl: "",
    },
        {
            name: "Tom",
            description: "tom_test@gmail.com",
            message: 'This is so cool !!!',
            photoUrl: "",
        }
        ,
        {
            name: "Mike",
            description: "mike_test@gmail.com",
            message: 'New post animation is great, try adding some new post !!',
            photoUrl: "",
        }
        ,
        {
            name: "Jane",
            description: "jane_test@gmail.com",
            message: 'This clone is inspired from Linkedin it is also mobile responsive do checkout from desktop for full view 😃',
            photoUrl: "",
        }
    ]);
    const [input, setInput] = useState('');

    const sendPost = (e) => {
        e.preventDefault();
        setPosts(prevState => {
            return prevState.concat({
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: user.photoURL
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
            <FlipMove>
            {posts.map((post, index) => (
                <Post key={index}
                      name={post.name}
                      description={post.description}
                      message={post.message}
                      photoUrl={post.photoUrl}
                />
            )).reverse()}
            </FlipMove>
        </div>
    );
}

export default FeedSection;