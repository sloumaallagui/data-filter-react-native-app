import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { ScrollView, TouchableOpacity as TO } from 'react-native-gesture-handler';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataService from './src/services/DataService';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';
import { Checkbox } from 'react-native-paper';



const Stack = createStackNavigator();

  function SearchResultScreen(props) {

  const [table, setTableData ]= useState(null,null);
  const webViewRef = useRef();
  if(table == null ){
    let titres = ["Marque","Axe","Entraxe","Têtière","Côte D","Système de verrouillage","Crochet","Tringles","Pêne auxiliaire","Pêne dormant","Nbre de galets","Longueur","Carré","Référence constructeur","Dénomination","Commentaires","Foussier"];
    let selected =new Array(titres.length).fill(false);
    let values =new Array(titres.length).fill("*");
    let data= JSON.parse(DataService.data);
    data = data.Feuil1;  
    let tab, keys=[], f=0;
      // make a html tab in a string and fill it with saved asyncStorage data
    tab = '<table class="table table-striped table-bordered table-hover table-sm" style="width:100%;font-size: 12px;"><thead class="thead-dark"><tr>';
      for (let k of titres) {
            tab += '<th>' + k + '</th>';
            keys.push(k);
      }
      tab += '</tr></thead><tbody>';

      for (let i=0;i< data.length;i++) {
        tab += '<tr>';
        f=0;
        let selectedAtt="", valuesAtt="";
        for(let key of keys ){
          selectedAtt= data?.[i]?.[key] != undefined && selected[key] != "false"? true : false;
          valuesAtt = data[i]?.[key] != undefined && (data[i]?.[key].indexOf(values[f]) != -1 || values[f]=="*" )? true : false;
          if( selectedAtt && valuesAtt){ 
            tab += '<td>' + data[i][key]+ '</td>';
          }else{
            tab += '<td></td>';
          }
          f++;
        }
        tab += '</tr>';
      } 
      tab += '</tbody>';
      setTableData(tab);
      console.log("table was null");
    }

 
async function getTableData(){

      await AsyncStorage.getItem('table').then( (value) => {
          if(value != null){
            setTableData(value);
          }
          
          
        });
      }

 

  


  useEffect( () => {
    AsyncStorage.clear()
    console.log("call to useEffect() ResultatScreen");
    setInterval(function() { getTableData();}, 1000);
    webViewRef.current.reload();
    

  }, []);





// export html table stored in AsyncStorage to csv file
  const exportTableAsPdf = async () => {
    let data = await AsyncStorage.getItem('table');
    let html = data==null? table : data;
    let pdf = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(pdf.uri);

  
  };


  return (
    <View style={{ flex: 1 }} >
      <View style={{ flexDirection: "row",flexWrap:"nowrap" }}>
    <View style={styles.buttonStyle}>
    <Button title="Exporter" onPress={ () =>  exportTableAsPdf()} />
    </View>
    <View style={styles.buttonStyle}>
    <Button title="Actualiser" onPress={() => webViewRef.current.reload()}  />
    </View>
    <View style={styles.buttonStyle}>
    <Button title="Rechercher" onPress={() => props.navigation.navigate('Recherche')} />
    </View>
     
    
    

</View>
      
      
    <View style={{ flex: 1 }}>
     <WebView
          bounces={false}
          ref={(ref) => (webViewRef.current = ref)}
            showsHorizontalScrollIndicator={false}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            injectedJavaScript={`
            setInterval(function() {
              document.getElementById('main').innerHTML='${table}';}, 1000);
                 `}
            domStorageEnabled={true}
            source={{ html: HEADER +FOOTER }}
            
          />
      
    </View>
    </View>
  );
}



/**
 *  *************** search param screen **************************
 *  *************** search param screen **************************
 */

 function SearchParamScreen(props) {
  let [nbGaletSelected, setNbGaletSelected] = useState(false);
  let [nbGaletValue, setNbGaletValue] = useState("*");

  let [longeurSelected, setLongeurSelected] = useState(false);
  let [longeurValue, setLongeurValue] = useState("*");

  let [refConstructeurSelected, setRefConstructeurSelected] = useState(false);
  let [refConstructeurValue, setRefConstructeurValue] = useState("*");

  let [denominationSelected, setDenominationSelected] = useState(false);
  let [denominationValue, setDenominationValue] = useState("*");

  let [commentairesSelected, setCommentairesSelected] = useState(false);
  let [commentairesValue, setCommentairesValue] = useState("*");

  let [foussierSelected, setFoussierSelected] = useState(false);
  let [foussierValue, setFoussierValue] = useState("*");

  let [entraxeSelected, setEntraxeSelected] = useState(false);
  let [entraxeValue, setEntraxeValue] = useState("*");

  let [tetiereSelected, setTetiereSelected] = useState(false);
  let [tetiereValue, setTetiereValue] = useState("*");

  let [axeSelected, setAxeSelected] = useState(false);
  let [axeValue, setAxeValue] = useState("*");

  let [marqueSelected, setMarqueSelected] = useState(false);
  let [marqueValue, setMarqueValue] = useState("*");

  let [coteDSelected, setCoteDSelected] = useState(false);
  let [coteDValue, setCoteDValue] = useState("*");

  let [sysVerSelected, setSysVerSelected] = useState(false);
  let [sysVerValue, setSysVerValue] = useState("*");

  let [tringlesSelected, setTringlesSelected] = useState(false);
  let [tringlesValue, setTringlesValue] = useState("*");

  let [crochetSelected, setCrochetSelected] = useState(false);
  let [crochetValue, setCrochetValue] = useState("*");

  let [penAuxSelected, setPenAuxSelected] = useState(false);
  let [penAuxValue, setPenAuxValue] = useState("*");

  let [penDormSelected, setPenDormSelected] = useState(false);
  let [penDormValue, setPenDormValue] = useState("*");

  let [carreSelected, setCarreSelected] = useState(false);
  let [carreValue, setCarreValue] = useState("*");

  let [allcheck, setAllcheck] = useState(true);


 
  // method to store all selected values in AsyncStorage
  async function storeData() {
      console.log("call to storeData()");
      let titres = ["Marque","Axe","Entraxe","Têtière","Côte D","Système de verrouillage","Crochet","Tringles","Pêne auxiliaire","Pêne dormant","Nbre de galets","Longueur","Carré","Référence constructeur","Dénomination","Commentaires","Foussier"];
      let selected = [marqueSelected,axeSelected,entraxeSelected,tetiereSelected,coteDSelected,sysVerSelected,crochetSelected,tringlesSelected,penAuxSelected,penDormSelected,nbGaletSelected,longeurSelected,carreSelected,refConstructeurSelected,denominationSelected,commentairesSelected,foussierSelected];
      let values = [marqueValue,axeValue,entraxeValue,tetiereValue,coteDValue,sysVerValue,crochetValue,tringlesValue,penAuxValue,penDormValue,nbGaletValue,longeurValue,carreValue,refConstructeurValue,denominationValue,commentairesValue,foussierValue];
      let data= JSON.parse(DataService.data);
      data = data.Feuil1;  
      let tab, keys=[], f=0;
      tab = '<table class="table table-striped table-bordered table-hover table-sm" style="width:100%;font-size: 12px;"><thead class="thead-dark"><tr>';
        for (let k in titres) {
                if(selected[k] != false){
                    tab += '<th>' + titres[k] + '</th>';
                    keys.push(titres[k])
                }
        }
      tab += '</tr></thead><tbody>';
        let valuesAtt=false;
      labelfor:for (let i=0;i< data.length;i++) {
        for(let key of keys ){
          valuesAtt = data[i]?.[key] == undefined && key != "Tringles"  || (data?.[i]?.[key]?.indexOf(values[titres.indexOf(key)]) == -1 && values[titres.indexOf(key)]!="*" ) ? true : false;
          if(valuesAtt) continue labelfor;
        }
        tab += '<tr>';
        f=0;
        let selectedAtt="";
        for(let key of keys ){
          selectedAtt= data?.[i]?.[key] != undefined && selected[titres.indexOf(key)] != false? true : false;
         
          if( selectedAtt ){ 
            tab += '<td>' + data[i][key]+ '</td>';
          }else{
            tab += '<td></td>';
          }
          f++;
        }
        tab += '</tr>';
      } 
      tab += '</tbody>';
      tab += '</table>';
      await AsyncStorage.setItem("table", tab);
      console.log("end call to storeData()");
  }

  // use effect to call storeData method when state changes
  useEffect(() => {

    storeData();

  }, [nbGaletSelected, nbGaletValue, longeurSelected, longeurValue, refConstructeurSelected, refConstructeurValue, denominationSelected, denominationValue, commentairesSelected, commentairesValue, foussierSelected, foussierValue, entraxeSelected, entraxeValue, tetiereSelected, tetiereValue, axeSelected, axeValue, marqueSelected, marqueValue, coteDSelected, coteDValue, sysVerSelected, sysVerValue, tringlesSelected, tringlesValue, crochetSelected, crochetValue, penAuxSelected, penAuxValue, penDormSelected, penDormValue, carreSelected, carreValue]);

  
  
  return (

      <ScrollView style={{ inline, margin: 10 }}>
        <Text style={{fontSize:18,textAlign:"center",marginBottom:20}}> Menu Rechercher</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
        <View>
          
          <Text style={{textAlign:"center",marginBottom:10}}><Checkbox 
            onPress={() => {setAllcheck(!allcheck); 
              setAxeSelected(allcheck);setEntraxeSelected(allcheck); setTetiereSelected(allcheck);setCoteDSelected(allcheck);
              setSysVerSelected(allcheck);setCrochetSelected(allcheck);setTringlesSelected(allcheck);setPenAuxSelected(allcheck); setPenDormSelected(allcheck); setNbGaletSelected(allcheck); setLongeurSelected(allcheck);setCarreSelected(allcheck);setRefConstructeurSelected(allcheck); setDenominationSelected(allcheck);setCommentairesSelected(allcheck); setFoussierSelected(allcheck);
            }}
            status={!allcheck ? 'checked' : 'unchecked'}
          />  { allcheck ? `Selectionner tous`:`Deslectionner tous`}</Text>
          
         </View>
        
        <View>
          <Text><Checkbox
            value={nbGaletSelected}
            onPress={() => setNbGaletSelected(!nbGaletSelected)}
            status={nbGaletSelected ? 'checked' : 'unchecked'}
          />  {`Nombres de galet`}</Text>
        </View>

        <TextInput
          style={styles.input}
          onPress={() => setNbGaletSelected(!nbGaletSelected)}
          onChangeText={(text) => setNbGaletValue(text)}
          value={nbGaletValue}
          placeholder=""
        />
        <View>

          <Text><Checkbox
            value={carreSelected}
            onPress={() => setCarreSelected(!carreSelected)}
            onValueChange={setCarreSelected}
            style={{ marginTop: 10 }}
            status={carreSelected ? 'checked' : 'unchecked'}
          /> {`carré`}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCarreValue(text)}
          value={carreValue}
          placeholder=""
        />

        <Text><Checkbox
          value={longeurSelected}
          onPress={() => setLongeurSelected(!longeurSelected)}
          onValueChange={setLongeurSelected}
          style={{ marginTop: 10 }}
          status={longeurSelected ? 'checked' : 'unchecked'}
        /> {`longeur`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLongeurValue(text)}
          value={longeurValue}
          placeholder=""
        />

        <Text> <Checkbox
          value={refConstructeurSelected}
          onPress={() => setRefConstructeurSelected(!refConstructeurSelected)}
          onValueChange={setRefConstructeurSelected}
          style={{ marginTop: 10 }}
          status={refConstructeurSelected ? 'checked' : 'unchecked'}
        />  {`Référence constructeur`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRefConstructeurValue(text)}
          value={refConstructeurValue}
          placeholder=""
        />

        <Text><Checkbox
          value={denominationSelected}
          onPress={() => setDenominationSelected(!denominationSelected)}
          onValueChange={setDenominationSelected}
          style={{ marginTop: 10 }}
          status={denominationSelected ? 'checked' : 'unchecked'}
        />  {`Dénomination`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDenominationValue(text)}
          value={denominationValue}
          placeholder=""
        />

        <Text><Checkbox
          value={commentairesSelected}
          onPress={() => setCommentairesSelected(!commentairesSelected)}
          onValueChange={setCommentairesSelected}
          style={{ marginTop: 10 }}
          status={commentairesSelected ? 'checked' : 'unchecked'}
        />  {`Commentaires`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCommentairesValue(text)}
          value={commentairesValue}
          placeholder=""
        />

        <Text><Checkbox
          value={foussierSelected}
          onPress={() => setFoussierSelected(!foussierSelected)}
          onValueChange={setFoussierSelected}
          style={{ marginTop: 10 }}
          status={foussierSelected ? 'checked' : 'unchecked'}
        /> {`Foussier`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFoussierValue(text)}
          value={foussierValue}
          placeholder=""
        />

        <Text><Checkbox
          value={entraxeSelected}
          onPress={() => setEntraxeSelected(!entraxeSelected)}
          onValueChange={setEntraxeSelected}
          style={{ marginTop: 10 }}
          status={entraxeSelected ? 'checked' : 'unchecked'}
        />  {`Entraxe`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEntraxeValue(text)}
          value={entraxeValue}
          placeholder=""
        />

        <Text><Checkbox
          value={axeSelected}
          onPress={() => setAxeSelected(!axeSelected)}
          onValueChange={setAxeSelected}
          style={{ marginTop: 10 }}
          status={axeSelected ? 'checked' : 'unchecked'}
        />  {`Axe`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAxeValue(text)}
          value={axeValue}
          placeholder=""
        />

        <Text><Checkbox
          value={sysVerSelected}
          onPress={() => setSysVerSelected(!sysVerSelected)}
          onValueChange={setSysVerSelected}
          style={{ marginTop: 10 }}
          status={sysVerSelected ? 'checked' : 'unchecked'}
        />  {`Système de verrouillage`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSysVerValue(text)}
          value={sysVerValue}
          placeholder=""
        />

        <Text><Checkbox
          value={penDormSelected}
          onPress={() => setPenDormSelected(!penDormSelected)}
          onValueChange={setPenDormSelected}
          style={{ marginTop: 10 }}
          status={penDormSelected ? 'checked' : 'unchecked'}
        />  {`Pente de dormants`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPenDormValue(text)}
          value={penDormValue}
          placeholder=""
        />

        <Text><Checkbox
          value={penAuxSelected}
          onPress={() => setPenAuxSelected(!penAuxSelected)}
          onValueChange={setPenAuxSelected}
          style={{ marginTop: 10 }}
          status={penAuxSelected ? 'checked' : 'unchecked'}
        />  {`Pente auxilliaire`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPenAuxValue(text)}
          value={penAuxValue}
          placeholder=""
        />

        <Text><Checkbox
          value={tringlesSelected}
          onPress={() => setTringlesSelected(!tringlesSelected)}
          onValueChange={setTringlesSelected}
          style={{ marginTop: 10 }}
          status={tringlesSelected ? 'checked' : 'unchecked'}
        />  {`Tringles`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTringlesValue(text)}
          value={tringlesValue}
          placeholder=""
        />

        <Text><Checkbox
          value={crochetSelected}
          onPress={() => setCrochetSelected(!crochetSelected)}
          onValueChange={setCrochetSelected}
          style={{ marginTop: 10 }}
          status={crochetSelected ? 'checked' : 'unchecked'}
        />  {`Crochet`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCrochetValue(text)}
          value={crochetValue}
          placeholder=""
        />

        <Text><Checkbox
          value={refConstructeurSelected}
          onPress={() => setRefConstructeurSelected(!refConstructeurSelected)}
          onValueChange={setRefConstructeurSelected}
          style={{ marginTop: 10 }}
          status={refConstructeurSelected ? 'checked' : 'unchecked'}
        />  {`Référence constructeur`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRefConstructeurValue(text)}
          value={refConstructeurValue}
          placeholder=""
        />

        <Text><Checkbox
          value={tetiereSelected}
          onPress={() => setTetiereSelected(!tetiereSelected)}
          onValueChange={setTetiereSelected}
          style={{ marginTop: 10 }}
          status={tetiereSelected ? 'checked' : 'unchecked'}
        />  {`Tetiere`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTetiereValue(text)}
          value={tetiereValue}
          placeholder=""
        />

        <Text><Checkbox
          value={marqueSelected}
          onPress={() => setMarqueSelected(!marqueSelected)}
          onValueChange={setMarqueSelected}
          style={{ marginTop: 10 }}
          status={marqueSelected ? 'checked' : 'unchecked'}
        />  {`Marque`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMarqueValue(text)}
          value={marqueValue}
          placeholder=""
        />

        <Text><Checkbox
          value={coteDSelected}
          onPress={() => setCoteDSelected(!coteDSelected)}
          onValueChange={setCoteDSelected}
          style={{ marginTop: 10 }}
          status={coteDSelected ? 'checked' : 'unchecked'}
        />  {`Cote D`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCoteDValue(text)}
          value={coteDValue}
          placeholder=""
        />
        <Button title="Enregister les paramètres" onPress={()=>{  storeData().then(()=>props.navigation.navigate("Accueil")) }} />
      </ScrollView>
   
  );
}



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil" detachInactiveScreens>
        <Stack.Screen name="Accueil" component={SearchResultScreen} 

         />
        <Stack.Screen name="Recherche" component={SearchParamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    placeholderTextColor: "gray",
    margin: 10,
    marginTop: 10,
    borderRadius: 5,
    underlineColorAndroid: "transparent",
    placeholderTextColor: "#9a73ef",
    paddingLeft: 5,
    borderColor: "#DEE4EBF0",
    borderWidth: 2
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  buttonStyle: {
    backgroundColor: "#DEE4EBF0",
    borderWidth: 0,
    color: "#DEE4EBF0",
    borderColor: "#DEE4EBF0",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,

  },
});
const HEADER = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport"content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=1">
    <title>ISSATSO NEWS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body >
<center >
<div id="main">
</div>
`
const FOOTER = `
</center>
</body>
</html>`
export default App;
