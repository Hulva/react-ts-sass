import * as React from 'react';
import './Hello.scss';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiatic. :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExcelamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default Hello;

function getExcelamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}