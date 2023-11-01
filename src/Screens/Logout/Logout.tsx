import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import { useAppContext } from '../../auth'

const Logout = () => {
      const {dispatch} = useAppContext()
      
      const handleLogout = ()=>{
            dispatch({type: "LOGOUT"})
      }
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
            <TouchableOpacity onPress={handleLogout}>
                  <Text>Log Out</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Logout