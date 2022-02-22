import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Image from "next/image"

export default function Homepage() {
  return (
    <>
    <Navbar />
    <Carousel />
    <section>
      <div className="card container mt-5">
        <div className="card-body">
          <h5 className="card-title">Untuk Diperhatikan</h5>
          <ul className="list-group list-group-numbered mt-3">
            <li>Download KRS Sesuai Program Studi sebagai panduan input Matakuliah, dan perhatikan Transkrip Nilai Sementara agar tidak terjadi kesalahan program mata kuliah.</li>
            <li>Untuk Program Strata 1 (S1) Mahasiswa semester 2 & 4 tidak perlu Input KRS karena akan diposting secara otomatis sesuai dengan paketnya jika telah menyelesaikan pembayaran BPP</li>
            <li>Untuk Program Diploma 3 (D3) Mahasiswa semester 2 tidak perlu Input KRS karena akan diposting secara otomatis sesuai dengan paketnya jika telah menyelesaikan pembayaran BPP</li>
            <li>Semua Mahasiswa Pindahan untuk Semua Angkatan/Semester Wajib Input KRS</li>
            <li>Batas Input KRS Reguler s.d tanggal 28 Februari 2022</li>
            <li>Bagi Mahasiswa yang memprogramkan KKLP, maksimum matakuliah diperbolehkan 4 di luar SKIPSI dan SEMINAR PROPOSAL.</li>            
            <li>Perkuliahan Semester GENAP2122 dimulai pada tanggal 07 Maret 2022</li>
            <li>Perkuliahan Semester GENAP2122 dilaksanakan dengan mekanisme dalam ruangan (OFFLINE/LURING)</li>
            <li>Mahasiswa normal semester 1,2,3,4 matakuliah yang disajikan adalah sama baik kurikulum REGULER maupun kurikulum MERDEKA (percabangan kurikulum mulai semester 5).</li>
            <li>Untuk Mahasiswa normal Semester 5 bisa mengambil/Mengikuti Kurikulum Reguler atau Kurikulum Merdeka. Jika Seorang Mahasiswa sudah menetukan pilihan Kurikulum (Reguler/Merdeka), maka semester 6,7,8 juga harus memprogramkan KRS kurikulum Reguler/Merdeka (tidak bisa silang). </li>
            <li>Mahasiswa yang memilih kurikulum merdeka harus disetujui oleh Ka. Prodi Masing-masing</li>
            <li>Pada kurikulum Merdeka Semester 5 disajikan matakuliah lintas Prodi dalam Institusi sendiri, pada semester 6,7 disajikan matakuliah lintas PT atau Magang 6 bln, Penelitian, Pengabdian Masyarakat, Proyek Wirausaha, dan Proyek Kemanusiaan.</li>
          </ul>
        </div>
      </div>
      <div className="card container mt-3 mb-5">
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center mb-0 pt-2 pb-2">DOWNLOAD KRS DIBAWAH INI SEBAGAI PANDUAN</h5>
        </div>
        <ol className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start pt-3 pb-3">
            <div className="ms-2 me-auto">
              <div className="fw-medium">KRS Sistem Informasi</div>
            </div>
            <div className="d-flex">
              <div className="fw-bold me-2">Download</div>
              <a href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}/>
              </a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start pt-3 pb-3">
            <div className="ms-2 me-auto">
              <div className="fw-medium">KRS Teknik Informatika</div>
            </div>
            <div className="d-flex">
              <div className="fw-bold me-2">Download</div>
              <a href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}/>
              </a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start pt-3 pb-3">
            <div className="ms-2 me-auto">
              <div className="fw-medium">KRS Rekayasa Perangkat Lunak</div>
            </div>
            <div className="d-flex">
              <div className="fw-bold me-2">Download</div>
              <a href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}/>
              </a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start pt-3 pb-3">
            <div className="ms-2 me-auto">
              <div className="fw-medium">KRS Kewirausahaan</div>
            </div>
            <div className="d-flex">
              <div className="fw-bold me-2">Download</div>
              <a href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}/>
              </a>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start pt-3 pb-3">
            <div className="ms-2 me-auto">
              <div className="fw-medium">KRS BD</div>
            </div>
            <div className="d-flex">
              <div className="fw-bold me-2">Download</div>
              <a href="#">
                <Image src="/icon/download.svg" alt="download" width={22} height={22}/>
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
    </>
  )
}
