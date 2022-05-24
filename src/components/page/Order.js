import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
      const { orderId } = useParams();
      const [order, setOrder] = useState({});

      useEffect(() => {
            const url = `http://localhost:5000/tools/${orderId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setOrder(data))
      }, [])

      return (
            <div>
                  <p>order{order.name}</p>
            </div>
      );
};

export default Order;