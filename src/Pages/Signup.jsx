import React from 'react'
import styled from "styled-components";
import BackgroundImage from "../Components/BackgroundImg";
import Header from "../Components/Header";
 function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <div className="contain">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies , TV shows & More</h1>
            <h4>Watch anywhere . Cancel anytime.</h4>
            <h6>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Get Started</button>
          </div>
          <button>Log In</button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div``;
export default  Signup;