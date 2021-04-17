import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "./context/video-context";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Header from "./components/Header"
import SideBar from './components/SideBar';
import Playlist from "./components/Playlist";
import LikedVideos from "./components/LikedVideos";
// import History from "./components/History";
import Subscriptions from "./components/Subscriptions";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute"
import "../src/styles/style.css"


function App() {


  const [currentVideo, setCurrentVideo] = useState(null)
  const [side, setSide] = useState(false)


  const selectVideo = (video) => {
    setCurrentVideo(video)
  }

  const toggleSidebar = () => {
    setSide(!side)
  }

  const { data } = useVideo()


  return (
    <div className="app">
      <Header toggle={toggleSidebar} />
      <div className="main-container">
        <SideBar side={side} />
        <Routes>
          <Route path="/" element={<VideoList videos={data} selectVideo={selectVideo} />} />
          <Route path="/watch/:id" element={<VideoDetail video={currentVideo} />} />
          <Route path="/login" element={<Login />} />

          <PrivateRoute path="/playlists" element={<Playlist selectVideo={selectVideo} />} />
          <PrivateRoute path="/likedvideos" element={<LikedVideos selectVideo={selectVideo} />} />
          {/* <PrivateRoute path="/history" element={<History />} /> */}
          <PrivateRoute path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
