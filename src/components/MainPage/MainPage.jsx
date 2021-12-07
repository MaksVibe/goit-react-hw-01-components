import data from "../../assets/data.json";
import friends from "../../assets/friends.json";
import user from "../../assets/user.json";
import transactions from "../../assets/transactions.json";

import Profile from "../profile/profile";
import Statistics from "../Statistics/Statistics";
import FriendsList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const MainPage = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default MainPage;
