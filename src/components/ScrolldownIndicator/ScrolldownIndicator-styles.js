import styled, { keyframes } from 'styled-components'

const scrollDownAnimation = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const StyledScrolldownIndicator = styled.div`  
  display: flex;
  width: 100%;
  height: 3rem;
`

const StyledScrollButton = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 3rem;
  width: 2rem;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &:before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    box-sizing: border-box;
    -webkit-animation: ${scrollDownAnimation} 2s infinite;
    animation: ${scrollDownAnimation} 2s infinite;
  }
`

export { StyledScrolldownIndicator, StyledScrollButton };