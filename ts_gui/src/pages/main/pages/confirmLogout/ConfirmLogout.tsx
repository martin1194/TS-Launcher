import style from "./ConfirmLogout.module.scss"

export default function ConfirmLogout(){
    return(
        <div>
            <div>
                <h2>確定登出?</h2>
                    <ButtonFocus
                            content={"Sure"}
                            themeColor="green"
                            className={`${styles.button} ${styles.secondButton}`}
                            onClick={() => {
                                navigate("/Logout");
                            }}
                    />
                    ButtonFocus
                            content={"No"}
                            themeColor="red"
                            className={`}
                            onClick={() => {
                                navigate("/welcom");
                            }}
                    />
            </div>
        </div>
    )

}




/**
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // 引用樣式文件

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    // 執行登出邏輯
    console.log('Logged out');
    setModalOpen(false);
  };

  const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to logout?</p>
          <div className="modal-actions">
            <button className="button cancel-button" onClick={onClose}>Cancel</button>
            <button className="button confirm-button" onClick={onConfirm}>Logout</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <button className="button" onClick={() => setModalOpen(true)}>Logout</button>
      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
 */