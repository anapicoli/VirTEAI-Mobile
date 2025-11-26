import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/drawer/CustomDrawer";

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
            }}
            drawerContent={(props) => (
                <CustomDrawer {...props} />
            )}
        />
    );
}