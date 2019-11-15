import Hello, { HelloProps } from "../../components/hello/Hello";
import { connect } from "react-redux";
import { AppStore } from "..";
import React from "react";

class HelloContainer extends React.Component<HelloProps> {

    render() {
        return <Hello enthusiasm={this.props.enthusiasm} />
    }
}

export function mapStateToProps(store: AppStore) {
    return {
        enthusiasm: store.enthusiasm.enthusiasm
    }
}

export default connect(mapStateToProps)(HelloContainer);