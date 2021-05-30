import React, { useState } from 'react';
import theme from '../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserProvider } from './UserContext';
import ContentGrid from './ContentGrid';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Layout>
            <ContentGrid />
          </Layout>
        </DndProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
