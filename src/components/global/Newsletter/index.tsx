import React from "react";

const NewsLetter = () => {
  return (
      <>
    <div className="container mt-5 text-center newsletter-container d-none d-md-block">
      <h1 className="newsletter-title">Subscribe to our Newslatter</h1>
      <p className="newsletter-info">
        Sign up for free and be the first to get notified about new posts.
      </p>

      <form className="mb-3 input-group ">
    <div className="form-section">

        <input
          type="text"
          className="form-control"
          placeholder="Your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button className="submit-btn" >
          Subscribe
        </button>
    </div>
      </form>
      <div className="py-3 text-center newsletter-socials">
            <span className="me-3"><i className="fab fa-facebook-f me-2"></i>Facebook</span>
            <span className="me-3"><i className="fab fa-twitter me-2"></i>Twitter</span>
            <span className="me-3"><i className="fab fa-instagram me-2"></i>Instagram</span>
            <span className="me-3"><i className="fab fa-youtube me-2"></i>Youtube</span>
      </div>
    </div>
    <div className="container mt-5 text-center mobile-newsletter-container d-block d-md-none">
      <h1 className="newsletter-title">Subscribe to our Newslatter</h1>
      <p className="newsletter-info">
        Sign up for free and be the first to get notified about new posts.
      </p>

      <form className="mb-3 form-group ">
    <div className="form-section">

        <input
          type="text"
          className="mb-3 form-control"
          placeholder="Your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button className="submit-btn" >
          Subscribe
        </button>
    </div>
      </form>
      <div className="py-3 text-center newsletter-socials">
            <span className="me-3"><i className="fab fa-facebook-f me-2"></i>Facebook</span>
            <span className="me-3"><i className="fab fa-twitter me-2"></i>Twitter</span>
            <span className="me-3"><i className="fab fa-instagram me-2"></i>Instagram</span>
            <span className="me-3"><i className="fab fa-youtube me-2"></i>Youtube</span>
      </div>
    </div>
    </>
  );
};

export default NewsLetter;
