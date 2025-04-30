import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import styles from './Tabs.module.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Task 1');

  return (
    <div className={styles.container}>
      <div className={styles.tabButtons}>
        <button
          className={activeTab === 'Task 1' ? styles.active : ''}
          onClick={() => setActiveTab('Task 1')}
        >
          Task 1
        </button>
        <button
          className={activeTab === 'Task 2' ? styles.active : ''}
          onClick={() => setActiveTab('Task 2')}
        >
          Task 2
        </button>
        <button
          className={activeTab === 'Task 3' ? styles.active : ''}
          onClick={() => setActiveTab('Task 3')}
        >
          Task 3
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'Task 1' && (
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        )}

        {activeTab === 'Task 2' && <FriendList friends={friends} />}

        {activeTab === 'Task 3' && <TransactionHistory items={transactions} />}
      </div>
    </div>
  );
};

export default Tabs;
