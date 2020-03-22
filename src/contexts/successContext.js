import React from 'react';

const successContext = React.createContext();
/**
 * Hook que serve apennas para garantir que o context esteja dentro de um provider retornando-o
 * neste casso o provider é o SuccessProvider, que trará um array = [success, setSuccess]
 */
const useSuccess = ()=>{
    const contex = React.useContext(successContext); // context só será pego se tiver um provider
    if(!contex) throw new Error('useSuccess must be used within a SuccessProvider!');
    return contex;
};
// useSuccess serve apennas para garantir que o context esteja dentro de um provider;
/**
 * Função que retorna um provider de successContent, permite acesso do estado e o setState
 * que pode ser chamado em qualquer componente dentro do provider
 * @function SuccessProvider
 * @param {any} props 
 * @returns {JSX.Element}
 */
const SuccessProvider = props =>{
    const [success, setSuccess] = React.useState(false);
    const value = React.useMemo(()=>[success, setSuccess],[success]);
    // memoriza success e setSucces e só recalcula quando success mudar.
    // genial pois se algo setar o mesmo estado 2 vezes seguidas ele não atualizará 
    // o component
    return <successContext.Provider value={value} {...props} />;
};


export default {
    useSuccess,
    SuccessProvider
};