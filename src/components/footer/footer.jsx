import React from 'react';
const Footer = () => {
  return(
    <>
      <footer>
        <div className="w-100 theme-primary py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300">
                  © Copyright 2021 BlogBuzz Company. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">
                  Designed by <a rel="sponsored" className="text-decoration-none text-light" target="_blank"><strong>Meet</strong></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;