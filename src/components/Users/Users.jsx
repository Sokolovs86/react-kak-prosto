import React from 'react';
import styles from './users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {

  componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
          this.props.setUsers(response.data.items);
      });
  }
  
    render() {

      let pagesCount = this.props.totalUsersCount / this.props.pageSize;

        return (
          <div>
            <div>
                
               <span>1</span>
               <span>2</span>
               <span className={styles.selectedPage}>3</span>
               <span>4</span>
               <span>5</span>
            </div>
            {
                this.props.users.map((u) => (
              <div key={u.id}>
                <div>
                  <div>
                    <img
                      src={u.photos.small != null ? u.photos.small : userPhoto}
                      className={styles.userPhoto}
                    />
                  </div>
                  <div>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                  </div>
                  <div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
}

export default Users;