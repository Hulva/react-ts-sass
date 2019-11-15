import * as React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello';

enzyme.configure({ adapter: new Adapter() });

it('renders correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello enthusiasm={{languageName: 'Luva', enthusiasmLevel: 0}} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Luva!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello enthusiasm={{languageName: 'Daniel', enthusiasmLevel: 1}} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});
  
it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello enthusiasm={{languageName: 'Daniel', enthusiasmLevel: 5}} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});
  
it('throws when the enthusiasm level is 0', () => {
    expect(() => {
      enzyme.shallow(<Hello enthusiasm={{languageName: 'Daniel', enthusiasmLevel: 0}} />);
    }).toThrow();
});
  
it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      enzyme.shallow(<Hello enthusiasm={{languageName: 'Daniel', enthusiasmLevel: -1}} />);
    }).toThrow();
});