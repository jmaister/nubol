import React, { Component } from 'react';
import Axios from "axios";


class FolderView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoaded: false
         }
    }

    componentDidMount() {
        Axios.get('/api/dir?path=' + this.props.path)
            .then(result => {
                this.setState({
                    folder: result,
                    isLoaded: true
                });
            })
    }

    render() {
        const { isLoaded, folder } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div>Loaded <b>{this.props.path}</b>
                <div>{folder}</div>
            </div>;
        }
        
    }
}
 
FolderView.defaultProps = {
    path: '/'
};


export default FolderView;