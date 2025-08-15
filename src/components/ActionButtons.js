import React from "react";
import Box from "@mui/material/Box";
import {Button, ButtonGroup, Icon, Typography} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuButton from "./MenuButton";

const BlueButton = (props) => <Button sx={{textTransform: 'none', fontWeight: 'normal', ...props.sx}} color="secondary" variant="contained">{props.children}</Button>
const GrayButton = (props) => <Button sx={{textTransform: 'none', fontWeight: 'normal', ml: '15px'}} color="jiraGray"  variant="contained">{props.children}</Button>

export default function ActionButtons() {
	return (
		<Box>
			<Typography sx={{fontSize: '14px'}}>The table below shows the Git repositories connected for indexing.</Typography>
			<Box sx={{display: "flex"}}>
				<Box sx={{ flexGrow: 1}}>
					<ButtonGroup variant="contained" aria-label="outlined primary button group">
						<BlueButton sx={{borderRightWidth: 0, fontWeight: 'bold'}}>Connect to Git repository</BlueButton>
						<MenuButton sx={{
							marginLeft: "2px",
							paddingLeft: "10px",
							paddingRight: "4px"
						}}
						            buttonColor="secondary" buttonVariant="contained" hideEndIcon={true}
						            menuText={<MoreHorizIcon sx={{height: "24px"}} />} itemsList={[
							{text: 'Add tracked folder'},
							{text: 'Connect to GitHub'},
							{text: 'Connect to GitLab'},
							{text: 'Connect to Microsoft'},
							{text: 'Connect to Aws Code Commit'},
							{text: 'Connect to Gerrit Code Review'},
						]} />
					</ButtonGroup>
					<GrayButton>Create Git repository</GrayButton>
				</Box>
				<GrayButton>Enable All</GrayButton>
				<GrayButton>Disable All</GrayButton>
				<MenuButton sx={{ml: '15px', fontWeight: 'normal'}} buttonColor="jiraGray"  buttonVariant="contained" menuText="Bulk change" itemsList={[
					{text: '1. Import configuration'},
					{text: '2. Export configuration'},
				]} />
				<GrayButton variant="contained">Reindex All</GrayButton>
			</Box>

		</Box>
	);
}
