import React, {forwardRef} from 'react';
import './Post.css'
import {Avatar} from "@mui/material";
import InputOptions from "../InputOptions/InputOptions";
import {
    CommentOutlined,
    Recommend,
    RecommendOutlined,
    SendOutlined,
    ShareOutlined,
    ThumbsUpDownOutlined
} from "@mui/icons-material";
const Post = forwardRef(({name, description, message, photoUrl, email}, ref) => {
    return (
        <div ref={ref} className={'post'}>
            <div className={'post_header'}>
                <Avatar src={photoUrl}>{description[0].toUpperCase()}</Avatar>
                <div className={'post_info'}>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            
            <div className={'post_body'}>
                <p> {message}</p>
            </div>
            
            <div className={'post_button'}>
                <InputOptions Icon={Recommend} title={'like'} color={'gray'}/>
                <InputOptions Icon={CommentOutlined} title={'Comment'} color={'gray'}/>
                <InputOptions Icon={ShareOutlined} title={'Share'} color={'gray'}/>
                <InputOptions Icon={SendOutlined} title={'Send'} color={'gray'}/>
            </div>
        </div>
    );
});

export default Post;