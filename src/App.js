import { Box, Grid } from "@mui/material";
import LineChart from './components/Charts/LineChart';
import BarChart from './components/Charts/BarChart';
import PieChart from './components/Charts/PieChart';
import PolarAreaChart from './components/Charts/PolarAreaChart';
import StackedChart from './components/Charts/StackedChart';
import SalesLineChart from './components/Charts/SalesLineChart';

function App() {
  return (
    <Box>
      <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <LineChart/>
        </Grid>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <BarChart/>
        </Grid>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <StackedChart/>
        </Grid>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <SalesLineChart/>
        </Grid>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <PieChart/>
        </Grid>
        <Grid item xs={6} sx={{maxWidth: '400px'}}>
          <PolarAreaChart/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;