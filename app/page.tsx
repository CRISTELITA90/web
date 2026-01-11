export default function HomePage() {
  const lineas = [
    {
      title: "Evidencia y reproducibilidad",
      text: "Análisis con trazabilidad, documentación técnica y resultados verificables.",
    },
    {
      title: "Interoperabilidad de datos",
      text: "Integración de fuentes heterogéneas con criterios de calidad y consistencia.",
    },
    {
      title: "Soporte a decisiones",
      text: "Interpretación científica orientada a proyectos, informes y entornos institucionales.",
    },
  ];

  const metodologia = [
    { step: "Definición", text: "Objetivos, datos disponibles, criterios de calidad y entregables." },
    { step: "Ejecución", text: "Análisis/pipeline con control de calidad y registro de decisiones." },
    { step: "Validación", text: "Robustez, coherencia metodológica y revisión de resultados." },
    { step: "Entrega", text: "Informe técnico y repositorio reproducible con recomendaciones." },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Biodican</h1>

        <p className="mt-6 text-xl text-gray-600">
          Ciencia de datos y bioinformática aplicada a biodiversidad y salud.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600">
          Iniciativa orientada al análisis científico riguroso, la interpretación de datos complejos y el
          desarrollo de soluciones basadas en evidencia para proyectos de investigación, instituciones y
          entornos de I+D.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/servicios"
            className="rounded-xl border px-6 py-3 text-sm font-medium hover:shadow-sm"
          >
            Ver servicios
          </a>
          <a
            href="/contacto"
            className="rounded-xl border px-6 py-3 text-sm font-medium hover:shadow-sm"
          >
            Contacto
          </a>
        </div>
      </section>

      {/* IMAGEN HERO */}
      <section className="mt-24">
        <p className="mb-6 text-center text-sm uppercase tracking-wide text-gray-500">
          Ciencia de datos · Bioinformática · Investigación
        </p>
        <div className="overflow-hidden rounded-2xl border">
          <img
            src="/public_hero.png"
            alt="Ciencia de datos y bioinformática"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </section>

      {/* ÁREAS */}
      <section className="mt-24 grid gap-8 sm:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Análisis de datos</h2>
          <p className="mt-3 text-sm text-gray-600">
            Análisis estadístico, exploración de datos, visualización científica y reporting reproducible.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Bioinformática</h2>
          <p className="mt-3 text-sm text-gray-600">
            Pipelines, análisis ómicos, integración de datos biológicos y soporte a investigación.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Consultoría científica</h2>
          <p className="mt-3 text-sm text-gray-600">
            Revisión metodológica, diseño experimental y acompañamiento técnico en I+D.
          </p>
        </div>
      </section>

      {/* LÍNEAS DE TRABAJO */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Principios de trabajo</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {lineas.map((x) => (
            <div key={x.title} className="rounded-2xl border p-6">
              <p className="text-sm font-medium">{x.title}</p>
              <p className="mt-2 text-sm text-gray-600">{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Metodología</h2>
        <p className="mt-3 text-sm text-gray-600">
          Proceso orientado a calidad, trazabilidad y reproducibilidad.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {metodologia.map((m) => (
            <div key={m.step} className="rounded-2xl border p-6">
              <p className="text-sm font-medium">{m.step}</p>
              <p className="mt-2 text-sm text-gray-600">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/contacto"
            className="inline-flex rounded-xl border px-6 py-3 text-sm font-medium hover:shadow-sm"
          >
            Solicitar propuesta técnica
          </a>
        </div>
      </section>
    </main>
  );
}
