import image1 from '../assets/DirectorSir.jpeg';
import image2 from '../assets/dhanjay sir.jpg';
import image3 from '../assets/kavitamam.png';
import image4 from '../assets/akdewedi.jpg';
import image5 from '../assets/vishwajeet-Photoroom.png';
import image6 from '../assets/vssrivastava-Photoroom.png';
import image7 from '../assets/komal-1.jpeg';
import image8 from '../assets/dhawan sir.png';
import image9 from '../assets/parthamsir.jpg';
import image10 from '../assets/nagendra sir-Photoroom.png';

const teamMembers = [
    { name: "Prof. K.K Pant", title: "Director, IIT Roorkee Phd,Chemical Engineering", description: "Patron and Advisor", imageUrl: image1 },
    { name: "Prof. Dhananjay Singh", title: "Member Secretary, Indian Council of Social Science Research", description: "Esteemed Guest", imageUrl: image2 },
    { name: "Kavita Dassan", title: "Senior Vice President, Suzlon Group", description: "Esteemed Guest", imageUrl: image3 },
    { name: "Prof. Akshay Dvivedi", title: "Convenor", description: "Department of Mechanical & Industrial Engineering PhD, Advanced Manufacturing Processes", imageUrl: image4 },
    { name: "Dr. Vishwajeet, Co-Convenor", description: "Ramanujan Faculty, Department of Mechanical & Industrial Engineering: Thermochemical Conversion of Waste to Energy", imageUrl: image5 },
    { name: "Prof. V.C Srivastava", title: "Department of Chemical Engineering Environmental Engineering, Energy & Fuels", imageUrl: image6 },
    { name: "Prof. Komal Tripathi", title: "Department of Chemical Engineering, Chemicals; Biomass to Green Hydrogen/Syngas", imageUrl: image7 },
    { name: "Prof. Nikhil Dhawan", title: "Department of Metallurgical and Materials Engineering", imageUrl: image8 },
    { name: "Prof. Pratham Arora", title: "Department of Hydro and Renewable Energy", imageUrl: image9 },
    { name: "Prof. Nagendra Kumar", title: "Department of Humanities and Social Sciences", imageUrl: image10 },
];

export default function TeamSection() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 p-8 mt-8">
            <div className="max-w-6xl mx-auto">
                {/* First Row: Align Kavita Dassan between the first two members */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                    <MemberCard member={teamMembers[0]} /> {/* Prof. K.K Pant */}
                    <MemberCard member={teamMembers[2]} /> {/* Kavita Dassan */}
                    <MemberCard member={teamMembers[1]} /> {/* Prof. Dhananjay Singh */}
                </div>

                {/* Second Row */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                    {teamMembers.slice(3, 7).map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>

                {/* Third Row */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {teamMembers.slice(7, 10).map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function MemberCard({ member }) {
    const description = member.description || '';
    const isEsteemedGuest = description.includes("Esteemed Guest");

    return (
        <div className="bg-white rounded-lg shadow-lg w-full sm:w-72 min-h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-50 object-cover transition-opacity duration-300"
            />
            <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                <p className="font-bold text-base text-gray-600 mt-2">{member.title}</p>
                <p className={`font-bold text-sm mt-2 ${isEsteemedGuest ? 'text-blue-600' : 'text-gray-600'}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}
