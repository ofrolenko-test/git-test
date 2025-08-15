import * as React from 'react';
import {AppBar, Button, IconButton, Toolbar, Box} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PendingIcon from '@mui/icons-material/Pending';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HvacIcon from '@mui/icons-material/Hvac';
import MenuButton from "./MenuButton";
import SearchView from "./Search";
import CampaignIcon from '@mui/icons-material/Campaign';
import HelpIcon from '@mui/icons-material/Help';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderButton = styled(Button)({
	textTransform: 'none'
});

const CreateButton = styled(Button)({
	textTransform: 'none',
	backgroundColor: '#0063cc',
	borderColor: '#0063cc',
	'&:hover': {
		backgroundColor: '#0069d9',
		borderColor: '#0062cc',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#0062cc',
		borderColor: '#005cbf',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	},
});

const HeaderIconButton = styled(IconButton)({
	color: '#ffffff'
});

const iconSizes = {
	height: '1.1em',
	width: '1.1em'
};

const JiraToolbar = styled(Toolbar)(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		minHeight: '42px'
	}
}));

const JiraCampaignIcon = styled(CampaignIcon)(iconSizes);
const JiraHelpIcon = styled(HelpIcon)(iconSizes);
const JiraSettingsIcon = styled(SettingsApplicationsSharpIcon)(iconSizes);
const JiraAccountIcon = styled(AccountCircleIcon)(iconSizes);



export default function Header(props) {
	return (
		<AppBar position="static">
			<Box fixed>
				<JiraToolbar>
					<img src='./images/jira-software.png' width='150' height='30' loading='lazy' alt='Jira Software' />
					<Box ml={3} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						<MenuButton menuText="Dashboards" itemsList={[{text: 'View System DashBoard', hasDivider: true}, {text: 'Manage Dashboards'}]} />
						<MenuButton menuText="Projects" itemsList={[
							{text: 'TST (TST)', subheader: 'Current project', hasDivider: true, icon: <RocketLaunchIcon fontSize='small' />},
							{text: 'Software', icon: <ExpandCircleDownIcon />},
							{text: 'Business', icon: <PendingIcon />, hasDivider: true},
							{text: 'View All Projects', hasDivider: true},
							{text: 'Import External Project'},
							{text: 'Create project'},
						]} />
						<MenuButton menuText="Issues" itemsList={[
							{text: 'Search for issues', hasDivider: true},
							{text: 'Archived issues', hasDivider: true},
							{text: 'TST-1 TST-1', subheader: 'Recent issues', icon: <PendingIcon />, hasDivider: true},
							{text: 'Import Issues from SVG', hasDivider: true},
							{text: 'My open issues', subheader: 'Filters'},
							{text: 'Reported by me', hasDivider: true},
							{text: 'Manage filters'}
						]} />
						<MenuButton menuText="Boards" itemsList={[{text: 'View all boards'}]} />
						<MenuButton menuText="Git" itemsList={[
							{text: 'jiragit-test-data', subheader: 'Current repository', hasDivider: true},
							{text: 'jiragit-test-data', subheader: 'Favorite repositories', hasDivider: true},
							{text: 'jiragit-test-data', subheader: 'Recent repositories'},
							{text: 'ofrolenko-test/git-test', hasDivider: true},
							{text: 'Repository browser'},
							{text: 'Manage repositories'}
						]} />
						<HeaderButton color="inherit" >DbConsole</HeaderButton>
						<CreateButton color="inherit" variant="outlined">Create</CreateButton>
					</Box>
					<SearchView />
					<HeaderIconButton>
						<JiraCampaignIcon />
					</HeaderIconButton>
					<HeaderIconButton>
						<JiraHelpIcon />
					</HeaderIconButton>
					<HeaderIconButton>
						<JiraSettingsIcon />
					</HeaderIconButton>
					<HeaderIconButton>
						<JiraAccountIcon />
					</HeaderIconButton>
				</JiraToolbar>
			</Box>
		</AppBar>
	);
};
