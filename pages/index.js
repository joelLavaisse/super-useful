import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <h1 className="title">
        Super duper useful tools
      </h1>

      <p className="description">
        Las herramientas mas copadas del viejo oeste
      </p>

      <div className="grid">
        <Card
          title="Lo contrario &rarr;"
          content="Esta página no está de acuerdo con lo que decís."
          href="/contra"
        />
        <Card
          title="Métricas &rarr;"
          content="Acá se mide de todo... salvo eso que necesitas."
          href="/metricas"
        />
        <Card
          title="Si &rarr;"
          content="Todos necesitamos que nos validen de vez en cuando."
          href="/si"
        />
        <Card
          title="No &rarr;"
          content="Para esa persona que no merece ser validada."
          href="/no"
        />
      </div>
    </>
  )
}
