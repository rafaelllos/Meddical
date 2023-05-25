import Headling from '../components/Headling/Headling.jsx';
import Doctors from '../components/Doctors/Doctors.jsx';

import { doctor_card } from '../components/helper.jsx';

function Doctorspage() {
    return (  
        <>
            <div className="doctorsPage" style={{ paddingTop: '64px' }}>
                <Headling suptitle="Надежная забота" title="Наши врачи" />

                <div className="doctors">
                    { doctor_card?.map((item) => 
                        <Doctors item={item} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Doctorspage;