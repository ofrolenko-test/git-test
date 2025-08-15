import React from "react";
import Box from "@mui/material/Box";
import {Typography, useMediaQuery} from "@mui/material";
import {styled} from "@mui/styles";
import AutoMenuItem from "./AutoMenuItem";

const HelpBox = styled(Box)(() => ({
	background: '#edf1f8',
	borderRadius: '8px',
	display: 'inline-block',
	marginBottom: '20px',
	padding: '17px 15px',
	position: 'relative',
	textAlign: 'center',
}));

const HelpBoxTitle = styled(Typography)(() => ({
	color: '#6B778C',
	fontSize: '12px',
	fontWeight: 'bold',
	marginBottom: '6px',
	textAlign: 'center'
}))

const leftMenuItems = [
	{
		label: "GitHub",
		src: "github.svg"
	},
	{
		label: "GitLab",
		src: "gitlab.svg"
	},
	{
		label: "Microsoft",
		src: "microsoft.svg"
	},
	{
		label: "CodeCommit",
		src: "code-commit.svg"
	},
	{
		label: "Gerrit",
		src: "gerrit.svg"
	},
]


export default function AutoConnectMenu() {
	const matches = useMediaQuery('(min-width:1101px)');

	const wrapperStyles = matches ? {
		display: "inline-block"
	} : {
		display: "block",
		textAlign: "center"
	};

	const delimiterStyles = matches ? {
		borderLeft: "1px solid #ccc",
		height: "100%",
		top: 0
	} : {
		borderTop: "1px solid #ccc",
		left: 0,
		width: "100%"
	};

	return (
		<Box sx={{textAlign: 'center', pt: "30px"}}>
			<Box sx={{margin: '0 auto', maxWidth: '954px'}}>
			<HelpBox>
				<HelpBoxTitle>ADD NEW INTEGRATION</HelpBoxTitle>
				<Box sx={{flexWrap: "wrap",	position: "relative", ...wrapperStyles}}>
				{
					leftMenuItems.map(({label, src}, index) => {
						return <AutoMenuItem key={label+index} title={label} label={label} imgSrc={src} />
					})
				}
				<Box sx={matches ? {display: "inline-block", margin: "0 15px"} : {padding: "15px"}}>
					<Box sx={{...delimiterStyles, display: "inline-block", position: "absolute"}}></Box>
				</Box>
				<AutoMenuItem key="Git6" title="Git" label="Git" imgSrc="git-plain.svg" />
				</Box>
			</HelpBox>
			<HelpBox sx={{ml:'20px'}}>
				<HelpBoxTitle>ADD TRACKED FOLDER</HelpBoxTitle>
				<AutoMenuItem key="tracked7" title="Tracked folder" label="Tracked folder" imgSrc="./tracked-folder.svg" />
			</HelpBox>
			</Box>
		</Box>
	)
}