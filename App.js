
import { useEffect, useState } from "react";
import { Button, SectionList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
      console.warn("Hello world")
  },[])
  return (
    <View>
      <Text style={styles.container}>Life Cycle With UseEffect</Text>
      <Text style={styles.counting}>{count}</Text>

      <Button title="Update" onPress={()=>setCount(count+1)}/>
      <View style={styles.resets} /> 
        <Button title="reset" onPress={()=>setCount(0)} />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    fontSize: 20,
    marginTop:40,
    padding:20,
    color:"white"
  },
  counting:{
    fontSize:40,
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    marginTop:200,
    marginBottom:100,
    padding:50,

  },
  resets:{
    marginTop:50,
  }
});
