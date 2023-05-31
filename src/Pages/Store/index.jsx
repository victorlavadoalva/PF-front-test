import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import styles from '../../Pages/MenuClientes/styles.module.css'
import * as actions from '../../Redux/actions'


const Store = () => {

    let cart = useSelector(state => state.cart);
    const [link, setLink] = useState();
    const [confirmed, setConfirmed] = useState(false);
    const dispatch = useDispatch();
    const localStorage = window.localStorage.getItem('store');
    const store = JSON.parse(localStorage);
    const location = useLocation();
    let pathname = false;

    if (location.pathname === '/home/cart') {
        pathname = true;
    };

    window.localStorage.setItem('store', JSON.stringify(cart))
    
    useEffect(() => {
        if (store.length) {
            dispatch(actions.addFromStore(store))
        }
    }, [dispatch]);

    const deleteStore = () => {
        dispatch(actions.deleteCart())
        setTimeout(() => {
            window.localStorage.removeItem('store');
        }, "1000");
    };

    const removeFromCart = (productId) => {
        const filtered = store.filter(item => {
            return item.id !== productId
        });
        window.localStorage.setItem('store', JSON.stringify(filtered));
        dispatch(actions.deleteFromCart(productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.cost, 0);
    };

    async function payment() {
        setConfirmed(true)
        const response = await axios.post("https://pf-backend-production-83a4.up.railway.app/payment", cart);
        setLink(response.data)
    };

    return (
        <div className={styles.containerStore}>
            <Typography variant="h5" gutterBottom>
                Tu Carrito:
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="body1">Tu carrito esta vacio.</Typography>
            ) : (
                <>
                    {/* Render the cart items */}
                    <List>
                        {cart.map((item) => (
                            <ListItem key={item.id} disableGutters >
                                <ListItemText primary={item.name} secondary={`$${item.cost}`} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h6" gutterBottom>
                        Total: ${getTotalPrice()}
                    </Typography>
                    {cart.length > 0 && pathname && (
                        <><Link>
                            <Button variant="contained" color="primary" onClick={payment}>
                                Confirmar
                            </Button>
                        </Link>
                            <br></br>
                            {
                                confirmed && <span className={styles.confirmed}>Pedido confirmado</span>
                            }
                            <br></br>
                            {
                                (link && pathname &&
                                    <Link to={link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="contained" color="primary" onClick={deleteStore} >
                                            Pagar
                                        </Button>
                                    </Link>) || (confirmed && <span>Cargando link de pago...</span>)
                            }
                            <br></br>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Store;