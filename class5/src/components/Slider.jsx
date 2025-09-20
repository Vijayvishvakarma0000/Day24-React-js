import React from 'react'

function Slider() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators/dots */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  {/* The slideshow/carousel */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/company/17/applications/65f437fae78851028707daee/theme/pictures/free/original/Full-Bedroom-Range-1757595866483.jpeg" alt="Los Angeles" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/company/17/applications/65f437fae78851028707daee/theme/pictures/free/original/mattress-1741773295951.png" alt="Chicago" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/company/17/applications/65f437fae78851028707daee/theme/pictures/free/original/Home-Furnishings-1757596681933.jpeg" alt="New York" className="d-block w-100" />
    </div>
  </div>
  {/* Left and right controls/icons */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
      </div>

    </div>
  )
}

export default Slider