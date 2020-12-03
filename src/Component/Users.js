import React, {Component} from 'react';

class Users extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                <h3>
                    {user.name}-{user.age}-{user.status.toString()}
                </h3>

            </div>
        );
    }
}
export default Users;