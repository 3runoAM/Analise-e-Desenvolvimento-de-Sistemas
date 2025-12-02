import {Platform} from 'react-native'
import AppNavigator from './src/navigation/AppNavigation';
import {SafeAreaView} from 'react-native-safe-area-context'

export default function App() {
    function SafeArea({children}) {
        const platform = Platform.OS;

        if (platform === 'web') {
            return children;
        }

        return (
            <SafeAreaView style={{flex: 1}}>
                {children}
            </SafeAreaView>);
    }

    return (
        <SafeArea>
            <AppNavigator/>
        </SafeArea>
    )
}