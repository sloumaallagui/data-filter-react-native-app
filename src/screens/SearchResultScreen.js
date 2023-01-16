
import  React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { WebView } from 'react-native-webview';
import DataService from '../services/DataService';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchResultScreen({props}) {
   
    const [table, setTableData ]= useState(null,[]);
    const webViewRef = useRef();
     AsyncStorage.getItem('penAuxValue').then((value) => {

      console.log("value"+value);
    });
    //const [data, setData] = useState([],[]);
    
    let data= JSON.parse(DataService.data);
    data = data.Feuil1;    // make a html tab in a string and fill it with saved asyncStorage data
     let tab = '<table class="table table-striped table-bordered table-hover table-sm" style="width:100%;font-size: 12px;">';
    // table head will be the first row of the data
    tab += '<thead class="thead-dark">';  
    tab += '<tr>';
    console.log(" data 0"+ JSON.stringify(data.length) );
    // foreach data[0] key and add it to table
    let keys=[]
    for (let k in data[0]) {
        tab += '<th>' + k + '</th>';
        keys.push(k);
    }
    tab += '</tr>';
    tab += '</thead>';
    // table body
    tab += '<tbody>';
    for (let i=0;i< data.length;i++) {

        tab += '<tr>';
      

            for(let key of keys ){
              tab += '<td>' + data[i][key]+ '</td>';
            }
          
      
       
        
        tab += '</tr>';
    } 
    tab += '</tbody>';

    //console.log(data);
    //console.log(data[0]);
    useEffect(()=>{
      setTableData(tab);
      webViewRef.current.reload();
      console.log("use effect");
    }, [])
  





    return (
      <View style={{ flex: 1 }} >
        <Button title="Go to Details" onPress={() => props.navigation.navigate('Recherche')} />
      <View style={{ flex: 1 }}>
       <WebView
            bounces={false}
            ref={(ref) => (webViewRef.current = ref)}
              showsHorizontalScrollIndicator={false}
              originWhitelist={['*']}
              javaScriptEnabled={true}
              injectedJavaScript={`
                   document.getElementById('main').innerHTML='${table}'`}
              domStorageEnabled={true}
              source={{ html: HEADER +FOOTER }}
              
            />
        
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
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