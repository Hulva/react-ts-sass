import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, useDispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return { 
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps() {
    const dispatch = useDispatch();
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm),
        onDecrement: () => dispatch(actions.decrementEnthusiasm),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
