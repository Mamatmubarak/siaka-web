import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-3 pb-3">

      <div className="container d-flex justify-content-between nav__bar ps-2.5 ps-sm-5 pe-2.5 pe-sm-5">
        <Link href="#">
          <div className="navbar-brand d-flex align-items-center me-5">
            <Image src="/icon/logo-siaka.svg" width={182} height={48} alt="logo-siaka"/>
          </div>
        </Link>
          {/* <a className="navbar-brand d-flex align-items-center me-5" href="#">
            
          </a> */}
          <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#">
                  <div className="av-link ms-2 border-bottom border-primary active" aria-current="page">SIAKA</div>
                </Link>
                {/* <a className="nav-link ms-2 border-bottom border-primary active" aria-current="page" href="#">SIAKA</a> */}
              </li>
              <li className="nav-item ms-2">
                <Link href="/error">
                  <div className="nav-link">PA</div>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link href="/error">
                  <div className="nav-link">DIVLEARN</div>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link href="/error">
                  <div className="nav-link">PENILAIAN KINERJA</div>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link href="/error">
                  <div className="nav-link">KOTAK SARAN</div>
                </Link>
              </li>
            </ul>         
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link href="/">
              <div className="d-flex align-items-center justify-content-center">
              <Image className="" src="/icon/notification.svg" width={24} height={24} />
              <Image src="/image/profil.jpg" width={34} height={34} />
              </div>
            </Link>
            {/* <a className="d-flex align-items-center justify-content-center" href="/">
            
            </a> */}
          </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      

    </nav>
    </>
  )
}
