import { HeaderStack } from '../../components/headerStack'
import { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet  } from 'react-native';
import { NumericKeypad } from './numeric';
import { formatCurrency } from '../../utils/convertMoney';
import * as S from './style'
export const Financial = () => {
     
    const [activeTab, setActiveTab] = useState('tab1');
    const [inputValue, setInputValue] = useState('');

    const handleTabPress = (tab: string) => {
        setActiveTab(tab);
    };

    const handleNumericKeyPress = (value: number | string) => {
        if (value === '.') {
            if (inputValue.indexOf('.') === -1) {
                setInputValue((prevValue) => prevValue + value.toString());
            }
        } else {
            setInputValue((prevValue) => prevValue + value.toString());
        }
    };

    const handleDeletePress = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    };

    return (
    <S.container>
        <HeaderStack title=''/>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleTabPress('tab1')}>
                <Text style={{ padding: 10, color: activeTab === 'tab1' ? 'red' : 'black' }}>Tab 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('tab2')}>
                <Text style={{ padding: 10, color: activeTab === 'tab2' ? 'red' : 'black' }}>Tab 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress('tab3')}>
                <Text style={{ padding: 10, color: activeTab === 'tab3' ? 'red' : 'black' }}>Tab 3</Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'tab1' && (
                <View>
                {/* Coloque aqui o conteúdo do primeiro componente */}
                <Text>Tela da guia 1</Text>
                </View>
            )}

            {activeTab === 'tab2' && (
                <View>
                {/* Coloque aqui o conteúdo do segundo componente */}
                <Text>Tela da guia 2</Text>
                </View>
            )}

            {activeTab === 'tab3' && (
                <View>
                {/* Coloque aqui o conteúdo do terceiro componente */}
                <Text>Tela da guia 3</Text>
                </View>
            )}
        </View>
            <S.div>
                <S.text style={styles.input}>{formatCurrency(inputValue)}</S.text>
            </S.div>
            <NumericKeypad onPress={handleNumericKeyPress} onDelete={handleDeletePress} />
    </S.container>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 30,
    marginBottom: 20,
  },
});
