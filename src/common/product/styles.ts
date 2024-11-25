import styled from 'styled-components';

export const Container = styled.button`
  border: 0;

  position: relative;

  margin: 2.5px 5px 2.5px 0;

  /* &:nth-child(1) {
    margin-left: 0px;
  };

  &:last-child {
    margin-right: 0px;
  }; */
`;

export const Skeleton = styled.span`
  width: 300px;
  height: 300px;

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  /* background-size: 200% 100%; */
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;

  bottom: 0;
  display: flex;

  width: 100%;
  align-items: start;
  flex-direction: column;

  padding: 10px 5px;

  h3 {
    color: white;
    font-size: 12px;
    font-weight: 400;
  };

  p {
    color: white;
    font-weight: 600;
  }
`;