import {Container, Divider, Typography, Box} from "@mui/material";
import * as React from "react";
import RepositoriesList from "./RepositoriesList";
import AutoConnectMenu from "./AutoConnectMenu";
import ActionButtons from "./ActionButtons";

export default function PageContent(props) {
	return (
		<Container>
			<Typography variant='h5' pt={'40px'} >Manage repositories</Typography>
			<Divider />
			<AutoConnectMenu />
			<ActionButtons />
			<Box sx={{
				pt: '30px'
			}}>
				<main>
					TEST changes in repos list // TODO check repositories list changes
					<RepositoriesList />
				</main>
			</Box>
		</Container>
	)
}
