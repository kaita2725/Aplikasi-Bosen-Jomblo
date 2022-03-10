import React, { useState } from "react";
import NomineeContext, { Nominee } from './NomineeContext';

const Temp: React.FC = props => {
    const [crush, setCrush] = useState<Nominee[]>([]);
    const addNomineeTemp = (id: string, name: string, description: string, gender: string, avatar: string) => {
        const newCrush: Nominee = {
          id: id,
          name: name,
          description: description,
          gender: gender,
          avatar: avatar
        }
        setCrush((currNominee) => { return currNominee.concat(newCrush) })
    };

    const deleteNomineeTemp = (id: string) => {
        for (let i = 0; i < crush.length; i++) {
            if (crush[i].id == id) {
                crush.splice(i, 1);
                break;
            }
        }
    }

    return (
        <NomineeContext.Provider value={{
            crush,
            addNominee: addNomineeTemp,
            deleteNominee: deleteNomineeTemp
        }}>
            {props.children}
        </NomineeContext.Provider>
    );
};
export default Temp;
