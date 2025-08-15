import {Box, Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader} from "@mui/material";

const data = [
	{items: ['Version & licenses', 'Plan your upgrade', 'Application access']},
	{group: 'Jira Software', items: ['Jira software configuration']},
	{group: 'Integrations', items: ['Application links', 'DVCS accounts', 'Bamboo configuration', 'FishEye', 'Perforce']},
	{group: 'Git Integration for Jira', items: ['Git repositories', 'SSH keys', 'General settings', 'Webhooks']}
]


export default function AppNavi(props) {
	return (
		<Box sx={{ width: '240px', borderRight: 1, borderColor: 'divider', fontSize: '10px' }}>
			{data.map((list, index) => (
				<List key={index}>
					{ list.group && <ListSubheader key={list.group} >{list.group.toUpperCase()}</ListSubheader> }
					{
					list.items.map((text, index) => (
						<ListItem key={text + index} disablePadding>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))
					}
				</List>
			))}
			<Divider />
			<List>
				<ListItem key='Application Navigator' disablePadding>
						<ListItemButton>
							<ListItemText primary='Application Navigator' />
						</ListItemButton>
				</ListItem>

			</List>
		</Box>
	)
}
