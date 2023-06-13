import styled from "styled-components";

export const MenuBarWrapper = styled.div`
  font-size: 10px;
  line-height: 14px;
  max-width: 390px;
  height: 60px;
  font-weight: 400;
`;

export const MenuBarUl = styled.ul`
  max-width: 390px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 6px;
  margin: 0;
`;

export const MenuBarLi = styled.li`
  max-width: 84px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 84px;
  gap: 4px;
  + li {
    margin-left: 14px;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
