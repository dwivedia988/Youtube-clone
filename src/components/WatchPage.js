import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { GOGGLE_API_KEY, YOUTUBE_VIDEO_DETAIL_API } from "../utils/constants";
import VideoDetail from "./VideoDetail";

const WatchPage = () => {
  const [video, setVideo] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetail();

    dispatch(closeMenu());
  });

  const getVideoDetail = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_DETAIL_API +
        searchParams.get("v") +
        "&key=" +
        GOGGLE_API_KEY
    );
    const json = await data.json();
    setVideo(json.items);

    // console.log(video.items[0].snippet);
  };

  // const { snippet, statistics } = video.items[0];
  // const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col mx-32">
      <div className="px-5 flex">
        <div className="">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            {video.map((v) => (
              <VideoDetail key={v.id} info={v} />
            ))}
          </div>
        </div>
        <div className="">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
