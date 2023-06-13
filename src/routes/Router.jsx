import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Splash from "../pages/Splash/Splash";

import Login from "../pages/Login/Login";
import LoginEmail from "../pages/Login/LoginEmail/LoginEmail";
import UserAccount from "../pages/Signup/UserAccount/UserAccount";
import ProfileSetting from "../pages/Signup/ProfileSetting/ProfileSetting";

import Search from "../pages/Feed/Search/Search";
import Post from "../pages/Feed/Post/Post";
import PostDetail from "../pages/Feed/Post/PostDetail/PostDetail";
import PostEdit from "../pages/Feed/Post/PostEdit/PostEdit";
import PostUpload from "../pages/Feed/Post/PostUpload/PostUpload";
import ProductDetail from "../pages/Feed/Product/ProductDetail/ProductDetail";
import ProductEdit from "../pages/Feed/Product/ProductEdit/ProductEdit";
import ProductUpload from "../pages/Feed/Product/ProductUpload/ProductUpload";

import UserProfile from "../pages/Profile/UserProfile/UserProfile";
import ProfileEdit from "../pages/Profile/ProfileEdit/ProfileEdit";
import Followers from "../pages/Profile/Follow/Followers/Followers";
import Following from "../pages/Profile/Follow/Following/Following";

import ChatList from "../pages/Chat/ChatList/ChatList";
import ChatRoom from "../pages/Chat/ChatRoom/ChatRoom";

import NotFound from "../pages/NotFound/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/login/loginEmail/" element={<LoginEmail />} />
        <Route path="/signup/userAccount/" element={<UserAccount />} />
        <Route path="/signup/profileSetting/" element={<ProfileSetting />} />
 
        <Route path="/search/" element={<Search />} />
 
        <Route path="/post/" element={<Outlet />}>
          <Route index element={<Post />} />
          <Route path=":postId/" element={<PostDetail />} />
          <Route path=":postId/edit" element={<PostEdit />} />
          <Route path="upload" element={<PostUpload />} />
        </Route>

        <Route path="/product/" element={<Outlet />}>
          <Route path=":productId/" element={<ProductDetail />} />
          <Route path=":productId/edit" element={<ProductEdit />} />
          <Route path="upload" element={<ProductUpload />} />
        </Route>

        <Route path="/profile/:userId" element={<Outlet />}>
          <Route index element={<UserProfile />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path="followers" element={<Followers />} />
          <Route path="following" element={<Following />} />
        </Route>

        <Route path="/chatList" element={<ChatList />} />
        <Route path="/chatList/:ChatId" element={<ChatRoom />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
