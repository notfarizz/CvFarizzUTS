import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-gray-600 text-2xl font-bold mb-4">Personal Info</h2>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <p className="text-lg"><strong>Name:</strong> Ahmad Fauzan Alfarizi</p>
                <p className="text-lg"><strong>TTL:</strong> Garut, 25 Februari 2004</p>
                <p className="text-lg"><strong>Gender:</strong> Laki-laki</p>
                <p className="text-lg"><strong>Tinggi Badan:</strong> 169 cm</p>
                <p className="text-lg"><strong>Berat Badan:</strong> 69 kg</p>
                <p className="text-lg"><strong>Status Pernikahan:</strong> Resmi Menikah Dengan Hanabi Scarlet</p>
                <p className="text-lg"><strong>Whatsapp:</strong> 0896-5914-4821</p>
                <p className="text-lg"><strong>Email:</strong> farisgc1234549@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
