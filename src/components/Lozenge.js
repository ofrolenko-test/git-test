import React from "react";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";


export default function Lozenge({type, text}) {
	const LozengeEl = styled(Box) (({theme})=> ({
		backgroundColor: '#42526e',
		borderSize: 0,
		borderRadius: '3px',
		color: '#fff',
		display: 'inline-block',
		fontSize: '11px',
		fontWeight: 700,
		lineHeight: 1,
		margin: 0,
		padding: '3px 5px 3px',
		textAlign: 'center',
		textDecoration: 'none',
		textTransform: 'uppercase',
		'&.success': {
			backgroundColor: '#00875a'
		},
		'&.error': {
			backgroundColor: '#bf2600'
		},
		'&.info': {
			backgroundColor: '#0052cc'
		},
		'&.complete': {
			backgroundColor: '#5243aa'
		}
	}))

	const getTypeByText = (text) => {
		return ['indexing', 'installing'].includes(text)
			? 'info' : ['updated'].includes(text)
				? 'success' : ['error'].includes(text)
					? 'error' : undefined;
	}

	return (
		<LozengeEl className={type || getTypeByText(text)}>{text}</LozengeEl>
	)
}