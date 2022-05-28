const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');

// For create email obj to send actual emails.
module.exports = class Email {
  constructor(email,name, url) {
    this.to = email;
    this.firstName = name;
    this.url = url;
    this.from = `abdo <${process.env.EMAIL_FROM}>`;
  }

  // Create different transports for different environments
  newTransport() {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });

  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject
    });

    // 2) Define email options
    const mailOptions = {
        from: this.from,
        to:this.to,
        subject,
        //^ the text version of the mail
        text:convert(html, {
            wordwrap: 130
          }),
        html
    }

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the rabbit Family!');
  }

  async sendPasswordReset() {
    await this.send('passwordReset', 'Your password reset token (valid for only 10 minutes)');
  }
};