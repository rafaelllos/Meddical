const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Yandex',
	port: 465,
    secure: true,
	logger: true,
	debug: true,
    auth: {
        user: 'cobberaf2@yandex.ru',
        pass: 'rbflisumyoyawgyw'
    },
	tls: {
		rejectUnAuthorized: true
	}
});

const mailOptions = {
    from: 'cobberaf2@yandex.ru',
    to: 'cobberaf2@yandex.ru',
    subject: 'Тестовое письмо Node.js',
    text: 'Это тестовое письмо, отправленное с помощью Node.js.'
};

transporter.sendMail(mailOptions);