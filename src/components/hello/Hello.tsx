import * as React from 'react';
import './Hello.scss';
import store from '../../store';
import { decreseEnthusiasm, increseEnthusiasm, languageNameChange } from '../../store/enthusiasm/actions';
import { Enthusiasm } from '../../store/enthusiasm/types';

export interface HelloProps {
    enthusiasm: Enthusiasm;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello(props: HelloProps) {
    if (props.enthusiasm.enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiatic. :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {props.enthusiasm.languageName + getExcelamationMarks(props.enthusiasm.enthusiasmLevel)}
            </div>
            <div>
                languageName: <input type="text" name="languageName" id="languageName" value={props.enthusiasm.languageName} onChange={(value) => store.dispatch(languageNameChange(value.target.value))}/>
            </div>
            <div>
                <button onClick={() => store.dispatch(decreseEnthusiasm())}>-</button>
                <button onClick={() => store.dispatch(increseEnthusiasm())}>+</button>
            </div>
        </div>
    );
}

export default Hello;

function getExcelamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}