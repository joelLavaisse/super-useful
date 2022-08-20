import styles from '../../components/Layout/Layout.module.css'

export default function Si() {
  return (
    <>
      <h1 className="title">Si</h1>
      <style>{`
        .${styles.container} {
          background-color: lime;
        }
        .title {
          color: white;
        }
      `}</style>
    </>
  )
}
