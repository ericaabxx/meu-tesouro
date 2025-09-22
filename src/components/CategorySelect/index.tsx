import { useState } from "react"
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { styles } from "./styles"

type Props = {
  label: string
  value: string | null
  onChange: (value: string) => void
}

const categories = [
  { label: "Alimentação", value: "alimentacao" },
  { label: "Transporte", value: "transporte" },
  { label: "Lazer", value: "lazer" },
  { label: "Educação", value: "educacao" },
]

export function CategorySelect({ label, value, onChange }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Caixa principal */}
      <Pressable style={styles.input} onPress={() => setOpen(true)}>
        <Text style={value ? styles.inputText : styles.placeholder}>
          {value
            ? categories.find((c) => c.value === value)?.label
            : "Selecionar categoria"}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </Pressable>

      {/* Modal */}
      <Modal visible={open} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value)
                    setOpen(false)
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setOpen(false)}
            >
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
