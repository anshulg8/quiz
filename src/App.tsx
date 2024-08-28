import { useState } from 'react'
import { Button, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <Button colorScheme='blue' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav' bg=''>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='gold'>Aside</GridItem>
        </Show>

        <GridItem area='main' bg='dodgerblue'>Main</GridItem>
      </Grid>

    </>
  )
}

export default App
