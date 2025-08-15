import './App.css';
import * as React from 'react';
import Header from "./components/Header";
import {Box, Typography} from "@mui/material";
import NavTabs from "./components/Tabs";
import AppNavi from "./components/AppNavi";
import PageContent from "./components/PageContent";

import {ThemeProvider} from "@emotion/react";
import {JiraTheme} from "./Theme";

function App(props) {

  const customTheme = JiraTheme;

  return (
  	<ThemeProvider theme={customTheme} >
  	<Box fixed>
	  <Header />
	  <Box sx={{padding: '10px;'}}>
		  <Typography variant='h5'>Administration</Typography>
	  </Box>
	  <NavTabs />
	  <Box sx={{display: 'flex'}}>
		  <Box style={{width: '240px'}}>
		    <AppNavi />
		  </Box>
		  <Box style={{flexGrow: 1}}>
			  <PageContent />
		  </Box>
	  </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
