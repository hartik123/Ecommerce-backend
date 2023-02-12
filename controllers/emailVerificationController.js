import { userinfoModel } from "../models/signupModel.js";
import otpGenerator from "otp-generator";
import nodemailer from 'nodemailer';
import sgMail from "@sendgrid/mail";



const sendEmail = async (params) => {
    const MAIL_SETTINGS= {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.PASSWORD,
        },
      }

    const transporter = nodemailer.createTransport(MAIL_SETTINGS);

        transporter.sendMail({
            from: `"Hartik Suhagiya" ${MAIL_SETTINGS.auth.user}`, // sender address
            to: params.emailid, // list of receivers
            subject: "OTP for Email Verification", // Subject line
            text: "There is a new article. It's about sending emails, check it out!", // plain text body
            html: `
            <div
              class="container"
              style="max-width: 90%; margin: auto; padding-top: 20px"
            >
              <h2>Welcome to Ecommerce</h2>
              <p style="margin-bottom: 30px;">Please enter the sign up OTP to get started</p>
              <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
         </div>
          `,
          }).then(info => {
            console.log({info});
          }).catch(console.error);
  };


  function generateOTP(length) {
          
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const emailVerificationController = async (req, res) => {
  const { userid, emailid } = req.body;
  const OTP = generateOTP(6)
  try {

    // Sending email to the user with otp
    const result = await userinfoModel.findOne({ email: emailid });
    if (result != null) {
      res.json({msg: "Email already in use" });
    } else {
      await sendEmail({ emailid, OTP });
      res.json({msg: "Email could be changed" });
    }

    // Saving otp to the collecion
    const otpsaveresult = await userinfoModel.findOne({userid})
    otpsaveresult.otp = OTP
    otpsaveresult.save()
    
  } catch (error) {
    console.log(error);
  }
};

export { emailVerificationController };
