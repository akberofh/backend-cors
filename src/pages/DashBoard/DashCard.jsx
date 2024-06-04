import Button from '../../components/bnts/Button'
import styles from './DashCard.module.scss'

const DashCard = ({item, remove}) => {

  return (
    <div className={styles.container}>
    <img src={item.thumbnail} alt="" />
    <div className={styles.write}>
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
      <div className={styles.btn}>
          <Button  text={'SIL'} onclick={remove}  />
      </div>
  </div>
  )
}

export default DashCard
