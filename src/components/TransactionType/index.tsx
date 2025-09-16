import { View } from 'react-native'
import { styles } from './styles'
import { Option } from './option' 
import { colors } from '../../theme/colors'
import { TransactionTypes } from '../../utils/TransactionTypes'

type Props = {
  selected: TransactionTypes
  onChange: (type: TransactionTypes) => void
}

export function TransactionType({ selected, onChange }: Props) {
  return (
    <View style={{justifyContent: "center", alignItems: "center"}}>
    <View style={styles.container}>
      <Option
        icon="arrow-upward"
        title="Receitas"
        isSelected={selected === TransactionTypes.Input}
        selectedColor={colors.blue[500]}
        onPress={() => onChange(TransactionTypes.Input)}
      />
      <Option
        icon="arrow-downward"
        title="Despesas"
        isSelected={selected === TransactionTypes.Output}
        selectedColor={colors.red[400]}
        onPress={() => onChange(TransactionTypes.Output)}
      />
    </View>
    </View>

)
}