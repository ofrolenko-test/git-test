import {createTheme} from "@mui/material/styles";

export const JiraTheme = createTheme({
	palette: {
		primary: {
			main: '#0747a6',
		},
		secondary: {
			main: '#0052cc',
			dark: '#0065ff'
		},
		jiraGray: {
			main: 'rgb(235, 237, 240)',
			dark: 'rgba(9, 30, 66, 0.13)',
			contrastText: "#344563"
		}
	},
	typography: {
		body1: {
			color: '#42526e'
		}
	},
	components: {
		MuiToolbar: {
			styleOverrides: {
				root: {
					minHeight: '40px'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					paddingTop: '4px',
					paddingBottom: '4px'
				}
			}
		},
		MuiTableCell: {
			styleOverrides : {
				head: {
					padding: '10px 0',
					color: '#42526e'
				},
				root: {
					p: {
						fontSize: '14px',
					},
					padding: 0,
					lineHeight: 1
				}
			}
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					height: '0.8em',
					width: '0.8em'
				},
			}
		},
		MuiListSubheader: {
			styleOverrides: {
				root: {
					paddingTop: 0,
					paddingBottom: 0,
					lineHeight: '24px',
					fontSize: '13px'
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					paddingTop: 0,
					paddingBottom: 0,
					fontSize: '14px'
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: '14px'
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					paddingTop: '4px',
					paddingBottom: '4px',
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					padding: '0 10px',
					fontSize: '14px',
					fontWeigth: 900,
					lineHeight: '28px'
				}
			}
		}
	}
});
