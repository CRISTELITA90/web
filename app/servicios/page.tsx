export default function ServiciosPage() {
  const servicios = [
    {
      title: "Análisis de datos",
      desc: "Análisis estadístico y computacional orientado a evidencia, con trazabilidad y reproducibilidad.",
      bullets: [
        "Análisis exploratorio, limpieza e integración de datos",
        "Modelos estadísticos (regresión, series, supervivencia, etc.)",
        "Visualización científica y dashboards",
        "Informes reproducibles (Quarto/RMarkdown/Jupyter)",
      ],
      entregables: [
        "Informe técnico (PDF)",
        "Tablas/figuras listas para informe o manuscrito",
        "Código reproducible",
      ],
    },
    {
      title: "Bioinformática",
      desc: "Soporte a investigación molecular y análisis ómicos con pipelines documentados.",
      bullets: [
        "Procesamiento y control de calidad de datos ómicos",
        "Análisis comparativo y anotación funcional",
        "Integración de datos (multi-ómica / clínica / ambiental)",
        "Documentación y trazabilidad del pipeline",
      ],
      entregables: [
        "Pipeline documentado",
        "Resultados y QC",
        "Resumen metodológico para reporte",
      ],
    },
    {
      title: "Consultoría científica",
      desc: "Acompañamiento metodológico y técnico para proyectos, instituciones y unidades de I+D.",
      bullets: [
        "Definición de objetivos, variables y plan de análisis",
        "Revisión metodológica y diseño experimental",
        "Revisión técnica de resultados e interpretación",
        "Estandarización de flujos y buenas prácticas",
      ],
      entregables: [
        "Informe de recomendaciones",
        "Plan de trabajo",
        "Soporte técnico durante la ejecución",
      ],
    },
  ];

  const sectores = [
    "Biodiversidad y conservación",
    "Salud pública y vigilancia epidemiológica",
    "Vigilancia ambiental (agua, aire, riesgos biológicos)",
    "Investigación biomédica y clínica",
    "Ciencias agrarias y bioeconomía",
  ];

  const metodologia = [
    {
      step: "1. Alcance",
      text: "Definición de objetivos, fuentes de datos, criterios de calidad, cronograma y entregables.",
    },
    {
      step: "2. Ejecución",
      text: "Implementación del análisis/pipeline con control de calidad y registro de decisiones.",
    },
    {
      step: "3. Validación",
      text: "Revisión de resultados, robustez y coherencia metodológica. Ajustes si aplica.",
    },
    {
      step: "4. Entrega",
      text: "Informe final, repositorio con código reproducible y recomendaciones técnicas.",
    },
  ];

  const stack = [
    "R (tidyverse, survival, ggplot2, Quarto/RMarkdown)",
    "Python (pandas, scikit-learn, Jupyter)",
    "Control de versiones (Git/GitHub)",
    "Buenas prácticas de reproducibilidad y documentación",
  ];

  const credenciales = [
    "Comunicación científica y elaboración de informes técnicos",
    "Experiencia en análisis de datos y bioinformática aplicada",
    "Enfoque orientado a reproducibilidad y trazabilidad metodológica",
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* CABECERA */}
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Servicios</h1>
        <p className="mt-4 text-lg text-gray-600">
          Soporte técnico y analítico para proyectos de investigación, instituciones y entornos de I+D.
        </p>
      </section>

      {/* BLOQUES DE SERVICIO */}
      <section className="mt-12 grid gap-8 md:grid-cols-3">
        {servicios.map((s) => (
          <article key={s.title} className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">{s.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{s.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-600">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-sm font-medium">Entregables</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                {s.entregables.map((e) => (
                  <li key={e}>— {e}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* SECTORES */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Ámbitos de aplicación</h2>
        <p className="mt-3 text-sm text-gray-600">
          Líneas de trabajo orientadas a evidencia, interoperabilidad de datos y soporte a decisiones.
        </p>

        <ul className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
          {sectores.map((x) => (
            <li key={x} className="rounded-2xl border p-4">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* METODOLOGÍA */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Metodología de trabajo</h2>
        <p className="mt-3 text-sm text-gray-600">
          Proceso orientado a calidad metodológica, trazabilidad y reproducibilidad.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {metodologia.map((m) => (
            <div key={m.step} className="rounded-2xl border p-6">
              <p className="text-sm font-medium">{m.step}</p>
              <p className="mt-2 text-sm text-gray-600">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK + CREDENCIALES */}
      <section className="mt-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Stack técnico</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {stack.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-medium">Enfoque y garantías</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {credenciales.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <a
          href="/contacto"
          className="inline-flex rounded-xl border px-6 py-3 text-sm font-medium hover:shadow-sm"
        >
          Solicitar propuesta técnica
        </a>
      </section>
    </main>
  );
}
