import { NavigationContainer } from '@react-navigation/native'
import TabRouters from './tab.routes'
import { MyStack } from './Stack.routes'

export const Route = () => {
    return (
        <NavigationContainer>
            <MyStack/>
            {/* <TabRouters/> */}
        </NavigationContainer>
    )
}