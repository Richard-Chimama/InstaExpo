import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { useAppContext, apiEndPoint } from "../../auth";
import * as S from "./styled";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>(null);

  const {dispatch} = useAppContext()

  const handleSubmit = async() => {
    if (email.length > 0) {

      try{
        const response = await fetch(apiEndPoint + 'user/signin',{
          method: 'POST',
          body: JSON.stringify({email: email, password: password}),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        if(response.ok){
          let res = await response.json()
          if(res.token && res.id){
            dispatch({type:'LOGIN', payload:{
              token: res.token,
              id: res.id
            }})
          }else{
            throw new Error('invalid credentials!')
          }
        }
      }catch(error){
        setError('Invalid credential!')
        console.log(error)
      }
     

      console.log(email);
      console.log(password);
    } else {
      setError("Invalid email address!");
    }
  };

  return (
    <KeyboardAvoidingView>
      <View
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error && (
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          )}
          <S.InputContainer>
            <S.UserInput
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email.toLowerCase().trim())}
              onFocus={()=> setError(null)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.UserInput
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => setPassword(password)}
              onFocus={()=> setError(null)}
              clearTextOnFocus
            />
          </S.InputContainer>

          <TouchableOpacity style={{ alignSelf: "center", width: "70%" }}>
            <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
          </TouchableOpacity>

          <S.LoginButton onPress={handleSubmit}>
            <S.LoginText>Login</S.LoginText>
          </S.LoginButton>

          <S.SignUpText>
            <S.CreateAccount>Don't have an account yet?</S.CreateAccount>
            <S.ForgotPassword>Sign Up</S.ForgotPassword>
          </S.SignUpText>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
