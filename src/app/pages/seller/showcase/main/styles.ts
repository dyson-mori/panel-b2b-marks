import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  /* align-items: center; */
  /* justify-content: center; */

  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const Header = styled.section`
  display: flex;

  width: 100%;

  margin: 10px 0;
`;

export const Content = styled.section`
  display: flex;

  /* justify-content: space-between; */

  flex-wrap: wrap;
`;

export const Empty = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;
`;