export interface Enthusiasm {
    languageName: string;
    enthusiasmLevel: number;
}

export interface EnthusiasmState {
    enthusiasm: Enthusiasm
}

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export interface IncrementEnthusiasmAction {
    type: INCREMENT_ENTHUSIASM;
    payload: string; // languageName
}

export interface DecrementEnthusiasmAction {
    type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmActions = IncrementEnthusiasmAction | DecrementEnthusiasmAction;
