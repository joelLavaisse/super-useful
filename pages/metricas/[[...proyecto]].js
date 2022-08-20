import Image from 'next/image'
import { useRouter } from 'next/router'
import pieChartGraph from '../../public/pie-chart.svg'

export default function Metricas() {
  const router = useRouter()
  const { proyecto } = router.query

  return (
    <>
      <h2>{proyecto}</h2>
      <Image src={pieChartGraph} alt="Pie chart graph"  />
    </>
  )
}
