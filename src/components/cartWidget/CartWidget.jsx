import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const CartWidget = () => {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon sx={{ color: 'white' }}/>
            </StyledBadge>
        </IconButton>
    );
}

export default CartWidget;