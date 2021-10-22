import React from 'react';
import ss from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
        <div className={ss.dialog}>
          Andrei
        </div>
        <div className={ss.dialog}>
          Dima
        </div>
        <div className={ss.dialog}>
          Artem
        </div>
        <div className={ss.dialog}>
          Lev
        </div>
        <div className={ss.dialog}>
          Petr
        </div>
      </div>
    <div className={ss.messages}>
      <div className={ss.message}>Hi</div>
      <div className={ss.message}>Hi Hi</div>
      <div className={ss.message}>Hello</div>
      <div className={ss.message}>Hello pa</div>
      <div className={ss.message}>Hello ma</div>
    </div>
    </div>
  );
};

export default Dialogs;