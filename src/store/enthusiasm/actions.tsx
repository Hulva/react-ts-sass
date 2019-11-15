import { IncrementEnthusiasmAction, LanguageNameChangeAction, INCREMENT_ENTHUSIASM, DecrementEnthusiasmAction, DECREMENT_ENTHUSIASM, LANGUAGE_NAME_CHANGE } from "./types";

export function increseEnthusiasm(): IncrementEnthusiasmAction {
    return {
        type: INCREMENT_ENTHUSIASM,
    };
}

export function decreseEnthusiasm(): DecrementEnthusiasmAction {
    return {
        type: DECREMENT_ENTHUSIASM,
    };
}

export function languageNameChange(languageName: string): LanguageNameChangeAction {
    return {
        type: LANGUAGE_NAME_CHANGE,
        payload: languageName
    }
}