import React from 'react';
import { shallow, mount } from 'enzyme';
import successContext from './successContext';

const FakeComponent = () =>{
    const [success, setSuccess] =successContext.useSuccess();
    console.log(success);
    setSuccess(true);
    return <div/>;
};

describe('successContext', ()=>{
    it('Should throw error when useSuccess is not wrapped in an SuccessProvider', ()=>{
        expect(()=>shallow(<FakeComponent/>))
        .toThrow('useSuccess must be used within a SuccessProvider!')
    });
    it('Should\'t throw error when useSuccess is wrapped in an SuccessProvider', ()=>{
        expect(()=>mount(
            <successContext.SuccessProvider>
                <FakeComponent/>
            </successContext.SuccessProvider>
        )).not.toThrow('useSuccess must be used within a SuccessProvider!')
    });
});