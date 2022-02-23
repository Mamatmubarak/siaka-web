import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Link from "next/link";
import Image from "next/image";

export default function JadwalKuliah() {
  return (
    <>
    <Navbar />
    <Carousel activePage="/jadwal-kuliah"/>
    <section className="container jadwal-kuliah">
        <div className="mb-5 text-center judul">
            <h1>JADWAL KULIAH</h1>
            <h4>Semester Ganjil 2021/2022</h4>
        </div>
        <div className="download">
          <div className="fw-bold me-2">Download</div>
          <Link href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}  />
          </Link>
          {/* <a href="#"><img src="./assets/icon/download.svg" alt="download"/></a> */}
        </div>
        <table className="table table-bordered">
            <thead className="table-head">
              <tr>
                  <th scope="col" className="text-center">KODE</th>
                  <th scope="col" className="text-center">NAMA MATA KULIAH</th>
                  <th scope="col" className="text-center">KELAS</th>
                  <th scope="col" className="text-center">HARI</th>
                  <th scope="col" className="text-center">JAM</th>
                  <th scope="col" className="text-center">RNG</th>
                  <th scope="col" className="text-center">DOSEN</th>
                  <th scope="col" className="text-center">MEDIA KULIAH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">T7046-T</td>
                <td>SKRIPSI</td>
                <td className="text-center">7TPGM-A</td>
                <td className="text-center">Senin</td>
                <td className="text-center">07.30-09.10</td>
                <td className="text-center">B303</td>
                <td className="text-center">Sunardi</td>
                <td className="text-center text-primary">Divlearning</td>
              </tr>
              <tr>
                <td className="text-center">T7046-T</td>
                <td>SEMINAR PROPOSAL</td>
                <td className="text-center">7TPGM-A</td>
                <td className="text-center">Senin</td>
                <td className="text-center">07.30-09.10</td>
                <td className="text-center">B303</td>
                <td className="text-center">Sunardi</td>
                <td className="text-center text-primary">Divlearning</td>
              </tr>
              <tr>
                <td className="text-center">T7046-T</td>
                <td>KULIAH KERJA LAPANGAN PLUS</td>
                <td className="text-center">7TPGM-A</td>
                <td className="text-center">Senin</td>
                <td className="text-center">07.30-09.10</td>
                <td className="text-center">B303</td>
                <td className="text-center">Sunardi</td>
                <td className="text-center text-primary">Divlearning</td>
              </tr>
              <tr>
                <td className="text-center">T7046-T</td>
                <td>PEMROGRAMAN GAME</td>
                <td className="text-center">7TPGM-A</td>
                <td className="text-center">Senin</td>
                <td className="text-center">07.30-09.10</td>
                <td className="text-center">B303</td>
                <td className="text-center">Sunardi</td>
                <td className="text-center text-primary">Divlearning</td>
              </tr>
              
              <tr>
                  <th colSpan={8}>Total: 12 SKS</th>
              </tr>
            </tbody>
          </table>
      </section>
      </>
  )
}
