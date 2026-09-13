import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // TODO: conectar con un proveedor de email real, por ejemplo Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Dos Studio <web@dosstudio.com>",
    //   to: "wearedosstudio@gmail.com",
    //   subject: `Nuevo contacto: ${name}`,
    //   text: `Empresa: ${company}\nServicio: ${service}\nEmail: ${email}\n\n${message}`,
    // });
    //
    // Mientras tanto, dejamos constancia en los logs del servidor:
    console.log("Nuevo contacto recibido:", {
      name,
      email,
      company,
      service,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 500 }
    );
  }
}
