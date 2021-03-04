import styled, { keyframes } from 'styled-components'

const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-right: 7rem;
  font-size: 1rem;
  font-weight: 900;
  -webkit-animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

  & > :not(:last-child) {
    margin-right: 2.5rem;
    cursor: pointer;
    background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken(#fff, 15%) 5px,
    );
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    /* transition: 0.5s ease; */
  }

  /* & > span:hover {
    span {
      background-size: 100%;
    }
  } */
`

export { StyledHeader };