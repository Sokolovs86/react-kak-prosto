const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    { id: 1, followed: false, fullName: "Dmitri D.", status: "I'm boss", location: {city: "Minsk", country: "Belarus"} },
    { id: 2, followed: true, fullName: "Elena M.", status: "I'm the best", location: {city: "Moscow", country: "Russia"}},
    { id: 3, followed: false,  fullName: "Isabella F.", status: "I'm cool", location: {city: "Toronto", country: "Canada"}},
    { id: 4, followed: true, fullName: "Peter G.", status: "I'm hungry", location: {city: "Oslo", country: "Sweden"}},
  ],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
          return {...state, users: action.users}
        }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
