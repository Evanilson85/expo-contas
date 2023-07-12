import { NavigationContainer } from '@react-navigation/native'
import TabRouters from './tab.routes'

export const Route = () => {
    return (
        <NavigationContainer>
            <TabRouters/>
        </NavigationContainer>
    )
}