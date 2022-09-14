import CardBasket from '../components/cardBasked';
import '../pages/Basket.css';
import MenuBox from '../components/menuBox/menuBox'
import EmptyBasket from '../components/emptyBasket'
import {useSelector} from 'react-redux'


function Basket () {

  const basket = useSelector(state => state.basket.basket)
  const totalProduct = useSelector((state) => state.basket.pricesProducts)
    return (
        <div className='basket_components'>
        <div className='basket__container'>
        <MenuBox/>
        <header>
          <h1 className='basket__header'>
          КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ
          </h1>
        </header>
        {!basket.length && <EmptyBasket/>}
        <div className='basket__favorites'>
        {basket.map (key => {
              return (
                <CardBasket
                id={key.id}
                url={key.url}
                tittle={key.tittle}
                price={key.price}
                />
              )
            })}
        </div>
        <div className="basket__footer">
          <div className="basket__summaryText">ЗАКАЗ НА СУММУ:</div>
          <p className="basket__summary">{totalProduct} ₽</p>
          <button className="basket__button">Оформить заказ</button>
        </div>
        </div>
        <div
            style={{
              background: '#D58C51',
              height: '1px',
              position: 'sticky',
              bottom: '89px',
            }}
          />
      </div>
    )
}

export default Basket;