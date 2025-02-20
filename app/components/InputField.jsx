import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const InputField = ({ label, value, onChangeText, error, secureTextEntry, keyboardType, showToggle }) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrapper, error ? styles.inputError : null]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
        />
        {showToggle && (
          <TouchableOpacity onPress={() => setHidden(!hidden)} style={styles.icon}>
            <MaterialIcons name={hidden ? 'visibility-off' : 'visibility'} size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#7F7F7F',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#434343',
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  inputError: {
    borderColor: '#E57373',
  },
  error: {
    color: '#E57373',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputField;
