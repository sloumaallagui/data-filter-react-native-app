
import  React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { WebView } from 'react-native-webview';
import DataService from '../services/DataService';

export default function SearchResultScreen({ navigation }) {
    //const [tableHead, tableData ]= useState(0,0);
    //const [data, setData] = useState([],[]);
    
    let data= JSON.parse(DataService.data);
    data = data.Feuil1;    // make a html table in a string and fill it with saved asyncStorage data
    let table = '<table class="table table-striped table-bordered table-hover table-sm" style="width:100%;font-size: 12px;">';
    // table head will be the first row of the data
    table += '<thead class="thead-dark>';  
    table += '<tr>';
    for (let i = 0; i < data[0].length; i++) {
        table += '<th>' + data[0][0] + '</th>';
    }
    table += '</tr>';
    table += '</thead>';
    // table body
    table += '<tbody>';
    for (let i = 1; i < data.length; i++) {

        table += '<tr>';
        for (let j = 0; j < data[i].length; j++) {
            table += '<td>' + data[i][j] + '</td>';
        }
        table += '</tr>';
    }
    table += '</tbody>';
    table += '</table>';
    //console.log(table);
    //console.log(data);
    console.log(data[0]);
    console.log(data[1]); 
    console.log(data);



    return (
      <View style={{ flex: 1 }}>
        <WebView
              showsHorizontalScrollIndicator={false}
              originWhitelist={['*']}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ html: HEADER +table+FOOTER }}
            />
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
     
     <meta name="viewport"content="width=device-width, initial-scale=0.45, maximum-scale=2, user-scalable=1">
     <title>ISSATSO NEWS</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
 </head>
 <body  >
 <center >
 `
const FOOTER = `
 </center>
 </body>
 </html>`