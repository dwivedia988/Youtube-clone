import React from 'react';
import Button from './Button';

const VideoDetail = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div>
            <span className='font-bold text-xl'>{title}</span>
            <div className='flex'>
                <div>
                    <li className='list-none'>{channelTitle}</li>
                    <li className='list-none'>{statistics.viewCount} views</li>
                </div>
                <div className='flex px-5 mx-5'>
                    <button className='px-5 py-2 m-2 bg-black text-white rounded-full'>Subscribe</button>
                    <div className='flex px-1 ml-80'>
                        <button className='px-4 py-2 m-2 bg-gray-200 rounded-lg'>{statistics.likeCount} Likes</button>
                        <Button name="Share" />
                        <Button name="Download" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;