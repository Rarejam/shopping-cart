import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const price = 2;
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [price4, setPrice4] = useState(0);
  const [price5, setPrice5] = useState(0);
  const [price6, setPrice6] = useState(0);
  const [price7, setPrice7] = useState(0);
  const [price8, setPrice8] = useState(0);
  const [price9, setPrice9] = useState(0);
  const [price10, setPrice10] = useState(0);
  const [price11, setPrice11] = useState(0);
  const [price12, setPrice12] = useState(0);
  const [price13, setPrice13] = useState(0);
  const [price14, setPrice14] = useState(0);
  const [price15, setPrice15] = useState(0);
  const [price16, setPrice16] = useState(0);
  // const [removePrice1, setRemovePrice1] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        // throw new Error('there was an error');
        console.log(error);
      }
      setIsLoading(false);
    };

    dataFetch();
  }, []);
  if (isLoading) return <div className='load-div'>Loading products...</div>;
  const firstItem = products[0];
  const secondItem = products[1];
  const thirdItem = products[2];
  const fourthItem = products[3];
  const fifthItem = products[4];
  const sixthItem = products[5];
  const seventhItem = products[6];
  const eighthItem = products[7];
  const ninethItem = products[8];
  const tenthItem = products[9];
  const eleventhItem = products[10];
  const twelvethItem = products[11];
  const thirteenthItem = products[12];
  const fourteenthItem = products[13];
  const fifteethItem = products[14];
  const sixteenthItem = products[15];

  // const testPrice = 0;
  // const [testPrice, setTestPrice] = useState(0);
  const changePrice1 = () => {
    setPrice1(price1 + 1);
  };
  const changePrice2 = () => {
    setPrice2(price2 + 1);
  };
  const changePrice3 = () => {
    setPrice3(price3 + 1);
  };
  const changePrice4 = () => {
    setPrice4(price4 + 1);
  };
  const changePrice5 = () => {
    setPrice5(price5 + 1);
  };
  const changePrice6 = () => {
    setPrice6(price6 + 1);
  };
  const changePrice7 = () => {
    setPrice7(price7 + 1);
  };
  const changePrice8 = () => {
    setPrice8(price8 + 1);
  };
  const changePrice9 = () => {
    setPrice9(price9 + 1);
  };
  const changePrice10 = () => {
    setPrice10(price10 + 1);
  };
  const changePrice11 = () => {
    setPrice11(price11 + 1);
  };
  const changePrice12 = () => {
    setPrice12(price12 + 1);
  };
  const changePrice13 = () => {
    setPrice13(price13 + 1);
  };
  const changePrice14 = () => {
    setPrice14(price14 + 1);
  };
  const changePrice15 = () => {
    setPrice15(price15 + 1);
  };
  const changePrice16 = () => {
    setPrice16(price16 + 1);
  };

  const reducePrice1 = () => {
    setPrice1(price1 - 1);
  };
  const reducePrice2 = () => {
    setPrice2(price2 - 1);
  };
  const reducePrice3 = () => {
    setPrice3(price3 - 1);
  };
  const reducePrice4 = () => {
    setPrice4(price4 - 1);
  };
  const reducePrice5 = () => {
    setPrice5(price5 - 1);
  };
  const reducePrice6 = () => {
    setPrice6(price6 - 1);
  };
  const reducePrice7 = () => {
    setPrice7(price7 - 1);
  };
  const reducePrice8 = () => {
    setPrice8(price8 - 1);
  };
  const reducePrice9 = () => {
    setPrice9(price9 - 1);
  };
  const reducePrice10 = () => {
    setPrice10(price10 - 1);
  };
  const reducePrice11 = () => {
    setPrice11(price11 - 1);
  };
  const reducePrice12 = () => {
    setPrice12(price12 - 1);
  };
  const reducePrice13 = () => {
    setPrice13(price13 - 1);
  };
  const reducePrice14 = () => {
    setPrice14(price14 - 1);
  };
  const reducePrice15 = () => {
    setPrice15(price15 - 1);
  };
  const reducePrice16 = () => {
    setPrice16(price16 - 1);
  };

  const clearRemovePrice1 = () => {
    setPrice1(price1 - price1);
  };
  const clearRemovePrice2 = () => {
    setPrice2(price2 - price2);
  };
  const clearRemovePrice3 = () => {
    setPrice3(price3 - price3);
  };
  const clearRemovePrice4 = () => {
    setPrice4(price4 - price4);
  };
  const clearRemovePrice5 = () => {
    setPrice5(price5 - price5);
  };
  const clearRemovePrice6 = () => {
    setPrice6(price6 - price6);
  };
  const clearRemovePrice7 = () => {
    setPrice7(price7 - price7);
  };
  const clearRemovePrice8 = () => {
    setPrice8(price8 - price8);
  };
  const clearRemovePrice9 = () => {
    setPrice9(price9 - price9);
  };
  const clearRemovePrice10 = () => {
    setPrice10(price10 - price10);
  };
  const clearRemovePrice11 = () => {
    setPrice11(price11 - price11);
  };
  const clearRemovePrice12 = () => {
    setPrice12(price12 - price12);
  };
  const clearRemovePrice13 = () => {
    setPrice13(price13 - price13);
  };
  const clearRemovePrice14 = () => {
    setPrice14(price14 - price14);
  };
  const clearRemovePrice15 = () => {
    setPrice15(price15 - price15);
  };
  const clearRemovePrice16 = () => {
    setPrice16(price16 - price16);
  };

  return (
    <div className='main-content'>
      <div className='section1-main-content'>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${secondItem.image})` }}></div>
          <div className='content-name'>
            <div>{secondItem.title}</div>
            <div>Price : ${secondItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price1 > 0) ? (
              <button onClick={changePrice1}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice1}>
                  -
                </button>
                <button onClick={clearRemovePrice1}>remove {price1} from cart </button>
                <button className='add-btn' onClick={changePrice1}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${firstItem.image})` }}></div>
          <div className='content-name'>
            <div>{firstItem.title}</div>
            <div>Price : ${firstItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price2 > 0) ? (
              <button onClick={changePrice2}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice2}>
                  -
                </button>
                <button onClick={clearRemovePrice2}>remove {price2} from cart</button>
                <button className='add-btn' onClick={changePrice2}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${thirdItem.image})` }}></div>
          <div className='content-name'>
            <div>{thirdItem.title}</div>
            <div>Price : ${thirdItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price3 > 0) ? (
              <button onClick={changePrice3}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice3}>
                  -
                </button>
                <button onClick={clearRemovePrice3}>remove {price3} from cart </button>
                <button className='add-btn' onClick={changePrice3}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${fourthItem.image})` }}></div>
          <div className='content-name'>
            <div>{fourthItem.title}</div>
            <div>Price : ${fourthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price4 > 0) ? (
              <button onClick={changePrice4}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice4}>
                  -
                </button>
                <button onClick={clearRemovePrice4}>remove {price4} from cart</button>
                <button className='add-btn' onClick={changePrice4}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section1-main-content'>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${fifthItem.image})` }}></div>
          <div className='content-name'>
            <div>{fifthItem.title}</div>
            <div>Price : ${fifthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price5 > 0) ? (
              <button onClick={changePrice5}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice5}>
                  -
                </button>
                <button onClick={clearRemovePrice5}>remove {price5} from cart</button>
                <button className='add-btn' onClick={changePrice5}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${sixthItem.image})` }}></div>
          <div className='content-name'>
            <div>{sixthItem.title}</div>
            <div>Price : ${sixthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price6 > 0) ? (
              <button onClick={changePrice6}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice6}>
                  -
                </button>
                <button onClick={clearRemovePrice6}>remove {price6} from cart</button>
                <button className='add-btn' onClick={changePrice6}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${seventhItem.image})` }}></div>
          <div className='content-name'>
            <div>{seventhItem.title}</div>
            <div>Price : ${seventhItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price7 > 0) ? (
              <button onClick={changePrice7}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice7}>
                  -
                </button>
                <button onClick={clearRemovePrice7}>remove {price7} from cart</button>
                <button className='add-btn' onClick={changePrice7}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${eighthItem.image})` }}></div>
          <div className='content-name'>
            <div>{eighthItem.title}</div>
            <div>Price : ${eighthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price8 > 0) ? (
              <button onClick={changePrice8}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice8}>
                  -
                </button>
                <button onClick={clearRemovePrice8}>remove {price8} from cart</button>
                <button className='add-btn' onClick={changePrice8}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section1-main-content'>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${ninethItem.image})` }}></div>
          <div className='content-name'>
            <div>{ninethItem.title}</div>
            <div>Price : ${ninethItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price9 > 0) ? (
              <button onClick={changePrice9}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice9}>
                  -
                </button>
                <button onClick={clearRemovePrice9}>remove {price9} from cart</button>
                <button className='add-btn' onClick={changePrice9}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${tenthItem.image})` }}></div>
          <div className='content-name'>
            <div>{tenthItem.title}</div>
            <div>Price : ${tenthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price10 > 0) ? (
              <button onClick={changePrice10}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice10}>
                  -
                </button>
                <button onClick={clearRemovePrice10}>remove {price10} from cart</button>
                <button className='add-btn' onClick={changePrice10}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${eleventhItem.image})` }}></div>
          <div className='content-name'>
            <div>{eleventhItem.title}</div>
            <div>Price : ${eleventhItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price11 > 0) ? (
              <button onClick={changePrice11}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice11}>
                  -
                </button>
                <button onClick={clearRemovePrice11}>remove {price11} from cart</button>
                <button className='add-btn' onClick={changePrice11}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${twelvethItem.image})` }}></div>
          <div className='content-name'>
            <div>{twelvethItem.title}</div>
            <div>Price : ${twelvethItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price12 > 0) ? (
              <button onClick={changePrice12}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice12}>
                  -
                </button>
                <button onClick={clearRemovePrice12}>remove {price12} from cart</button>
                <button className='add-btn' onClick={changePrice12}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section1-main-content'>
        <div>
          {' '}
          <div className='content-image' style={{ backgroundImage: `url(${thirteenthItem.image})` }}></div>
          <div className='content-name'>
            <div>{thirteenthItem.title}</div>
            <div>Price : ${thirteenthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price13 > 0) ? (
              <button onClick={changePrice13}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice13}>
                  -
                </button>
                <button onClick={clearRemovePrice13}>remove {price13} from cart</button>
                <button className='add-btn' onClick={changePrice13}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='content-image' style={{ backgroundImage: `url(${fourteenthItem.image})` }}></div>
          <div className='content-name'>
            <div>{fourteenthItem.title}</div>
            <div>Price : ${fourteenthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price14 > 0) ? (
              <button onClick={changePrice14}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice14}>
                  -
                </button>
                <button onClick={clearRemovePrice14}>remove {price14} from cart</button>
                <button className='add-btn' onClick={changePrice14}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          {' '}
          <div className='content-image' style={{ backgroundImage: `url(${fifteethItem.image})` }}></div>
          <div className='content-name'>
            <div>{fifteethItem.title}</div>
            <div>Price : ${fifteethItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price15 > 0) ? (
              <button onClick={changePrice15}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice15}>
                  -
                </button>
                <button onClick={clearRemovePrice15}>remove {price15} from cart</button>
                <button className='add-btn' onClick={changePrice15}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          {' '}
          <div className='content-image' style={{ backgroundImage: `url(${sixteenthItem.image})` }}></div>
          <div className='content-name'>
            <div>{sixteenthItem.title}</div>
            <div>Price : ${sixteenthItem.price}</div>
          </div>
          <div className='add-button'>
            {!(price16 > 0) ? (
              <button onClick={changePrice16}>Add to cart</button>
            ) : (
              <div className='button-section'>
                <button className='minus-btn' onClick={reducePrice16}>
                  -
                </button>
                <button onClick={clearRemovePrice16}>remove {price16} from cart</button>
                <button className='add-btn' onClick={changePrice16}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <h1>This is the shopping section </h1>
      <Link to='/'>Link to Home Page</Link> */}
    </div>
  );
};
