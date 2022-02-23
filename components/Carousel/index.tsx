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
            <Item active={activePage === "/homepage"} href="/homepage" item="home" category="Home" />
            <Item active={activePage === "/jadwal-kuliah"} href="/jadwal-kuliah" item="jadwal-kuliah" category="Jadwal Kuliah" />
            <Item active={activePage === "/daftar-nilai"} href="/daftar-nilai" item="daftar-nilai" category="Daftar Nilai Semester" />
            <Item item="transkrip" category="Transkrip" />
            <Item item="krs" category="KRS" />
            <Item item="jadwal-sp" category="Jadwal SP" />
            <Item item="aktif-kuliah" category="Aktif Kuliah/Cuti" />
            <Item item="bpp" category="BPP" />
            <Item item="dosen" category="Dosen" />
        </div> 
      </section>
  )
}
