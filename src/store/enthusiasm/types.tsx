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

export const LANGUAGE_NAME_CHANGE = 'LANGUAGE_NAME_CHANGE';
export type LANGUAGE_NAME_CHANGE = typeof LANGUAGE_NAME_CHANGE;

export interface IncrementEnthusiasmAction {
    type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasmAction {
    type: DECREMENT_ENTHUSIASM;
}

export interface LanguageNameChangeAction {
    type: LANGUAGE_NAME_CHANGE;
    payload: string; // languageName
}

export type EnthusiasmActions = IncrementEnthusiasmAction | DecrementEnthusiasmAction | LanguageNameChangeAction;
