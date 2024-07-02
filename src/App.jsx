import Spline from "@splinetool/react-spline"
import styled from 'styled-components'

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/FH1MAW7J7vqHbZ7t/scene.splinecode"
      />
      <Content>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  
  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;
  
  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  h1, p {
    margin: 0 30px 0 100px;
  }
`