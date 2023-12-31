import React from "react";
import styled from "styled-components";
import iconHome from "../../../img/icon-home.svg";
import iconHomeFill from "../../../img/icon-home-fill.svg";
import iconMessage from "../../../img/icon-message-circle.svg";
import iconMessageFill from "../../../img/icon-message-circle-fill.svg";
import iconEdit from "../../../img/icon-edit.svg";
import iconUser from "../../../img/icon-user.svg";
import iconUserFill from "../../../img/icon-user-fill.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom"; // 이건가용
import { MenuBarWrapper, MenuBarUl, MenuBarLi, Img } from "./MenuBarStyle";

export const LinkStyle = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4rem;
  list-style: none;
  text-decoration: none;
  gap: 4px;
  p {
    color: #767676;
  }
`;

export default function MenuBar() {
  const IconHome = {
    default: iconHome,
    fill: iconHomeFill,
  };
  const IconMessage = {
    default: iconMessage,
    fill: iconMessageFill,
  };
  const IconEdit = {
    default: iconEdit,
    fill: iconEdit,
  };
  const IconUser = {
    default: iconUser,
    fill: iconUserFill,
  };

  return (
    <MenuBarWrapper>
      <MenuBarUl>
        <MenuBarLi>
          <LinkStyle to="/post">
            {({ isActive }) => (
              <>
                <Img
                  src={isActive ? IconHome.fill : IconHome.default}
                  alt="홈"
                />
                <p
                  style={{
                    color: isActive ? "#B51215" : "#767676",
                  }}
                >
                  홈
                </p>
              </>
            )}
          </LinkStyle>
        </MenuBarLi>
        <MenuBarLi>
          <LinkStyle to="/chatList">
            {({ isActive }) => (
              <>
                <Img
                  src={isActive ? IconMessage.fill : IconMessage.default}
                  alt="메세지"
                />
                <p
                  style={{
                    color: isActive ? "#B51215" : "#767676",
                  }}
                >
                  채팅
                </p>
              </>
            )}
          </LinkStyle>
        </MenuBarLi>
        <MenuBarLi>
          <LinkStyle to="/post/upload">
            {({ isActive }) => (
              <>
                <Img
                  src={isActive ? IconEdit.fill : IconEdit.default}
                  alt="게시물 작성"
                />
                <p
                  style={{
                    color: isActive ? "#B51215" : "#767676",
                  }}
                >
                  게시물 작성
                </p>
              </>
            )}
          </LinkStyle>
        </MenuBarLi>
        <MenuBarLi>
          <LinkStyle to="/profile">
            {({ isActive }) => (
              <>
                <Img
                  src={isActive ? IconUser.fill : IconUser.default}
                  alt="프로필"
                />
                <p
                  style={{
                    color: isActive ? "#B51215" : "#767676",
                  }}
                >
                  프로필
                </p>
              </>
            )}
          </LinkStyle>
        </MenuBarLi>
      </MenuBarUl>
    </MenuBarWrapper>
  );
}
