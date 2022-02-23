import Image from "next/image"
import Link from "next/link"
import Layout from "../components/LoginLayout"

export default function Login() {
  return (
    <Layout>
        <div className="login-container kotak" >
            <div className="card login-form kotak__login pt-0 pb-0">
                <div className="card-body body-kartu">
                    <Image src="/image/logo-undipa.jpg" width={104} height={105} className="rounded mx-auto d-block logo_undipa" />
                    <p className="card-text text-center mb-0 mt-4">Selamat datang di</p>
                    <p className="card-text text-center mb-0">Sistem Informasi Akademik</p>
                    <h1 className="card-title text-center mb-2 mt-1">UNIVERSITAS DIPA MAKASSAR</h1>
                    <div className="card-text mt-2">
                        <form>
                            <div className="mb-3">
                                <div className="input-group flex-nowrap">
                                    <input type="text" className="form-control" placeholder="NIM/Stambuk" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    <span className="input-group-text" id="addon-wrapping">
                                        <Image src="/icon/stambuk.svg" width={19} height={21} />
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="input-group flex-nowrap">
                                    <input type="text" className="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping"/>
                                    <span className="input-group-text" id="addon-wrapping">
                                        <Image src="/icon/eye-slash.svg" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Status</option>
                                    <option value="1">Mahasiswa</option>
                                    <option value="2">Dosen</option>
                                  </select>
                            </div>
                            <div className="mb-3 form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tetap login</label>
                                </div>
                                <p>Lupa <span>Password?</span></p>
                            </div>
                            <div className="d-grid gap-2">
                                <Link href="/homepage">
                                    <button className="btn btn-primary" type="button">Login</button>
                                </Link>
                              </div>
                          </form>
                    </div>
                </div>
            </div>
        </div>
        </Layout>  
  )
}

