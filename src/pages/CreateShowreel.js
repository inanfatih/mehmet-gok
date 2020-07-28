import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IsAuthenticated from '../util/IsAuthenticated';

function CreateShowreel(props) {
  if (!IsAuthenticated()) {
    props.history.push('/login');
  }

  const [showreel, setShowreel] = useState({
    orderNo: 0,
    showreelUrl: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'MUHAMMET GOK | Create Showreel';
  }, []);

  const handleSubmit = (event) => {
    console.log('handleSubmit', event);
    event.preventDefault();
    setLoading(true);

    axios
      .post('/showreel', showreel)
      .then((res) => {
        console.log('res.data', res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('error', err);
      });
  };

  return (
    <div id='create-showreel'>
      <div className='container'>
        <div className='create-showreel'>
          <p className='create-showreel-title'>CREATE A SHOWREEL</p>
          <div className='create-showreel-form'>
            <div>
              <p>
                Note: Showreels will be ordered on the Showreel page based on
                the order numbers. Showreels will be sorted by descending order
                numbers. Showreels with the same order numbers will be sorted by
                descending creation date. Showreels with higher order number
                will be displayed first.
              </p>
              <br />
              <form onSubmit={handleSubmit}>
                <div className='text-fields'>
                  <label htmlFor='showreel'>Showreel URL:</label>
                  <input
                    type='text'
                    name='showreel'
                    className='text-input name-input'
                    placeholder='https://...'
                    value={showreel.showreelUrl}
                    onChange={(event) => {
                      setShowreel({
                        ...showreel,
                        showreelUrl: event.target.value,
                      });
                    }}
                  />
                  <label>Order Number:</label>
                  <input
                    type='number'
                    name='orderNo'
                    className='text-input name-input'
                    placeholder='Order Number'
                    value={showreel.orderNo}
                    onChange={(event) => {
                      setShowreel({
                        ...showreel,
                        orderNo: event.target.value,
                      });
                    }}
                  />
                </div>
                <button className='btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShowreel;
