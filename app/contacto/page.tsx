export default function ContactoPage() {
  const email = "contacto@biodican.org"; // cámbialo cuando tengas tu email real

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* CABECERA */}
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-4 text-lg text-gray-600">
          Para solicitudes técnicas, colaboración o información institucional, utiliza el formulario o
          los canales de contacto.
        </p>
      </section>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {/* FORMULARIO */}
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Formulario</h2>
          <p className="mt-2 text-sm text-gray-600">
            Indica el contexto del proyecto, el tipo de datos y el objetivo del análisis.
          </p>

          {/* Nota: mailto no envía automáticamente; abre el cliente de correo del usuario */}
          <form
            className="mt-6 space-y-4"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="Nombre"
                placeholder="Nombre y apellido"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                type="email"
                name="Email"
                placeholder="nombre@institucion.org"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Institución / Organización (opcional)</label>
              <input
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="Institucion"
                placeholder="Universidad, centro, empresa, proyecto"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Asunto</label>
              <input
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="Asunto"
                placeholder="Solicitud de propuesta técnica / Consulta metodológica / Colaboración"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                className="mt-2 min-h-[140px] w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                name="Mensaje"
                placeholder="Contexto, objetivo, tipo de datos, plazos, y entregables esperados."
              />
              <p className="mt-2 text-xs text-gray-500">
                Recomendación: no incluyas datos personales sensibles. Si necesitas compartir archivos,
                lo coordinamos por email.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl border px-6 py-3 text-sm font-medium hover:shadow-sm"
            >
              Enviar
            </button>

            <p className="mt-3 text-xs text-gray-500">
              El botón abrirá tu cliente de correo para enviar el mensaje a {email}. Si prefieres un
              envío directo desde la web, lo conectamos en el siguiente paso (Formspree o Resend).
            </p>
          </form>
        </div>

        {/* DATOS / INFORMACIÓN */}
        <div className="space-y-6">
          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">Canales de contacto</h2>
            <p className="mt-2 text-sm text-gray-600">
              Puedes escribir directamente o solicitar una propuesta técnica.
            </p>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a className="underline underline-offset-4" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
              <p>
                <span className="font-medium">Ubicación:</span> Canarias, España
              </p>
              <p>
                <span className="font-medium">Enfoque:</span> investigación, análisis reproducible y soporte a I+D
              </p>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Si aún no tienes dominio/correo, lo cambiamos por tu email real o lo conectamos a un
              servicio de envío.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">Qué incluir en tu solicitud</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Objetivo científico o técnico</li>
              <li>• Tipo de datos (clínicos, ómicos, biodiversidad, ambiental, etc.)</li>
              <li>• Tamaño aproximado del dataset y formato</li>
              <li>• Plazos, restricciones y entregables esperados</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">Privacidad</h2>
            <p className="mt-2 text-sm text-gray-600">
              Biodican aplica principios de minimización de datos y confidencialidad. Para proyectos con
              información sensible, se recomienda coordinación previa y acuerdos específicos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
