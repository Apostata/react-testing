
import { useState, useEffect } from 'react';

let globalState = {};
let actions = {};
let listeners = [];

export const useStore = (shouldListen = true) => {
    // pega apenas o dispatch do useState
    const setState = useState(globalState)[1]; 


    const dispatch = (type, payload = null) => {
        
        const args = payload ? [globalState, payload] : [globalState]; 
        const newState = actions[type](...args);
        globalState = {...globalState, ...newState};
        for (const listener of listeners){
            listener(globalState);
        }
    }

    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState);
        }

        return () =>{
            if(shouldListen){
                listeners = listeners.filter(listener => listener !== setState);
            }
        }
    },[listeners, shouldListen, setState]);

    return [globalState, dispatch];
};

export const initStore = (initialState, customActions) => {
    globalState = initialState && {...globalState, ...initialState};
    actions     = customActions && {...actions, ...customActions};
}