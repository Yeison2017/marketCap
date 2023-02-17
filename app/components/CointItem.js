import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const CointItem = ({ coint }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image
          source={{ uri: coint.image }}
          style={styles.image}
        />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coint.name}</Text>
          <Text style={styles.textSymbol}>{coint.symbol}</Text>
        </View>
      </View>

      <View style={styles.containerNames}>
        <Text style={styles.textPrice}>${coint.current_price}</Text>
        <Text style={[
            styles.pricePercentage, 
            coint.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>
          ${coint.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  )
}

export default CointItem