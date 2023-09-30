import React, { useState } from 'react';

function TogglePage() {
  const [showEmailPasswordForm, setShowEmailPasswordForm] = useState(true);
  const [showEmailOTPForm, setShowEmailOTPForm] = useState(false);

  const handleEmailPasswordFormToggle = () => {
    setShowEmailPasswordForm(true);
    setShowEmailOTPForm(false);
  };

  const handleEmailOTPFormToggle = () => {
    setShowEmailPasswordForm(false);
    setShowEmailOTPForm(true);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showEmailPasswordForm}
            onChange={handleEmailPasswordFormToggle}
          />
          Login with Email and Password
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showEmailOTPForm}
            onChange={handleEmailOTPFormToggle}
          />
          Login with Email and OTP
        </label>
      </div>

      <div className="forms-container">
        {showEmailPasswordForm && (
          <LoginFormWithEmailPassword />
        )}

        {showEmailOTPForm && (
          <LoginFormWithEmailOTP />
        )}
      </div>
    </div>
  );
}

function LoginFormWithEmailPassword() {
  return (
    <form>
      <h2>Login with Email and Password</h2>
      {/* Email and Password fields */}
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {/* Additional form fields and submit button */}
    </form>
  );
}

function LoginFormWithEmailOTP() {
  return (
    <form>
      <h2>Login with Email and OTP</h2>
      {/* Email and OTP fields */}
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="OTP" />
      {/* Additional form fields and submit button */}
    </form>
  );
}

export default TogglePage;
