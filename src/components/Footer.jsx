import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bd-footer py-5 mt-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <Link
                className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                to="/"
                aria-label="Bootstrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  className="d-block me-2"
                  viewBox="0 0 118 94"
                  role="img"
                >
                  <title>Bootstrap</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="fs-5">Bootstrap</span>
              </Link>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">
                  Designed and built with all the love in the world by the{" "}
                  <Link to="/docs/5.1/about/team/">Bootstrap team</Link> with
                  the help of{" "}
                  <Link to="https://github.com/twbs/bootstrap/graphs/contributors">
                    our contributors
                  </Link>
                  .
                </li>
                <li className="mb-2">
                  Code licensed{" "}
                  <Link
                    to="https://github.com/twbs/bootstrap/blob/main/LICENSE"
                    target="_blank"
                    rel="license noopener"
                  >
                    MIT
                  </Link>
                  , docs{" "}
                  <Link
                    to="https://creativecommons.org/licenses/by/3.0/"
                    target="_blank"
                    rel="license noopener"
                  >
                    CC BY 3.0
                  </Link>
                  .
                </li>
                <li className="mb-2">Currently v5.1.3.</li>
                <li className="mb-2">
                  Analytics by{" "}
                  <Link
                    to="https://usefathom.com/ref/ADZSBE"
                    target="_blank"
                    rel="noopener"
                  >
                    Fathom
                  </Link>
                  .
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/docs/5.1/">Docs</Link>
                </li>
                <li className="mb-2">
                  <Link to="/docs/5.1/examples/">Examples</Link>
                </li>
                <li className="mb-2">
                  <Link to="https://themes.getbootstrap.com/">Themes</Link>
                </li>
                <li className="mb-2">
                  <Link to="https://blog.getbootstrap.com/">Blog</Link>
                </li>
                <li className="mb-2">
                  <Link to="https://cottonbureau.com/people/bootstrap">
                    Swag Store
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Guides</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/docs/5.1/getting-started/">Getting started</Link>
                </li>
                <li className="mb-2">
                  <Link to="/docs/5.1/examples/starter-template/">
                    Starter template
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/docs/5.1/getting-started/webpack/">Webpack</Link>
                </li>
                <li className="mb-2">
                  <Link to="/docs/5.1/getting-started/parcel/">Parcel</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="https://github.com/twbs/bootstrap">
                    Bootstrap 5
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/twbs/bootstrap/tree/v4-dev">
                    Bootstrap 4
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/twbs/icons">Icons</Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/twbs/rfs">RFS</Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/twbs/bootstrap-npm-starter">
                    npm starter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="https://github.com/twbs/bootstrap/issues">
                    Issues
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/twbs/bootstrap/discussions">
                    Discussions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://github.com/sponsors/twbs">
                    Corporate sponsors
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://opencollective.com/bootstrap">
                    Open Collective
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="https://stackoverflow.com/questions/tagged/bootstrap-5">
                    Stack Overflow
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
