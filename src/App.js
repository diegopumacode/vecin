import { Box } from "@chakra-ui/react";
import Footer from "./components/footer";
import RouterApp from "./router";

function App() {
  return (
    <Box minHeight={'100vh'} paddingBottom='20'>
      <RouterApp />
      <Footer/>
    </Box>
  );
}

export default App;
