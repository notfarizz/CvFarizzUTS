import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-gray-600 text-2x1">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="MI Cibeusi" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Jatinangor" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMK" sekolah="SMK Padjadjaran" tahun="2019 - 2022" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Universitas Ma'soem" tahun="2022 - 2026" />
        </div>
    );
}