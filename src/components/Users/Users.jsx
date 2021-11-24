import React from 'react';
import styles from './users.module.css'
import * as axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            
        props.setUsers();
        });

};


    return <div>
        {
       props.users.map(u => <div key={u.id}>
       <div>
           <div>
               <img src={u.photoUrl} className={styles.userPhoto} />
           </div>
           <div>
            {u.followed
             ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
             : <button onClick={() => {props.follow(u.id)}}>Follow</button>}   
           </div>
       </div>
       <div>
           <div>
               <div>{u.fullName}</div>
               <div>{u.status}</div>
           </div>
           <div>
               <div>{u.location.city}</div>
               <div>{u.location.country}</div>
           </div>
       </div>
       </div>)
        }
    </div>
    
};

export default Users;