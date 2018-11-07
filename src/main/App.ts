import {StackNavigator} from 'react-navigation'
import MainTab from "./pages/MainTab";

const App = StackNavigator({
    MainTab: {
        screen: MainTab,
        navigationOptions: {
            header: null,
        }
    }
})

export default App;