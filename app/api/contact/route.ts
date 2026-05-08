import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

/* ── À PERSONNALISER PAR CLIENT ── */
const CONFIG = {
  /* Email où le client reçoit les messages de son formulaire */
  clientEmail: 'pinedomariarosario@gmail.com',

  /* Ton email — tu reçois une copie de chaque lead */
  agencyEmail: 'contact@atelierdigitalgeneve.ch',

  /* Nom qui apparaît dans l'objet des emails */
  commerceName: 'Cocina de Chanyz',

  /* Domaine vérifié sur Resend (mail.atelierdigitalgeneve.ch ou domaine client) */
  fromEmail: 'noreply@mail.atelierdigitalgeneve.ch',
};

export async function POST(req: NextRequest) {
  /* Instancier Resend ici pour éviter l'erreur à la compilation */
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, message, service } = body;

    /* ── Validation basique ── */
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants.' },
        { status: 400 }
      );
    }

    /* ── Sauvegarde dans Supabase ── */
    const supabase = await createClient();
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{
        commerce: CONFIG.commerceName,
        name,
        email,
        phone: phone || null,
        message,
        service: service || null,
      }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      /* On continue même si la DB échoue — l'email doit partir quand même */
    }

    /* ── Email au client (le commerçant) ── */
    await resend.emails.send({
      from: `${CONFIG.commerceName} <${CONFIG.fromEmail}>`,
      to: CONFIG.clientEmail,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #0C0B09; margin-bottom: 24px;">
            Nouveau message reçu via votre site
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6B7280; font-size: 14px; width: 120px;">Nom</td>
                <td style="padding: 8px 0; font-weight: 600; color: #0C0B09;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0C0B09;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Téléphone</td>
                <td style="padding: 8px 0; font-weight: 600; color: #0C0B09;">${phone}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Service</td>
                <td style="padding: 8px 0; font-weight: 600; color: #0C0B09;">${service}</td></tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #F9F9F7; border-radius: 8px;">
            <p style="color: #6B7280; font-size: 12px; margin: 0 0 8px 0;">Message :</p>
            <p style="color: #0C0B09; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9CA3AF;">
            Message envoyé via le formulaire de ${CONFIG.commerceName}
          </p>
        </div>
      `,
    });

    /* ── Copie à l'agence (Jordan) ── */
    await resend.emails.send({
      from: `Template ADG <${CONFIG.fromEmail}>`,
      to: CONFIG.agencyEmail,
      subject: `[Lead] ${CONFIG.commerceName} — ${name}`,
      html: `<p><strong>Client :</strong> ${CONFIG.commerceName}</p>
             <p><strong>Contact :</strong> ${name} — ${email}</p>
             <p><strong>Message :</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
