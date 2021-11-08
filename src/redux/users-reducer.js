const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    { id: 1, followed: false, fullName: "Dmitri D.", status: "I'm boss", location: {city: "Minsk", country: "Belarus"} },
    { id: 2, followed: true, fullName: "Elena M.", status: "I'm the best", location: {city: "Moscow", country: "Russia"}},
    { id: 3, followed: false,  fullName: "Isabella F.", status: "I'm cool", location: {city: "Toronto", country: "Canada"}},
    { id: 4, followed: true, fullName: "Peter G.", status: "I'm hungry", location: {city: "Oslo", country: "Sweden"}},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export const followAC = () => ({ type: FOLLOW });
export const unFollowAC = () => ({type: UNFOLLOW, });

export default usersReducer;
