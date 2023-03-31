import Vehicle from "../hooks";
import {List, ListItem} from "@mui/material";

export default function VehiclesList({vehicles}: {vehicles: Vehicle[]}) {

    return (
        <List>
            {vehicles.map(vehicle => {
                return (
                    <ListItem key={vehicle.plate}>
                        {vehicle.plate} - {vehicle.kind}
                    </ListItem>
                )
            })}
        </List>
    )
}
