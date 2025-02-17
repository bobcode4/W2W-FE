import { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Checkbox from '../components/Checkbox';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateInputs = (field, value) => {
    let newErrors = { ...errors };

    if (field === 'email') {
      if (!value) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Invalid email format.';
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'password') {
      if (!value) {
        newErrors.password = 'Password is required.';
      } else if (value.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleLogin = () => {
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Successfully logged in!');
    }, 2000);
  };

  const isFormValid = email && password && isChecked && Object.keys(errors).length === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <InputField
        label="Email/Phone Number"
        value={email}
        autoCapitalize="none"
        onChangeText={(value) => {
          setEmail(value);
          validateInputs('email', value);
        }}
        error={errors.email}
        keyboardType="email-address"
      />

      <InputField
        label="Password"
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          validateInputs('password', value);
        }}
        error={errors.password}
        secureTextEntry
        showToggle
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Checkbox
          label={
            <>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </>
          }
          checked={isChecked}
          onToggle={() => {
            setIsChecked(!isChecked);
            validateInputs('checkbox', !isChecked);
          }}
          error={errors.checkbox}
        />
        <Text style={styles.footerText}>Forgot Password?</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#E57373" style={styles.loader} />
      ) : (
        <AuthButton title="Login" onPress={handleLogin} disabled={!isFormValid} />
      )}

      <Text style={styles.orText}>OR</Text>

      <AuthButton title="Continue With Google" variant="outline" icon={require('../../assets/images/google.webp')} />
      <AuthButton title="Continue With Apple" variant="outline" icon={require('../../assets/images/apple.png')} />

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.sighnUpLink} onPress={() => router.replace('/screens/SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#434343',
    textAlign: 'start',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'start',
    marginBottom: 20,
    marginTop: 4,
  },
  orText: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#000000',
    fontSize: 12,
    marginVertical: 10,
    marginBottom: 20,
  },
  rememberMeText: {
    color: '#E05E63',
    fontWeight: '500',
    fontSize: 12,
  },
  forgotText: {
    color: '#434343',
    fontWeight: '500',
    fontSize: 12,
  },
  footerText: {
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
    fontSize: 12,
    paddingBottom: 50,
  },
  sighnUpLink: {
    color: '#F77A7F',
    fontWeight: '500',
  },
  loader: {
    marginVertical: 20,
  },
});

export default Login;
