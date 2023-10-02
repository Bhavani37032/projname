import React, { useState, useRef } from "react";
import Box from '@mui/material/Box';

const OtpAuth = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.keyCode === 8 && index > 0 && !otp[index]) {
            // Backspace key pressed, and the current input is empty
            // Clear the previous input field and move focus to it
            setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div className="row">
                    <div className="col text-center">
                        <h2>Welcome to the page!!!</h2>
                        <p>Enter the OTP sent to you to verify your identity</p>

                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onFocus={(e) => e.target.select()}
                                    ref={inputRefs[index]}
                                />
                            );
                        })}

                        <p>OTP Entered - {otp.join("")}</p>
                        <p>
                            <button
                                className="btn btn-secondary mr-2"
                                onClick={() => setOtp([...otp.map((v) => "")])}
                                style={{ marginRight: '10px' }}
                            >
                                Clear
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    alert("Entered OTP is " + otp.join(""))
                                }
                            >
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default OtpAuth;
