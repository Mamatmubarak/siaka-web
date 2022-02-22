
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

export default function DaftarNilai() {
  return (
    <>
    <Navbar />
    <Carousel />
    <section className="container daftar-nilai">
        <div className="mb-5 text-center judul">
            <h1>DAFTAR NILAI SEMESTER</h1>
            <h4>Semester Ganjil 2021/2022</h4>
        </div>
        <div>
          <div className="sub-judul">
            <div className="semester">
                <p>Pilih Semester</p>
                <select className="form-select mb-4" aria-label="Default select example">
                    <option selected>Semester 1</option>
                    <option value="1">Semester 2</option>
                    <option value="2">Semester 3</option>
                    <option value="3">Semester 4</option>
                    <option value="3">Semester 5</option>
                    <option value="3">Semester 6</option>
                    <option value="3">Semester 7</option>
                  </select>
            </div>
            <div className="download">
              <div className="fw-bold me-2">Download</div>
              <a href="#"><img src="/icon/download.svg" alt="download"/></a>
            </div>
          </div>
            <div>
                <table className="table table-bordered">
                    <thead className="table-head">
                      <tr>
                          <th scope="col" className="text-center">KODE</th>
                          <th scope="col" className="text-center">NAMA MATA KULIAH</th>
                          <th scope="col" className="text-center">SKS</th>
                          <th scope="col" className="text-center">NILAI</th>
                          <th scope="col" className="text-center">BOBOT</th>
                          <th scope="col" className="text-center">BOBOT SKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">T7046-T</td>
                        <td>SKRIPSI</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="text-center">T7046-T</td>
                        <td>SEMINAR PROPOSAL</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="text-center">T7046-T</td>
                        <td>KULIAH KERJA LAPANGAN PLUS</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="text-center">T7046-T</td>
                        <td>PEMROGRAMAN GAME</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      
                      <tr>
                          <th colSpan={2} className="text-center">TOTAL</th>
                          <td></td>
                          <td colSpan={2}></td>
                          <td></td>
                      </tr>
                      <tr>
                        <th colSpan={6} className="text-center">IPS:</th>
                    </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div className="jumlah-sks">
            <p>Jumlah SKS diprogramkan : 12</p>
            <p>Jumlah SKS dilulusi : 0</p>
            <p>Jumlah SKS tidak lulus : 12</p>
        </div>
    </section>
    </>
  )
}
