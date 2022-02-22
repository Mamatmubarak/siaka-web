import Image from "next/image"

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-3 pb-3">

      <div className="container d-flex justify-content-between nav__bar ps-5 pe-5">
        
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Image src="/icon/logo-siaka.svg" width={182} height={48} alt="logo-siaka"/>
          </a>
          <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-2 border-bottom border-primary active" aria-current="page" href="#">SIAKA</a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">PA</a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">JUDUL</a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">DIVLEARN</a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">PENILAIAN KINERJA</a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">KOTAK SARAN</a>
              </li>
            </ul>         
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <a href="/">
            <Image className="" src="/icon/notification.svg" width={24} height={24} />
            <Image src="/image/profil.jpg" width={34} height={34} />
            </a>
          </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      

    </nav>
    </>
  )
}