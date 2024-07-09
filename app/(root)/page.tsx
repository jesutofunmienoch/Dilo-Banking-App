import Dashboard from '@/components/Dashboard';
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'


const Home = async () => {
  const loggedIn = await getLoggedInUser();
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];
 

  return (
    <section className='home'>
      <div className="home-content">
        <div className="home-header">
          <header>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.name || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />

         <TotalBalanceBox  
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={7800}
          />
          
          </header>
        </div>
        
      </div>
      <RightSideBar
           user={loggedIn}
           transactions={[]}
           banks={[{}, {}]}
          />
    </section>
  )
}

export default Home