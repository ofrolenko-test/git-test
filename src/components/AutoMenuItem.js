import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {Link} from "@mui/material";

const HoverBox = styled(Box)(() => ({
	display: "inline-block",
	fontSize: "smaller",
	height: "76px",
	margin: "0 2px",
	padding: "12px 0",
	textAlign: "center",
	verticalAlign: "top",
	width: "100px",
	'&:hover': {
		background: "#fff",
		borderRadius: "8px",
	},
}))

const TextBox = styled(Box)(()=> ({
	alignItems: "center",
	display: "flex",
	fontSize: "12px",
	height: "33px",
	justifyContent: "center",
	margin: "0 auto",
	width: "91px"
}))


export default function AutoMenuItem(props) {
	const {label, title, imgSrc} = props;
	return (
		<HoverBox>
			<Link href="#" title={title} sx={{color: "#6B778C;", textDecoration: "none"}}>
				<Box><img src={"./images/" + imgSrc} width="48" height="48" /></Box>
				<TextBox>{label}</TextBox>
			</Link>
		</HoverBox>
	)
}