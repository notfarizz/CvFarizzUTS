import RowPekerjaan from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-gray-600 text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2021" instansi="Jasmin Herbal" sebagai="Bagian Packaging" />
            <RowPekerjaan tahun="2021" instansi="Jasmin Herbal" sebagai="Bagian Packaging" />
            <RowPekerjaan tahun="2021" instansi="Jasmin Herbal" sebagai="Bagian Packaging" />
            <RowPekerjaan tahun="2021" instansi="Jasmin Herbal" sebagai="Bagian Packaging" />
        </div>
    );
}