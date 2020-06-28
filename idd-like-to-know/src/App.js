import React from 'react';
import MessagingPane from './components/MessagingPane'
import face from './images/face.svg';
import add from './images/add.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="SideBar">
            <img className="face-icon" src={face} alt="face"/>
            <div className="listOfDates">
                <div className="date">6/23</div>
                <div className="date">6/25</div>
                <div className="date">6/26</div>
                <div className="date" style={{color: "#f8f8f8"}}>6/27</div>
                <div className="date">6/28</div>
            </div>
            <img className="add-icon" src={add} alt="add"/>
        </div>
        <div className="MessagingWindow">
            <div className="titlePane">
                <div style={{margin: "1vh", fontWeight: 700, fontSize: "24px"}}>IDD like to talk</div>
                <div style={{margin: "1vh", fontSize: "18px"}}>Share your thoughts below.</div>
            </div>
            <MessagingPane />
            <div className = "titlePane">
                <div style={{margin: "1vh", fontSize: "14px"}}>'IDD like to talk' is a smart diary to help people with IDD feel
                 comfortable discussing potentially uncomfortable situations and empower them to make decisions that make 
                 them feel confortable. We chose the term diary, as we wish for this to be a safe space so speak about how one may feel.</div>
            </div>
        </div>
    </div>
  );
}

export default App;

