import Spline from "@splinetool/react-spline"
import styled from 'styled-components'
import Logo from './images/logo.svg'
import IconLaptop from './images/icon-laptop.svg'
import IconTwitter from './images/icon-twitter.svg'
import IconYoutube from './images/icon-youtube.svg'

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/FH1MAW7J7vqHbZ7t/scene.splinecode"
      />
      <Content>
        <Menu>
          <li><img src={Logo} alt='logo' /></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Login</a></li>
          <li><button>Get started</button></li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        <button>
          <img src={IconLaptop} alt="Download" />
          Download for Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYoutube} alt="Youtube" />
      </Social>
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

  button {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    background: rgb(0, 0, 0, 0.2);
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    transition: 1s;
  }
  button:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
    transform: translate(-3px);
  }

  h1, p, button {
    margin: 0 30px 0 100px;
  }

`

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 14px;

      transition: 1s;
    }
    a:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    button {
      margin: 0;
    }
  }
`

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  div {
    width: 1px;
    height: 500px;
    background: Linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`