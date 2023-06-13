import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import backIcon from "../../../img/icon-arrow-left.svg";
import moreIcon from "../../../img/icon- more-vertical.svg";
import {
  TopHeaderWrapper,
  BackBtn,
  BackIcon,
  MoreBtn,
  MoreIconImg,
} from "./TopHeaderStyle.js";
import { ModalContext } from '../../../context/ModalContext';

export default function ProfileTopHeader() {
  const {isConfirmModal, SetIsConfirmModal} = useContext(ModalContext);
  const navigation = useNavigate();

  function onClickBack(url) {
    navigation(url)
  }

  function onClickMore() {
    SetIsConfirmModal(true);
  }
  return (
    <TopHeaderWrapper>
      <BackBtn onClick={()=>onClickBack("/post")}>
        <BackIcon src={backIcon} alt="뒤로가기" />
      </BackBtn>
      <MoreBtn>
        <MoreIconImg src={moreIcon} alt="더보기" onClick={onClickMore}/>
      </MoreBtn>
    </TopHeaderWrapper>
  );
}
