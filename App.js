import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StatusBar } from 'react-native';
import CointItem from './app/components/CointItem';
import { styles } from './app/styles';

const App = () => {
  const [conins, setConins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing ] = useState(false);

  const loadData = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    const data = await res.json();
    setConins(data);
  }
  useEffect(() => {
    loadData();
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          placeholder="Search a coin"
          placeholderTextColor={"#858585"}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        style={styles.list}
        data={conins.filter((coint) => coint.name.toLowerCase().includes(search.toLowerCase()) 
          || coint.symbol.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => {
          return <CointItem coint={item} />
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async() => {
          setRefreshing(true)
          await loadData();
          setRefreshing(false)
        }}
      />
    </View>
  )
}

export default App