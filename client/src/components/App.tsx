import {Container} from "@mui/material";
import {useSocket} from "../hooks";
import Grid2 from "@mui/material/Unstable_Grid2";
import VehiclesList from "./VehiclesList";

export default function App() {
    const cars = useSocket('localhost:4000')
    const motors = useSocket('localhost:4001')

    return (
        <Container>
            <Grid2 container>
                <Grid2 xs={6}>
                    <VehiclesList vehicles={cars} />
                </Grid2>
                <Grid2 xs={6}>
                    <VehiclesList vehicles={motors} />
                </Grid2>
            </Grid2>
        </Container>
    )
}
