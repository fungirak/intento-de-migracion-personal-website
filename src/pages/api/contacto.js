import nodemailer from 'nodemailer';
import Emails from '../../models/email';
import path from 'path';

const transporter1 = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const transporter2 = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const emailData = req.body;
        const email = new Emails(emailData);

        try {
            await sendEmail(email);
            res.json({ message: 'Correo enviado exitosamente.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al enviar el correo.' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}

async function sendEmail(email) {
    try {
        let infoAdmin = await transporter1.sendMail({
            from: `"FUNGIRAK" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_ADMIN,
            subject: `${email.nombre} ${email.apellido}`,
            text: '',
            html: `
                <br><br>
                <b>NUEVO MENSAJE RECIBIDO</b><br>
                <b>DE: </b><span>${email.nombre} ${email.apellido}</span>
                <p>Empresa: ${email.company}</p>
                <p>Sitio Web: ${email.website}</p>
                <p>Teléfono: ${email.telefono}</p>
                <b>Asunto: ${email.asunto}</b>
                <br>
                <b>Mensaje: ${email.mensaje}</b>
                <br><br>
            `,
        });

        console.log("Mensaje enviado al administrador: %s", infoAdmin.messageId);

        let infoUser = await transporter2.sendMail({
            from: `"FUNGIRAK" <fungirak@gmail.com>`,
            to: `${email.emisor}`,
            subject: "Mensaje entregado satisfactoriamente.",
            text: `Hello`,
            html: `
                 <b>GRACIAS POR SU MENSAJE, SERÁ RESPONDIDO A LA BREVEDAD.</b><br>
            `,
            attachments: [{
                filename: 'fungirak-services.pdf',
                path: path.join(__dirname, '../../email/fungirak-services.pdf'),
                contentType: 'application/pdf',
            }],
        });

        console.log("Mensaje enviado al usuario: %s", infoUser.messageId);
    } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        throw error;
    }
}
