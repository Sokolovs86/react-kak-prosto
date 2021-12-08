import React from 'react';
import ss from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'YOOOOOO',
    }

    activateEditMode = () => {
        //debugger;
        ///console.log ('this:', this);
        this.setState({
            editMode: true,
        });
       // console.log (this.state.editMode);
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
    };

    render () {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus = {true} onBlur = {this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    };
};

export default ProfileStatus;
