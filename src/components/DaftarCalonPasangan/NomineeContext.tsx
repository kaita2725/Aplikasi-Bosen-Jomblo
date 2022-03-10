import React from "react";

export interface Nominee {
    id: string,
    name: string,
    description: string,
    gender: string,
    avatar: string
}

interface Context {
    crush: Nominee[];
    addNominee: (id: string, name: string, description: string, gender: string, avatar: string) => void;
    deleteNominee: (id: string) => void;
}

const NomineeContext= React.createContext<Context>({
    crush: [],
    addNominee: () => { },
    deleteNominee: () => { }
});

export default NomineeContext;
