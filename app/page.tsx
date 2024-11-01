import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowPekerjaan from "./components/rowPekerjaan";
import Skills from "./components/Skills";
import "./riezz-style.css";
import WarnaFavorit from "./components/WarnaFavorit";
import ContactForm from "./components/ContactForm";
import GalleryHobbies from "./components/Gallery";

export default function Gallery() {
  return (
    <section>
      <WarnaFavorit />
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <GalleryHobbies />
      <ContactForm />
    </section>
  );
}