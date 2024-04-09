// import React, { useState } from 'react';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
// import { CgSpinner } from 'react-icons/cg';
// import { Toaster } from 'react-hot-toast';
// import OtpInput from 'react-otp-input';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { auth } from '../firebase';
// //import 'react-otp-input/style.css';

// const App = () => {
//     const [otp, setOtp] = useState("");
//     const [ph, setPh] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [showOTP, setShowOTP] = useState(false);
//     const [user, setUser] = useState(null);
  
//     function onCaptchVerify() {
//       if (!window.recaptchaVerifier) {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           "recaptcha-container",
//           {
//             size: "invisible",
//             callback: (response) => {
//               onSignup();
//             },
//             "expired-callback": () => {},
//           },
//           auth
//         );
//       }
//     }
  
//     function onSignup() {
//       setLoading(true);
//       onCaptchVerify();
  
//       const appVerifier = window.recaptchaVerifier;
  
//       const formatPh = "+" + ph;
  
//       signInWithPhoneNumber(auth, formatPh, appVerifier)
//         .then((confirmationResult) => {
//           window.confirmationResult = confirmationResult;
//           setLoading(false);
//           setShowOTP(true);
//           toast.success("OTP sended successfully!");
//         })
//         .catch((error) => {
//           console.log(error);
//           setLoading(false);
//         });
//     }
  
//     function onOTPVerify() {
//       setLoading(true);
//       window.confirmationResult
//         .confirm(otp)
//         .then(async (res) => {
//           console.log(res);
//           setUser(res.user);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//         });
//     }
//     return (
//         <section className="bg-emerald-500 flex items-center justify-center h-screen">
//       <div>
//         <Toaster toastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {user ? (
//           <h2 className="text-center text-white font-medium text-2xl">
//             👍Login Success
//           </h2>
//         ) : (
//           <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
//             <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
//               Welcome to <br /> CODE A PROGRAM
//             </h1>
//             {showOTP ? (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsFillShieldLockFill size={30} />
//                 </div>
//                 <label
//                   htmlFor="otp"
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Enter your OTP
//                 </label>
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   OTPLength={6}
//                   otpType="number"
//                   disabled={false}
//                   autoFocus
//                   className="opt-container "
//                 ></OtpInput>
//                 <button
//                   onClick={onOTPVerify}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Verify OTP</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsTelephoneFill size={30} />
//                 </div>
//                 <label
//                   htmlFor=""
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Verify your phone number
//                 </label>
//                 <PhoneInput country={"in"} value={ph} onChange={setPh} />
//                 <button
//                   onClick={onSignup}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Send code via SMS</span>
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default App;
// LoginWithPhone.jsx


import React, { useState } from 'react';

import {
  getAuth,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  RecaptchaVerifier,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth } from '../firebase';

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`; // Ensure E.164 format
      const applicationVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        'appVerificationDisabledForTesting': true, 
      });

      // Use the auth module to sign in with the phone number
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, applicationVerifier);
      
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Use the PhoneAuthProvider from auth module
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      console.log('Successfully logged in with phone number');
      // Add any additional logic after successful login
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h1>Login with Phone Number</h1>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div id="recaptcha-container"></div>
      <button onClick={handleSendOtp}>Send OTP</button>
      {verificationId && (
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default LoginWithPhone;
