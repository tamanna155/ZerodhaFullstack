import React from "react";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <a class="navbar-brand" href="/" className="p-3" style={{marginLeft:"10rem"}}>
            <img src="media/images/logo.svg" style={{width:"22%"}} alt="logo"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="d-flex" role="search">
          <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/signup">
                    Signup
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/about">
                    About
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/product">
                    Products
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/pricing">
                    Pricing
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/support">
                    Support
                </a>
            </li>
          </ul>
          </form>
        </div>
      </nav>
  );
}

export default Navbar;
