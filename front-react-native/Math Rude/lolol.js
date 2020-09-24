const Navigator = createStackNavigator({
    Login:{
        screen:Login, 
        navigationOptions:{
          header:false
        }
    }
});

          
export default class App extends Component {
    render() {
        return (
            <Navigator/>
    
        );
    }
}