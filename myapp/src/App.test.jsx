import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  /*<div id="Bottom_Box">
        <div id="First_Bottom_Box" className="Buttom_Box_Group">
          <div className="First_Buttom_Box_Group">
            <img src={FirstPicture} alt="1st Element"/>
              <div className="Buttom_Box_Content">
                <p>2000 грн</p>
                <a href="#">Заказать</a>
              </div>
          </div>
          <div className="Second_Buttom_Box_Group">
            <img src={SecondPicture} alt="2nd Element"/>
              <div className="Buttom_Box_Content">
                <p>2000 грн</p>
                <a href="#">Заказать</a>
              </div>
          </div>
        </div>
        <div id="Second_Bottom_Box" className="Buttom_Box_Group">
          <div className="First_Buttom_Box_Group">
            <img src={ThirdPicture} alt="3rd Element"/>
              <div className="Buttom_Box_Content">
                <p>2000 грн</p>
                <a href="#">Заказать</a>
              </div>
          </div>
          <div className="Second_Buttom_Box_Group">
            <img src={SecondPicture} alt="4th Element"/>
              <div className="Buttom_Box_Content">
                <p>2000 грн</p>
                <a href="#">Заказать</a>
              </div>
          </div>
        </div>
      </div> */
});
