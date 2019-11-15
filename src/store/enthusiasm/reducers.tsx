import { EnthusiasmState, EnthusiasmActions, INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, LANGUAGE_NAME_CHANGE } from "./types";

const initialState: EnthusiasmState = {
    enthusiasm: {
        languageName: 'javascript',
        enthusiasmLevel: 1
    }
}

export function enthusiasmReducer(
    state = initialState,
    action: EnthusiasmActions
): EnthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM: 
        return {
            enthusiasm: {
                ...state.enthusiasm,
                enthusiasmLevel: state.enthusiasm.enthusiasmLevel + 1,
            }
        };
    case DECREMENT_ENTHUSIASM:
        return {
            enthusiasm: {
                ...state.enthusiasm,
                enthusiasmLevel: state.enthusiasm.enthusiasmLevel - 1,
            }
        }
    case LANGUAGE_NAME_CHANGE:
        return {
            enthusiasm: {
                ...state.enthusiasm,
                languageName: action.payload,
            }
        }
    default:
        return state;
  }
}