import React from 'react'
import styles from '../styles/WarningModal.module.css';

type WarningModalProps = {
 setOpenState: (_:boolean) => void;
}

const WarningModal: React.FC<WarningModalProps> = ({setOpenState}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>WARNING!</h1>
        <h2>This is an example of a site trying to steal your login information.</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>All "login attempts" are recorded and destroyed within 24 hours. You can view the collected information from this <a style={{color: 'blue'}} href='api/getCredentials'>link</a>.</h2>
        <h2>If you accidentally entered information into the form on this page, and your information can be found behind the link above, it is highly recommended to change your password immediately.</h2>
        <h2 style={{color: 'purple'}}>The site is intended for educational purposes only!</h2>
        <p onClick={() => setOpenState(!true)} style={{textAlign: 'center', color: 'blue', cursor: 'pointer'}}>Enter to the scam site</p>
        <a className={styles.exit} href='https://google.com' referrerPolicy='no-referrer'>
          EXIT THE PAGE
        </a>
      </div>
    </div>
  )
}

export default WarningModal
