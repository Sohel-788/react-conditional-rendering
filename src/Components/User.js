import React from 'react';
const User = (props) => {
    const familiar =props.familiar
    let greetings;
    if (familiar) {
        greetings=<p>Welcome, My Dear Friend!</p>;
    }else{
        greetings=<p>Who the hell are you?</p>
    }
    // shortcut way of (if-else) by tarnery operator
    const food=familiar? <p>I will buy food for you.</p>
                :<p>Lets eat by ourselves.</p>

    return (
        <div className='user-container'>
          <div style={{marginTop:'30px'}}>
          <h2>Greetings</h2>
          {greetings}
          </div>
          <div style={{marginTop:'30px'}}>
              <h2>Food</h2>
              {food}
          </div>
          <div style={{marginTop:'30px'}}>
              {/* inline condition */}
              <h2>Connection</h2>
              {
                  familiar? <p>Yes, You can connect me as your social friend.</p>
                          : <p>No, You can't connect me as your social friend.</p>  
              }
          </div>
          <div style={{marginTop:'30px'}}>
              <h2>Add</h2>
              {/* logical condition */}
              {
                  familiar && <p>Yes, I will add you as my fb friend.</p>
              }
          </div>
        </div>
    );
};

export default User;