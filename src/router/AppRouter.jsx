import React, { Fragment } from 'react'
import{ Routes, Route} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CommonPage from '../pages/CommonPage';
import Constitution from '../pages/Constitution';
import ExecutiveCommitteePage from '../pages/ExecutiveCommitteePage';
import HomePage from '../pages/HomePage';
import MembershipDirectoryPage from '../pages/MembershipDirectoryPage';
import MissionPage from '../pages/MissionPage';
import NotFoundPage from '../pages/NotFoundPage';
import PastExicutiveCommiteePage from '../pages/PastExicutiveCommiteePage';
import PaymentPage from '../pages/PaymentPage';
import PaymentDonatePage from '../pages/PaymentDonatePage';
import PresidentMessagePage from '../pages/PresidentMessagePage';

const AppRouter = () => {
  return (
    <Fragment>
      <Routes >
          <Route path='*' element={<NotFoundPage/>} />
          <Route exact path="/" element={<HomePage/>}/> 
          <Route exact path="common-page" element={<CommonPage/>}/> 
          <Route exact path="about" element={<AboutPage/>}/> 
          <Route exact path="paypal-payment" element={<PaymentPage/>}/> 
          <Route exact path="paypal-donate" element={<PaymentDonatePage/>}/> 
          <Route exact path="mission" element={<MissionPage/>}/> 
          <Route exact path="constitution" element={<Constitution/>}/>  
          <Route exact path="president-message" element={<PresidentMessagePage/>}/>  
          <Route exact path="past-exicutive-commitee" element={<PastExicutiveCommiteePage/>}/>  
          <Route exact path="membership-directory" element={<MembershipDirectoryPage/>}/>  
          <Route exact path="executive-committee-page" element={<ExecutiveCommitteePage />}/>  
      </Routes>
    </Fragment>
  )
}

export default AppRouter