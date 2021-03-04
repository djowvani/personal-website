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
const StyledBillboard = styled.div`
  /* background-color: salmon; */

  height: 45rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  font-size: 1rem;
  font-weight: 900;
  -webkit-animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${trackingInExpand} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

export { StyledBillboard };