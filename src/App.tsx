import React from 'react';
import { Providers } from './Providers';
import { HomeView } from './views/Home'

function App() {
  return (
    <>
      <Providers>
        <HomeView></HomeView>
      </Providers>
    </>
  )
}

export default App;
