import * as React from 'react';
import {Button, Divider} from "@mui/material";
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';


const HeaderButton = styled(Button)({
	textTransform: 'none'
});


function MenuButton(props) {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const {menuText, itemsList} = props;

	const items = [];
	itemsList.forEach(({text, icon, hasDivider, subheader}, index) => {

			subheader && items.push(<ListSubheader key={'sh-' + index}>{subheader.toUpperCase()}</ListSubheader>);
			items.push(<MenuItem onClick={handleClose} key={'mi-' + index}>
				{icon}
				{text}
			</MenuItem>)
			hasDivider && items.push(<Divider key={'d-' + index}/>)
	})
	return (
	<>
	  <HeaderButton color={props.buttonColor || "inherit"}  variant={props.buttonVariant || 'text'}
	                sx={props.sx}
	                endIcon={!props.hideEndIcon && <KeyboardArrowDownIcon />} onClick={handleClick}
	                aria-controls={open ? 'basic-menu' : undefined}
	                aria-haspopup="true"
	                aria-expanded={open ? 'true' : undefined}>{menuText}</HeaderButton>
	  <Menu
	  	id="basic-menu"
	  	anchorEl={anchorEl}
	  	open={open}
	  	onClose={handleClose}
	    dense="true"
	  	MenuListProps={{
	  		'aria-labelledby': 'basic-button',
	  	}}
	  >
		{items}
	  </Menu>
	</>
	);
}

export default MenuButton;
