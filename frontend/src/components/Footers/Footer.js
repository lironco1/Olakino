/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="/#">About Us</a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed and created by{" "}
            <a href="/">Olakino</a>.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
