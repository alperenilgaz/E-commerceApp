import React from 'react'

import Footer from '../components/Layout/Footer/Footer'
import Policy from '../components/Layout/Policy/Policy'

const UserDetailPage = () => {
  const user = localStorage.getItem("user")
  return (
    <>
        <Policy/>
        <div className="account-column">
            <h2>Register</h2>
            <form  >
                <div>
                    <label>
                        <span>Username <span className="required">*</span></span>
                        <input required  type="text" name='username' />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email address <span className="required">*</span></span>
                        <input required  type="email" name='email' />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span className="required">*</span></span>
                        <input required  type="password" name='password' />
                    </label>
                </div>
                <div className="privacy-policy-text remember">
                    <p>
                        Your personal data will be used to support your experience throughout this website, to
                        manage access to your account, and for other purposes described in our <a
                            href="#">privacy policy.</a>
                    </p>
                    <button className="btn btn-sm">Register</button>
                </div>

            </form>
        </div>
        <Footer/>
    </>
  )
}

export default UserDetailPage