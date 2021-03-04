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

const StyledRightFrame = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: center;
  margin-right: 7rem;
  font-weight: 900;

  -webkit-animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

const StyledName = styled.span`
  font-size: 3rem;
`

const StyledOccupation = styled.span`
  font-size: 1rem;
  margin-top: 1rem;
`

export { StyledRightFrame, StyledName, StyledOccupation };