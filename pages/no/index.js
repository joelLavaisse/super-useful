import styles from '../../components/Layout/Layout.module.css'

export default function No() {
  return (
    <>
      <h1 className="title">No</h1>
      <style>{`
        .${styles.container} {
          background-color: red;
        }
        .title {
          color: white;
        }
      `}</style>
    </>
  )
}
