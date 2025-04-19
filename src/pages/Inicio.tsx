

export default function Inicio() {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44cBJfuW1hkbQ65rsWadxzyUTifhzD8pXoQ&s" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQF2IlOwzJ-oayELo-FHRjI0O3i963KZ4qAA&s" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPFVn3AcPSJLx5_WQ_lKmLSe_tgh8qWNE5w&s" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
