import Item from "../Item"
import { useRouter } from "next/router"


interface CarouselProps{
    // activeMenu: string,
    activePage: "/homepage" | "/jadwal-kuliah" | "/daftar-nilai",
}

export default function Carousel( props: CarouselProps ) {
    // const { activeMenu } = props;
    const router = useRouter()
    const activePage  = router.pathname
    console.log(router.pathname)
  return (
    <section className="container ">
        <div className="carousel d-flex justify-content-evenly align-items-strech ps-5 pe-5" >
            <Item active={activePage === "/homepage"} href="/homepage" item="homepage" category="Home" />
            <Item active={activePage === "/jadwal-kuliah"} href="/jadwal-kuliah" item="jadwal-kuliah" category="Jadwal Kuliah" />
            <Item active={activePage === "/daftar-nilai"} href="/daftar-nilai" item="daftar-nilai" category="Daftar Nilai Semester" />
            <Item href="/error" item="transkrip" category="Transkrip" />
            <Item href="/error" item="krs" category="KRS" />
            <Item href="/error" item="jadwal-sp" category="Jadwal SP" />
            <Item href="/error" item="aktif-kuliah" category="Aktif Kuliah/Cuti" />
            <Item href="/error" item="bpp" category="BPP" />
            <Item href="/error" item="dosen" category="Dosen" />
        </div> 
      </section>
  )
}
