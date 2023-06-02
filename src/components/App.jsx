import { Profile } from '../components/Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from '../components/Stats/Statistics';
import statistics from './Stats/data.json';

import { FriendList } from '../components/FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
