import React from "react";
import {
	Checkbox,
	Icon,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow, Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Lozenge from "./Lozenge";

const RepositoriesList = (props) => {
	const columns = ['Enabled', 'Location', 'Repository/Integration', 'Last indexed', 'Status', 'Action'];
	const rows = [
		{id: 1, name: 'Repository1', location: 'GITHUB', lastIndexed: 'Newer', status: 'updated', enabled: true},
		{id: 2, name: 'Repository test', location: 'GITHUB APP: CLOUD', lastIndexed: 'Yestarday', status: 'installing', enabled: true},
		{id: 3, name: 'Integration test', location: 'GITLAB', lastIndexed: 'Just now', status: 'updated', enabled: true},
		{id: 4, name: 'Test repo', location: 'HOSTED', lastIndexed: 'Just now', status: 'updated', enabled: true},
		{id: 5, name: 'Empty repo', location: 'GITHUB', lastIndexed: 'Newer', status: 'indexing', enabled: true},
		{id: 6, name: 'Disabled repo', location: 'GITLAB', lastIndexed: 'Newer', status: 'updated', enabled: false},
		{id: 7, name: 'Ahjxdgfjkasd', location: 'GITHUB APP: SERVER', lastIndexed: 'Newer', status: 'error', enabled: true}
	];


	const menuItems = [`<b>Reindex</b> integration`, `<b>Show</b> integration repositories`, `<b>Edit</b> integration connection settings`,
		`<b>Edit</b> integration feature settings`, `<b>Reset</b> index`, `<b>Remove</b> integration`, `<b>View</b> log`];
	return (
		<TableContainer component={Box}>
			<Table sx={{ minWidth: 650, fontSize: '12px' }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						{
							columns.map((column) => <TableCell key={column}>{column}</TableCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => <RepositoriesListRow key={row.name} row={row} menuItems={menuItems} index={index} />)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const RepositoriesListRow  = (props) => {
	const {row, menuItems, index} = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<TableRow
			key={row.name}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell component="th" scope="row">
				<Checkbox color="primary" checked={row.enabled}	/>
			</TableCell>
			<TableCell ><Lozenge text={row.location} type='info'></Lozenge></TableCell>
			<TableCell ><Typography>{row.name}</Typography></TableCell>
			<TableCell ><Typography>{row.lastIndexed}</Typography></TableCell>
			<TableCell ><Lozenge text={row.status} /></TableCell>
			<TableCell >
				<IconButton disabled={!row.enabled} onClick={handleClick} color={row.enabled && 'primary' || 'inherit'}
				            aria-controls={open ? 'basic-menu' : undefined}
				            aria-haspopup="true"
				            aria-expanded={open ? 'true' : undefined}>
					<SettingsIcon />
					{row.enabled && <KeyboardArrowDownIcon />}
				</IconButton>
				<Menu
					key={'menu-' + index}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					dense="true"
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{menuItems.map((text, index) => <MenuItem onClick={handleClose} key={index}><div dangerouslySetInnerHTML={{__html: text}}></div></MenuItem>)}
				</Menu>
			</TableCell>
		</TableRow>
	)
}

export default RepositoriesList
