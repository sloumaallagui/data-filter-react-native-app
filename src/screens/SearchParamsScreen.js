
import * as React from 'react';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { View, Text, Button, StyleSheet, } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';
import { AsyncStorage } from '@react-native-async-storage/async-storage'


export default function SearchParamScreen(props)  {
  const [nbGaletSelected, setNbGaletSelected] = useState(false);
  const [nbGaletValue, setNbGaletValue] = useState('*');

  const [longeurSelected, setLongeurSelected] = useState(false);
  const [longeurValue, setLongeurValue] = useState('*');

  const [refConstructeurSelected, setRefConstructeurSelected] = useState(false);
  const [refConstructeurValue, setRefConstructeurValue] = useState('*');

  const [denominationSelected, setDenominationSelected] = useState(false);
  const [denominationValue, setDenominationValue] = useState('*');

  const [commentairesSelected, setCommentairesSelected] = useState(false);
  const [commentairesValue, setCommentairesValue] = useState('*');

  const [foussierSelected, setFoussierSelected] = useState(false);
  const [foussierValue, setFoussierValue] = useState('*');

  const [entraxeSelected, setEntraxeSelected] = useState(false);
  const [entraxeValue, setEntraxeValue] = useState('*');

  const [tetiereSelected, setTetiereSelected] = useState(false);
  const [tetiereValue, setTetiereValue] = useState('*');

  const [axeSelected, setAxeSelected] = useState(false);
  const [axeValue, setAxeValue] = useState('*');

  const [marqueSelected, setMarqueSelected] = useState(false);
  const [marqueValue, setMarqueValue] = useState('*');

  const [coteDSelected, setCoteDSelected] = useState(false);
  const [coteDValue, setCoteDValue] = useState('*');

  const [sysVerSelected, setSysVerSelected] = useState(false);
  const [sysVerValue, setSysVerValue] = useState('*');

  const [tringlesSelected, setTringlesSelected] = useState(false);
  const [tringlesValue, setTringlesValue] = useState('*');

  const [crochetSelected, setCrochetSelected] = useState(false);
  const [crochetValue, setCrochetValue] = useState('*');

  const [penAuxSelected, setPenAuxSelected] = useState(false);
  const [penAuxValue, setPenAuxValue] = useState('*');

  const [penDormSelected, setPenDormSelected] = useState(false);
  const [penDormValue, setPenDormValue] = useState('*');

  const [carreSelected, setCarreSelected] = useState(false);
  const [carreValue, setCarreValue] = useState('*');
  // method to store all selected values in AsyncStorage
  async function storeData() {
    try {
      await AsyncStorage.setItem('nbGaletSelected', nbGaletSelected);
      await AsyncStorage.setItem('nbGaletValue', nbGaletValue);
      await AsyncStorage.setItem('longeurSelected', longeurSelected);
      await AsyncStorage.setItem('longeurValue', longeurValue);
      await AsyncStorage.setItem('refConstructeurSelected', refConstructeurSelected);
      await AsyncStorage.setItem('refConstructeurValue', refConstructeurValue);
      await AsyncStorage.setItem('denominationSelected', denominationSelected);
      await AsyncStorage.setItem('denominationValue', denominationValue);
      await AsyncStorage.setItem('commentairesSelected', commentairesSelected);
      await AsyncStorage.setItem('commentairesValue', commentairesValue);
      await AsyncStorage.setItem('foussierSelected', foussierSelected);
      await AsyncStorage.setItem('foussierValue', foussierValue);
      await AsyncStorage.setItem('entraxeSelected', entraxeSelected);
      await AsyncStorage.setItem('entraxeValue', entraxeValue);
      await AsyncStorage.setItem('tetiereSelected', tetiereSelected);
      await AsyncStorage.setItem('tetiereValue', tetiereValue);
      await AsyncStorage.setItem('axeSelected', axeSelected);
      await AsyncStorage.setItem('axeValue', axeValue);
      await AsyncStorage.setItem('marqueSelected', marqueSelected);
      await AsyncStorage.setItem('marqueValue', marqueValue);
      await AsyncStorage.setItem('coteDSelected', coteDSelected);
      await AsyncStorage.setItem('coteDValue', coteDValue);
      await AsyncStorage.setItem('sysVerSelected', sysVerSelected);
      await AsyncStorage.setItem('sysVerValue', sysVerValue);
      await AsyncStorage.setItem('tringlesSelected', tringlesSelected);
      await AsyncStorage.setItem('tringlesValue', tringlesValue);
      await AsyncStorage.setItem('crochetSelected', crochetSelected);
      await AsyncStorage.setItem('crochetValue', crochetValue);
      await AsyncStorage.setItem('penAuxSelected', penAuxSelected);
      await AsyncStorage.setItem('penAuxValue', penAuxValue);
      await AsyncStorage.setItem('penDormSelected', penDormSelected);
      await AsyncStorage.setItem('penDormValue', penDormValue);
      await AsyncStorage.setItem('carreSelected', carreSelected);
      await AsyncStorage.setItem('carreValue', carreValue);
    } catch (e) {
      // saving error
    }
  }

  // use effect to call storeData method when state changes
  useEffect(() => {
    storeData();
  }, [nbGaletSelected, nbGaletValue, longeurSelected, longeurValue, refConstructeurSelected, refConstructeurValue, denominationSelected, denominationValue, commentairesSelected, commentairesValue, foussierSelected, foussierValue, entraxeSelected, entraxeValue, tetiereSelected, tetiereValue, axeSelected, axeValue, marqueSelected, marqueValue, coteDSelected, coteDValue, sysVerSelected, sysVerValue, tringlesSelected, tringlesValue, crochetSelected, crochetValue, penAuxSelected, penAuxValue, penDormSelected, penDormValue, carreSelected, carreValue]);



  return (
    <DrawerContentScrollView {...props}>
    <View style={{ flex: inline, margin: 10 }} >
      <View>
      <Checkbox
          value={nbGaletSelected}
          onValueChange={setNbGaletSelected}/> 
        <View><Text>{`Search by Title`}</Text></View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setNbGaletValue(text)}
        value={nbGaletValue}
        placeholder=""
      /> <View>
        <Checkbox
          value={carreSelected}
          onValueChange={setCarreSelected}
          style={{ marginTop: 10 }}
        /> 
        <View><Text>{`Search by Title`}</Text></View>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={text => setCarreValue(text)}
        value={carreValue}
        placeholder=""
      />
      <Checkbox
        value={longeurSelected}
        onValueChange={setLongeurSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Search by Title`}</Text></View>

      <TextInput
        style={styles.input}
        onChangeText={text => setLongeurValue(text)}
        value={longeurValue}
        placeholder=""
      />
      <Checkbox
        value={refConstructeurSelected}
        onValueChange={setRefConstructeurSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Référence constructeur`}</Text></View>

      <TextInput
        style={styles.input}
        onChangeText={text => setRefConstructeurValue(text)}
        value={refConstructeurValue}
        placeholder=""
      />
      <Checkbox
        value={denominationSelected}
        onValueChange={setDenominationSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Dénomination`}</Text></View>


      <TextInput
        style={styles.input}
        onChangeText={text => setDenominationValue(text)}
        value={denominationValue}
        placeholder=""
      />
      <Checkbox
        value={commentairesSelected}
        onValueChange={setCommentairesSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Commentaires`}</Text></View>


      <TextInput
        style={styles.input}
        onChangeText={text => setCommentairesValue(text)}
        value={commentairesValue}
        placeholder=""
      />
      <Checkbox
        value={foussierSelected}
        onValueChange={setFoussierSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Foussier`}</Text></View>

      <TextInput

        style={styles.input}
        onChangeText={text => setFoussierValue(text)}
        value={foussierValue}
        placeholder=""
      />
      <Checkbox
        value={entraxeSelected}
        onValueChange={setEntraxeSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Entraxe`}</Text></View>

      <TextInput
        style={styles.input}
        onChangeText={text => setEntraxeValue(text)}
        value={entraxeValue}
        placeholder=""
      />
      <Checkbox
        value={axeSelected}
        onValueChange={setAxeSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Axe`}</Text></View>


      <TextInput
        style={styles.input}
        onChangeText={text => setAxeValue(text)}
        value={axeValue}
        placeholder=""
      />
      <Checkbox
        value={sysVerSelected}
        onValueChange={setSysVerSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Système de verrouillage`}</Text></View>


      <TextInput
        style={styles.input}
        onChangeText={text => setSysVerValue(text)}
        value={sysVerValue}
        placeholder=""
      />
      <Checkbox
        value={penDormSelected}
        onValueChange={setPenDormSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Pente de dormants`}</Text></View>


      <TextInput
        style={styles.input}
        onChangeText={text => setPenDormValue(text)}
        value={penDormValue}
        placeholder=""
      />
      <Checkbox
        value={penAuxSelected}
        onValueChange={setPenAuxSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Pente auxilliaire`}</Text></View>
      
      <TextInput
        style={styles.input}
        onChangeText={text => setPenAuxValue(text)}
        value={penAuxValue}
        placeholder=""
      />
      <Checkbox
        value={tringlesSelected}
        onValueChange={setTringlesSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Tringles`}</Text></View>

      <TextInput
        style={styles.input}
        onChangeText={text => setTringlesValue(text)}
        value={tringlesValue}
        placeholder=""
      />
      <Checkbox
        value={crochetSelected}
        onValueChange={setCrochetSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Crochet`}</Text></View>

      <TextInput

        style={styles.input}
        onChangeText={text => setCrochetValue(text)}
        value={crochetValue}
        placeholder=""
      />
      
 
      <Checkbox
        value={refConstructeurSelected}
        onValueChange={setRefConstructeurSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Référence constructeur`}</Text></View>
      <TextInput style={styles.input}
        onChangeText={text => setRefConstructeurValue(text)}
        value={refConstructeurValue}
        placeholder=""
      />
      <Checkbox
        value={tetiereSelected}
        onValueChange={setTetiereSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Tetiere`}</Text></View>
      <TextInput style={styles.input}
        onChangeText={text => setTetiereValue(text)}
        value={tetiereValue}
        placeholder=""
      />
      <Checkbox
        value={marqueSelected}
        onValueChange={setMarqueSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Marque`}</Text></View>
      <TextInput style={styles.input}
        onChangeText={text => setMarqueValue(text)}
        value={marqueValue}
        placeholder=""
      />
      <Checkbox
        value={coteDSelected}
        onValueChange={setCoteDSelected}
        style={{ marginTop: 10 }}
      />
      <View><Text>{`Cote D`}</Text></View>
      <TextInput style={styles.input}
        onChangeText={text => setCoteDValue(text)}
        value={coteDValue}
        placeholder=""
      />
    </View>
    <DrawerItemList {...props} />

  </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    margin: 10,
    marginTop: 10,
    borderRadius: 5,
    underlineColorAndroid : "transparent",
    placeholderTextColor :"#9a73ef"

  }
});