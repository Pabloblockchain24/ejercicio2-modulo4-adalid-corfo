import { useContext } from "react"
import { DataContext } from "../context/DataContext";
import DoctorCardWithModal from "./DoctorCardWithModal"; 

function DoctorsList() {
    const { doctors } = useContext(DataContext);

    return (
        <div>
            <h3>Nuestro equipo médico</h3>
            <div className="doctors__list">
                {doctors.length > 0 ? (
                    doctors.map((doctor, index) => (
                        <DoctorCardWithModal key={index} {...doctor} />
                    ))
                ) : (
                    <p>Cargando doctores...</p>
                )}
            </div>
        </div>
    )
}

export default DoctorsList


