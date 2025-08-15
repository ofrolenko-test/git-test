import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from "@mui/material/styles";

const CustomTab = styled(Tab)({
	textTransform: 'none'
});

function LinkTab(props) {
	return (
		<CustomTab
			component="a"
			onClick={(e) => {
				e.preventDefault();
			}}
			{...props}
		/>
	);
}

export default function NavTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={value} onChange={handleChange} aria-label="Tas">
				<LinkTab label="Application" href="/app" />
				<LinkTab label="Projects" href="/projects" />
				<LinkTab label="Issues" href="/issue" />
				<LinkTab label="Manage Apps" href="/manage_apps" />
				<LinkTab label="User management" href="/manage_users" />
				<LinkTab label="Latest upgrade report" href="/reposr" />
				<LinkTab label="System" href="/system" />
			</Tabs>
		</Box>
	);
}
