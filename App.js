import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Item = styled.TouchableHighlight`
  padding: 10px;
  flex-direction: row;
  
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const Quadrado = styled.View`
  flex = 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #00F;
  
`;

const Hello = ( ) => {

  const [ name, setName ] = useState ('');
  const [ backupName, setBackupName ] = useState ('');

  const [ curso, setCurso ] = useState ('');
  const [ backupCurso, setBackupCurso ] = useState ('');

  const [ disc, setDisc ] = useState ('');
  const [ backupDisc, setBackupDisc ] = useState ('');

  const [ nota1, setNota1 ] = useState ('');
  const [ backupNota1, setBackupNota1 ] = useState ('');

  const [ nota2, setNota2 ] = useState ('');
  const [ backupNota2, setBackupNota2 ] = useState ('');

  const [ faltas, setFaltas ] = useState ('');
  const [ backupFaltas, setBackupFaltas ] = useState ('');

  const [ total_presencas , setTotal_Presencas ] = useState ('');
  const [ backupTotal_Presencas, setBackupTotal_Presencas ] = useState (''); 

  const [ resultado , setResultado ] = useState ('');

  const [ mostrar , setMostrar ] = useState (false);

  const [ mostrar2 , setMostrar2 ] = useState (false);

  const handleClick = ()=> {
    setBackupName(name);
    setBackupCurso(curso);
    setBackupDisc(disc);
    setBackupNota1(nota1);
    setBackupNota2(nota2);
    setBackupFaltas(faltas);
    setBackupTotal_Presencas(total_presencas);
    if((nota1 + nota2) / 2 >= 7 && (faltas / total_presencas) * 100 <= 25) {
      setResultado('Aprovado');
    } else{
      setResultado('Reprovado');
    }
    setMostrar(true);
  }

  const handleClick2 = ()=> {
    setMostrar2(true);
  }

  return (
    <ScrollView>
      <Text> Nome Completo: </Text>
      <Input value = {name} onChangeText = {t => setName(t)}/>

      <Text> Curso: </Text>
      <Input value = {curso} onChangeText = {t => setCurso(t)}/>

      <Text> Disciplina: </Text>
      <Input value = {disc} onChangeText = {t => setDisc(t)}/>

      <Text> Nota 1: </Text>
      <Input value = {nota1} onChangeText = {t => setNota1(t)}/>

      <Text> Nota 2: </Text>
      <Input value = {nota2} onChangeText = {t => setNota2(t)}/>

      <Text> Faltas: </Text>
      <Input value = {faltas} onChangeText = {t => setFaltas(t)}/>

      <Text> Total de encontros: </Text>
      <Input value = {total_presencas} onChangeText = {t => setTotal_Presencas(t)}/>

      <Button title = "Mostrar Situação" onPress={handleClick}/>

      {mostrar &&
        <Quadrado>
          <Text style = {{fontWeight : 'bold'}}> Relatório Final</Text>
          <Text> Nome Completo: {backupName}</Text>
          <Text> Curso: {backupCurso}</Text>
          <Text> Disciplina: {backupDisc}</Text>
          <Text> 1º Nota: {backupNota1}</Text>
          <Text> 2º Nota: {backupNota2}</Text>
          <Text> Quantidade de Faltas: {backupFaltas}</Text>
          <Text> Quantidade de Presenças da Carga Horária: {backupTotal_Presencas}</Text>
          <Text> Situação do Aluno: {resultado}</Text>
          <Button title = "Mostrar Lista de Atividades" onPress={handleClick2}/>
        </Quadrado>
      }
      {mostrar2 &&
        <Quadrado>
          {lista.map((item, index) => {
            return(
              <Item key = {index} onPress = {()=>{}} underlayColor='transparent' activeOpacity={0.1}>
                <>
                  <ItemText>{item.task}</ItemText>
                  <ItemCheck></ItemCheck>
                </>
                
              </Item>
            );
          })}
        </Quadrado>
      } 
    </ScrollView>
  );
}

export default ()=> {
  return (
    <Page>
      <Hello />
    </Page>
  )
}
