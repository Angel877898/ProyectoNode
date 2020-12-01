import React from 'react';
import AppRouter from '../routes/AppRouter';
import { DataProvider } from '../utils/DataContext';
const App = () => {
    return (
        <DataProvider>
            <AppRouter />
        </DataProvider>
    )
}

export default App;
